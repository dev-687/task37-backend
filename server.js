import express from 'express';
import mongoDBConn from './config/MongoDBConfig.js';
import bodyParser from 'body-parser';
import router from './routers/routers.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = 3000;
const app = express();

// 🛡️ Manual CORS headers (important for Vercel)


// Also keep cors() middleware for local/dev
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', router);


mongoDBConn();

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

export default app;
