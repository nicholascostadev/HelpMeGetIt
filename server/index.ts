import bodyParser from 'body-parser';
import routesHandler from './router/Handler';
import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config';
import cors from 'cors';

const app = express();

const PORT = 5004;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routesHandler);

if (process.env.DB_URI) {
	mongoose
		.connect(process.env.DB_URI)
		.then(() => console.log('Connected to Database'))
		.catch(err => console.log(err));
} else {
	throw new Error('enviroment variable not found');
}

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
