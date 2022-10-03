import request from 'supertest';
import app from '../app'
import sequelize from '../source/db-config/database';
import User from '../source/user-model/User';

// Run before all tests run
beforeAll(() => {
  return sequelize.sync();
});

// Clean User table before each test runs
beforeEach(() => {
  return User.destroy({
    truncate: true
  });
});

// Test for user registration api endpoint
describe('User Registration', () => {
  it('Register request for new user is valid', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        username: 'user1',
        email: 'user1@email.com',
        password: 'Pass2word',
      })
      .then((response) => {
        expect(response.status).toBe(200);

        done();
      });
  });
  //
  it('Creation of new user with valid credentials ', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        username: 'user1',
        email: 'user1@email.com',
        password: 'Pass2word',
      })
      .then((response) => {
        expect(response.body.message).toBe('Your account has been created');

        done();
      });
  });
  //
  it('New user is successfully added to db', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        username: 'user1',
        email: 'user1@email.com',
        password: 'Pass2word',
      })
      .then(() => {
        User
          .findAll()
          .then((userList) => {
            expect(userList.length).toBe(1);

          done();
        });
      });
  });
  //
  it('Check username & email fields are sent to db', (done) => {
    request(app)
      .post('/api/1.0/users')
      .send({
        username: 'user1',
        email: 'user1@email.com',
        password: 'Pass2word',
      })
      .then(() => {
        User
          .findAll()
          .then((userList) => {
            const createdUser = userList[0];
            expect(createdUser.username).toBe('user1');
            expect(createdUser.email).toBe('user1@email.com');

            done();
        });
      });
  });
});

