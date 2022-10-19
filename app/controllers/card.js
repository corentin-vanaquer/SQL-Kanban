const { Card } = require('../models/index');

module.exports = {
    async findAll(_, res) {

    },

    async findOne(req, res) {

    },

    async createCard(req, res) {
        const card = await Card.create(req.body);

        res.json(card);
    },

    async updateOne(req, res) {

    },

    async deleteOne(req, res) {

    }

}