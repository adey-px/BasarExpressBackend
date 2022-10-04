import request from 'supertest';
import app from '../app';
import sequelize from '../source/db-config/Database';
import UserModel from '../source/user-config/UserModel';

// Run before all tests run
beforeAll(() => {
  return sequelize.sync();
});

// Clean User table before each test runs
beforeEach(() => {
  return UserModel.destroy({
    truncate: true,
  });
});

//
// Test for user registration api endpoint
describe('User Registration', () => {
  //
  const validUser = () => {
    return request(app).post('/api/1.0/users').send({
      username: 'user1',
      email: 'user1@email.com',
      password: 'Pass2word',
    });
  };
  //
  it('Register request for new user is valid', async () => {
    const response = await validUser();
    expect(response.status).toBe(200);
  });
  //
  it('Creation of new user with valid credentials ', async () => {
    const response = await validUser();
    expect(response.body.message).toBe('Your account has been created');
  });
  //
  it('New user is successfully added to db', async () => {
    await validUser();
    const userList = await UserModel.findAll();
    expect(userList.length).toBe(1);
  });
  //
  it('Check username & email fields are sent to db', async () => {
    await validUser();
    const userList = await UserModel.findAll();
    const createdUser = userList[0];
    expect(createdUser.username).toBe('user1');
    expect(createdUser.email).toBe('user1@email.com');
  });
  //
  it('Hash user password sent to db', async () => {
    await validUser();
    const userList = await UserModel.findAll();
    const createdUser = userList[0];
    expect(createdUser.password).not.toBe('Pass2word');
  });
});