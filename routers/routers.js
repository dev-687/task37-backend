import express from 'express';
import DataController from '../controllers/DataController.js';
const router = express.Router();

// Middleware to log method name and timestamp
// router.use((req, res, next) => {
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
//     next();
// });


router.post('/data', DataController.storeData);

router.get('/data', DataController.getData);

export default router; 
