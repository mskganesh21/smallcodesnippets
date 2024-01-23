import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// this creates an express application to write routes and middlewares
const app = express();

//this parses incoming json request payloads
app.use(express.json());
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

const port = 8082;

app.listen(port, () => {
    console.log(`server running on ${port}`);
})
