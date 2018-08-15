import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();
const router = express.Router();
// app.get('/', (req, res) => res.send('test'));

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB connection established sucessfully');
});

app.use('/', router);

app.listen(4000, () => console.log('Expess server running on 4000 port'));