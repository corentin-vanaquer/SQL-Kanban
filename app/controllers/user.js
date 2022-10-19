const { User } = require("../models");
const debug = require("debug")("controller");
const bcrypt = require("bcryptjs");

module.exports = {

    /**
     * Method to create a user
     * @param {*} req 
     * @param {*} res 
     */
    async createUser(req,res){

        const userToInsert = req.body;

        userToInsert.password = bcrypt.hashSync(req.body.password, 8);

        const result = await User.create(userToInsert);

        // req.session.user = user;

        // We update the password into crypted string

        res.json(result);
    },


  /**
   * Method to login
   * @param {*} req 
   * @param {*} res 
   */
  async login(req, res) {

    const emailToFInd = req.body.email;

    // We fetch the user according to his email
    const user = await User.findUserLoggedByEmail(emailToFInd);

    // If user don't exist, obligatory send a 0 length 
    if (user.length === 0) {
      res.status(404).send({
        message: "User not found"});
    }

    // Compare the user password with the crypted password in Db, return boolean
    const passwordIsValid = bcrypt.compareSync(
      req.body.password,
      user[0].password
    );

    if (!passwordIsValid) {
      res.status(401).send({
        message: "Invalid password"});
    }

    // We create an object for the Front response
    const userLogged = {
      userId: user[0].id, 
    }

    res.json(userLogged);
  },

};
