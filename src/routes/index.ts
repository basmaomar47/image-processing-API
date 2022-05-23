import express from 'express';
import imgrsiz from './api/imgrsize';

const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  res.send('welcome ');
});
routes.use('/imgrsiz', imgrsiz);

export default routes;
