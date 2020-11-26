import express from 'express';

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Typescrit' });
});

app.listen(3333);
