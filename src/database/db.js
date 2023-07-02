import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const { DEV_DB_URL, TEST_DB_URL, DEPLOY_DB_URL } = process.env;

let dbUrl;

switch (process.env.NODE_ENV) {
  case 'development':
    dbUrl = DEV_DB_URL;
    break;
  case 'test':
    dbUrl = TEST_DB_URL;
    break;
  case 'production':
    dbUrl = DEPLOY_DB_URL;
    break;
  default:
    throw new Error('Invalid environment');
}

// Connect to MongoDB
const dbconnect=() =>mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));


  export default dbconnect;