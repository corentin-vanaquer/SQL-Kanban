const client = require ('../config/db');

class Card {
    constructor(obj){
        this.id = obj.id;
        this.title = obj.title;
        this.position = obj.position;
        this.color = obj.color;
    }

    /**
     * Ajout d'un nouvel card en BDD
     * @param {Object} cardTemp 
     * @returns {Card}
     */
    async create(cardTemp){
        const result = await client.query("INSERT INTO card VALUE ($1, $2, $3, $4);",[cardTemp]);
        const user = new Card(result.rows[0]);
        return user;
    }

}

module.exports = Card;