export const getLocalUser = () => {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
};

export const setLocalUser = (data) => {
  console.log('SET LOCAL USER');
  console.log(data);
  localStorage.setItem('user', JSON.stringify(data));
};
