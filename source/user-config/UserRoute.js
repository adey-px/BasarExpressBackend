import express from 'express';

import UserService from './UserService.js';

const router = express.Router();

// Endpoint for new user registration
router.post('/api/1.0/users', async (req, res) => {
  //
  await UserService.register(req.body);
  return res.send({
    message: 'Your account has been created',
  });
});


export default router;