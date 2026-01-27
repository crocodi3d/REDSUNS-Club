import express from 'express';
import memberRouter from "../member.router.js";

const router = express.Router();
memberRouter(router);

export default router;