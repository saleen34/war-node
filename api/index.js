import express from 'express';

class MyRouter {
  constructor (game) {
    this.game = game;
    this.routes = express.Router();

    this.routes.put('/game', (req, res) => {
      const warId = this.game.createWar();
      res.status(201).send({ id: warId.toString() });
    });

    this.routes.get('/game/:id', (req, res) => {
      const war = this.game.getWar(req.params.id);
      if (!war) {
        res.status(404).send('Game not found');
        return;
      }

      res.status(200).send({
        playerOne: war.player0.countCards(),
        playerTwo: war.player1.countCards()
      });
    });

    this.routes.post('/game/:id/play', (req, res) => {
      const war = this.game.getWar(req.params.id);
      if (!war) {
        res.status(404).send('Game not found');
        return;
      }
      war.runBattle().then((battle) => {
        res.status(200).send({
          winner: battle.getWinner().name,
          playerOne: {
            deck: battle.player0.countCards(),
            cards: battle.player0.showCards()
          },
          playerTwo: {
            deck: battle.player1.countCards(),
            cards: battle.player1.showCards()
          }
        });
      });
    });
  }
}

export default MyRouter;
