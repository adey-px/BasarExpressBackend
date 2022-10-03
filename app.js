import express from 'express';
import User from './source/user-model/User.js';


const app = express();

//
app.use(express.json());

// Endpoint for new user registration
app.post('/api/1.0/users', (req, res) => {
  User
    .create(req.body)
    .then(() => {
      return res.send({
        message: 'Your account has been created',
      });
    }) 
});




export default app;