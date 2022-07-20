import User from './user.model.js';

export const getUserByEmail = async(email) => {
    return await User.findOne({email}).exec();
}

export const getUserById = async(id) => {
    return await User.findOne({id}).exec();
}