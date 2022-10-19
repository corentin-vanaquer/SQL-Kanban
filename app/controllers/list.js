const { List } = require("../models");
const debug = require("debug")("controller");

module.exports = {
    
    /**
     * Method to create a list
     * @param {*} req 
     * @param {*} res 
     */
    async createList(req, res) {

        const userId = req.params.id;

        const listToInsert = req.body;

        const result = await List.create(userId, listToInsert);

        // req.session.user = user;

        // We update the password into crypted string

        res.json(result);
    },

    /**
     * Method to fetch all lists of a user
     * @param {*} req 
     * @param {*} res 
     */
    async findAll(req, res) {

        const userId = req.params.id;

        const result = await List.find(userId);

        res.json(result);
    },

    /**
     * Method to update a list
     * @param {*} req 
     * @param {*} res 
     */
    async updateOne(req, res) {

        const userId = parseInt(req.params.id);

        const userBody = req.body;

        const result = await List.updateOne(userId, userBody);

        res.json(result);
    },

    /**
     * Method to delete a list
     * @param {*} req 
     * @param {*} res 
     */
    async deleteOne(req, res) {

        const userId = req.params.id;
        const userBody = req.body;
    
        const listDeleted = await List.deleteOne(userId, userBody);


        res.json(listDeleted);
    
    }
}