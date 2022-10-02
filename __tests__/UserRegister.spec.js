import request from 'supertest';
import app from '../app'

// Test for user registration api endpoint
describe('User Registration', () => {
    it('Status update for VALID register request', (done) => {
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
    it('Success message for VALID register request', (done) => {
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
})

