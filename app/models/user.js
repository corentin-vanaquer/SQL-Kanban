const client = require("../config/db");

class User {
    constructor(obj){
        this.id = obj.id;
        this.firstname = obj.firstname;
        this.lastname = obj.lastname;
        this.mail = obj.mail;
        this.password = obj.password;
    }

    /**
     * Ajout d'un nouvel utilisateur en BDD
     * @param {Object} userTemp 
     * @returns {User}
     */
    static async create(userTemp){
        const result = await client.query("Insert INTO user VALUES ($1, $2, $3, $4, $5)",[userTemp]);
        const user = new User(result.rows[0]);
        return user;
    }

    /**
     * Récupération des informations d'un utilisateur via son email
     * @param {String} mail 
     * @returns 
     */
    static async getUserByMail(mail){
        const result = await client.query('SELECT * FROM public."user" WHERE mail=$1',[mail]);

        if(result?.rows.length > 0){
            
            return new User(result.rows[0]);
        }
        else{
            // erreur lors de la récupération
            return;
        }
    }

    /**
     * Vérification du mot de passe
     * @param {String} passwordTemp 
     * @returns {Boolean}
     */
    checkPassword(passwordTemp){
        return this.password === passwordTemp;
    }

    /**
     * Mise à jour du statut de l'utilsateur (PRET/PAS PRET)
     * @param {Boolean} state 
     */
    async updateState(state){
        await client.query('SELECT update_state($1,$2)',[this,state]);
        this.state = state;
    }


}

module.exports = User;