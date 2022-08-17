import jwt from 'jsonwebtoken';
import config from 'config';

export const auth = (req, res, next) => {
  // get token from header
  const token = req.header('authorization');
  // check if token exists
  if (!token) {
    return res.status(401).json({ msg: 'authorisisation denied' });
    // return next(new Error('User not loggedIn'), 401)
  }
  // verify Token
  try {
    const bearer = token.split(' ')[1];
    const decoded = jwt.verify(bearer, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Invalid token' });
  }
};

export const restrict = (roles) => {
  return (req, res, next) => {
    console.log(roles);
    const activeRoles = roles.filter((role) => {
      return req.user.roles.includes(role);
    });
    if (!activeRoles.length) {
      return res.status(403).json({ msg: 'Forbidden, restricted access only' });
    }
    next();
  };
};
