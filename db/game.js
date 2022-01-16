const Joi = require('joi');
const db = require('./connection');

const schema = Joi.object().keys({ 
  score: Joi.number().required()
});

const games = db.get('games');

function getAll() {
    return games.find();
}

async function create(game) {
    const result = schema.validate(game);
    if (result.error == null) {
        game.created = new Date();
        return await games.insert(game);
    } else {
        return Promise.reject(result.error);
    }
}

async function updateGame(id, newScore) {
    try {
        games.findOneAndUpdate(
        { _id: id },
        { $set: { score: newScore } }
        );
        return Promise.resolve('Score updated.');
    } catch (error) {
        return Promise.reject(error);
    }
}

module.exports = {
    getAll,
    create,    
    updateGame
};
