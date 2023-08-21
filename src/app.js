import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import routes from './routes/index.js';




const app = express();

app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));




app.use('/', routes);
app.all('*', (req, res) => {
  res.status(404).send({ message: 'Route not found' })
  
})


export default app;