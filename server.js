import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import MyRouter from './api';
import Game from './src/Game';

const game = new Game();
const myRoutes = new MyRouter(game);

const app = express();
app.use(bodyParser.json());
app.use('/', myRoutes.routes);

app.listen(config.port, config.host, () => {
  console.log('Game server is running on:', config.host, config.port);
});
