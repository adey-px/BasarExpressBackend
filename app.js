import express from 'express';

const app = express();

// Endpoint for new user registration
app.post('/api/1.0/users', (req, res) => {
  return res.send({
    message: 'Your account has been created',
  });
});




export default app;