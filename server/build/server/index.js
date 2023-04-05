// server.js
import express from 'express';
import { nextRequestHandler } from '../next-app/util/server.js';
const app = express();
const port = 3000;
app.use('/', async (req, res) => {
  await nextRequestHandler(req, res);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
