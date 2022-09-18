import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postsRoutes from './routes/posts.js';

const app = express()
dotenv.config();

app.use(cors())
app.use(bodyParser.json({ limit: '2mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '2mb', extended: true }));

app.use('/posts', postsRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
     .catch((err) => console.log(err));

