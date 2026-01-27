import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import databaseConnect from './database.connect.js';
import router from './routes/router.js';

dotenv.config();
const app = express();
const port = 3000;

app.use(express.json());

app.use(router);

databaseConnect();

app.listen(port, () => {
    console.log("Listening in port " + port);
});