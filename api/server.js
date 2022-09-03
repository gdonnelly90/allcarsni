import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { config } from 'dotenv';
import { connectDB } from './config/db.js';
import routes from './routes/index.js';
import * as dotenv from 'dotenv';

// load process env - may not need in prod
// load config
dotenv.config();
console.log(process.env);
// config();
// set express instance to app
const app = express();
// db connection
connectDB();
// cors
app.use(cors());
// initialis middleware
app.use(express.json({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// remove powered by
app.disable('x-powered-by');

// routes defined
app.use('/api/v1/auth', routes.auth);
app.use('/api/v1/users', routes.user);
app.use('/api/v1/vehicles', routes.vehicle);
app.use('/api/v1/subscriptiontypes', routes.subscriptionType);
app.use('/api/v1/reviews', routes.review);
app.use('/api/v1/filters', routes.filters);
app.use('/api/v1/messages', routes.messages);
app.use('/api/v1/favourites', routes.favourites);

const PORT = process.env.PORT || 5008;

// launch backend service
app.listen(PORT, () =>
  console.log(`AllCarsNI - Server started on port ${PORT}`)
);
