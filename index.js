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

app.get('/score', async (req, res) => {
  games
    .getAll()
    .then((result) => {
      res.json(result);
    });
});

app.post('/updatescore', async (req, res) => {
    var requestData = req.body.score;  
    var records = await games.getAll();  

    //  For the first time when there is no record in the database, create a new record.
    if (records.length == 0) {
        var data = { score : 1 };
        await games
            .create(data)            
            .catch((error) => {
            res.status(500);
            res.json(error);
            });
    } else {
        // If there is already one record, then update it.
        var id = records[0]._id;
        var score = records[0].score;
        var newScore = parseInt(score) + parseInt(requestData);        
        await games
            .updateGame(id, newScore)
            .catch((error) => {
                res.status(500);
                res.json(error);
            });
    } 
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
