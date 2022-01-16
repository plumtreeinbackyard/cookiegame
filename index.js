const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const games = require('./db/games');

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/updatescore', (req, res) => {
    var newScore = req.body;  
  
    var records = games.getAll();
    //  For the first time when there is no record in the database.
    if (records.length == 0) {
        var data = { score : 0 };
        games
            .create(data)
            .then((product) => {
            res.json(product);
            })
            .catch((error) => {
            res.status(500);
            res.json(error);
            });
    } else {
        // If there is already one record, then update it.
        var id = records[0].id;
        var score = records[0].score;
        newScore += score;
        games
            .updateGame(id, newScore)
            .then((result) => {
                res.json(result);
            })
            .catch((error) => {
                res.status(500);
                res.json(error);
            });
    }  

    // Get the latest score from database.
    games
        .getAll()
        .then((result) => {
            res.json(result);
        });
});

app.all('/', (_req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'dist/index.html'));  
  } catch (error) {
    res.json({
      success: false,
      error: 'Something went wrong with page loading.',
    });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
