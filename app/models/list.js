const client = require("../config/db");

class List {
    constructor(obj){
        this.id = obj.id;
        this.name = obj.name;
        this.position = obj.position;
    }

    /**
     * create a list in DB
     * @param {Object} userId
     * @param {Object} listToInsert 
     * @returns {User}
     */
    static async create(userId, listToInsert){
        
        const listName = listToInsert.name;
        const listPosition = listToInsert.position;
    
        const queryString = `
        INSERT INTO list ("name", "position", "user_id") VALUES ($1, $2, $3) RETURNING *;
        `;
    
        const result = await client.query(queryString, [listName, listPosition, userId]);
    
        return result.rows;
    };

    /**
     * update a list in DB
     * @param {Object} userId
     * @param {Object} listToUpdate 
     * @returns {User}
     */
    static async updateOne(userId, listToUpdate){

        let queryString = "";
        let counter = 1;
        let queryParams = [];
        let values = [];
        let columns = [];

        const listId = listToUpdate.id;
    
        for (const key in listToUpdate){
            columns.push(key);
            queryParams.push(`$${counter}`);
            counter++
    
            values.push(listToUpdate[key]);
        }
    
        if (queryParams.length > 1) {
            queryString = `UPDATE list SET ( ${columns.join(',')} ) = ( ${queryParams.join(',')} ) WHERE list.user_id = ${userId} AND list.id = ${listId} RETURNING ${columns.join(',')};`;
    
        } else {
            queryString = `UPDATE list SET ${columns.join(',')} = ${queryParams.join(',')} WHERE list.user_id = ${userId} AND list.id = ${listId} RETURNING ${columns.join(',')};`;
        }
    
        const result = await client.query(queryString, [...values]);
    
        return result.rows;
    };

    /**
     * delete a list in DB
     * @param {Object} userId
     * @param {Object} userBody 
     * @returns {User}
     */
    static async deleteOne(userId, userBody){

        const listId = userBody.id;

        let queryString = `
        DELETE FROM list 
        WHERE list.id = $1 AND list.user_id = $2 
        RETURNING *`;
    
        await client.query(queryString, [listId, userId]);
    
        const result = await client.query(`SELECT list.id as list_id, list.name, list.position, list.user_id FROM list WHERE list.user_id = $1;`, [userId]);
    
        return result.rows
    };

    /**
     * find a user lists in DB
     * @param {Object} userId
     * @returns {User}
     */
    static async find(userId){

        let queryString = `
        SELECT list.id, list.name, list.position, list.user_id 
        FROM list 
        WHERE list.user_id = $1;
        `;

        const result = await client.query(queryString, [userId])
        
        return result.rows
    };

}

module.exports = List;