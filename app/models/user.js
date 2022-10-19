const client = require("../config/db");

class User {
    constructor(obj){
        this.id = obj.id;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.email = obj.email;
        this.password = obj.password;
    }

    /**
     * create new user in DB
     * @param {Object} userToInsert 
     * @returns {User}
     */
    static async create(userToInsert){
        
        const values = [];
        const columns = [];
        let counter = 1;
        const queryParams = [];
        
        for (const key in userToInsert) {
          columns.push(key);
          queryParams.push(`$${counter}`);
          counter++
          
          values.push(userToInsert[key]);
        }
    
        const queryString = `
        INSERT INTO "user" (${columns.join(',')}) VALUES (${queryParams.join(',')}) RETURNING *;`;
    
        const result = await client.query(queryString, [...values]);
    
        return result.rows;
    };

    /**
     * login 
     * @param {Object} emailToFind 
     * @returns {User}
     */
    static async findUserLoggedByEmail(emailToFind) {

        const queryString = `
        SELECT "user".id, "user".email, "user".password
        FROM "user"
        WHERE "user".email = $1;
        `;
      
        const result = await client.query(queryString, [emailToFind]);
    
        return result.rows;
      };

}

module.exports = User;