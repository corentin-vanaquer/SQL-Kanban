const { User } = require("../models");
const debug = require("debug")("controller");

module.exports = {
    /**
     * Méthode pour vérifier si un utilisateur, si c'est le cas, on récupère les autres joueurs pour afficher la liste
     * @param {*} req 
     * @param {*} res 
     */
    async isConnected(req,res){
        let users = [];
        const user = req.session.user;
        if(user){
            // récupération des personnes déjà présentes
            users = await Game.getUsers();

            delete user.mail;
            delete user.password;
        }

        res.json({
            user,
            users
        });
    },
    /**
     * Méthode pour créer un utilisateur et l'ajouter à la session
     * @param {*} req 
     * @param {*} res 
     */
    async createUser(req,res){
        const user = await User.create(req.body);
        req.session.user = user;

        delete user.mail;
        delete user.password;

        res.json(user);
    },
    /**
     * Méthode de connexion d'un compte, retourne l'utilisateur et les personnes connectées au jeu
     * @param {*} req 
     * @param {*} res 
     */
    async checkPassword(req,res){
        const user = await User.getUserByMail(req.body.mail);
        
        if(user.checkPassword(req.body.password)){

            // récupération de l'ensemble des utilisateurs
            const users = await Game.getUsers();

            // ajout de l'utilisateur courant
            await Game.addUser(user);
            req.session.user = user;

            delete user.mail;
            delete user.password;
            
            res.json({
                user,
                users
            });
        }
    }
};
