import bcrypt from 'bcrypt';

import UserModel from './UserModel.js';


const register = async (body) => {
  //
  const pword = await bcrypt.hash(body.password, 10);
  // const user = {...body, password: pword};
  const user = {
    username: body.username,
    email: body.email,
    password: pword,
  };

  await UserModel.create(user);
};


export default { register };