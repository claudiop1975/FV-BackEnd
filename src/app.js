import express from 'express';
import morgan from 'morgan';

//import routes from './routes/index.js';




const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*'/* 'http://localhost:3000' */); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


//app.use('/', routes);
app.all('*', (req, res) => {
  res.status(404).send({ message: 'Route not found' })
  
})


export default app;