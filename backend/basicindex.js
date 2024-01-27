import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './config/dbConnect.js';
import UserRoutes from './routes/UserRoutes.js';

// this creates an express application to write routes and middlewares
const app = express();

//connecting to the db
connectDB();


//this parses incoming json request payloads
app.use(express.json());
// this is a alternative for body parser
app.use(express.urlencoded({ extended: true }));
// this accepts requests from any domain
app.use(cors());
// logging middleware for nodejs applications
app.use(morgan('tiny'));
// less hackers know about our stack
app.disable('x-powered-by'); 


/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

//api routes 
app.use('/api/user', UserRoutes);

//port for server
const port = 8082;

// listening to server
app.listen(port, () => {
    console.log(`server running on ${port}`);
})
