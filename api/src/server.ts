import express, { response } from 'express';

import './database/connection'

const app = express();

app.use(express.json());

app.post('/users/:id', (request, response) => {
  return response.json({ message: 'Hello World!' });
});

/* localhost:3333 */
app.listen(3333);