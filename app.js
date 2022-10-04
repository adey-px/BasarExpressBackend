import express from 'express';
import UserRoute from './source/user-config/UserRoute.js';

const app = express();

//
app.use(express.json());

// User router
app.use(UserRoute)


export default app;