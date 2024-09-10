const User = require("../models/userModels");
 
//this is an A synchronis function that registers User
async function registerUser(req,res) {
    try {
        //this waits for the user to be created
        const user = await User.create(
            {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password
            }
        );
        console.log(user);
        //status is the server status code any 200 is an OK code
        res.status(201).send(`User ${req.body.username} has been created.`)
        //this will catch it when user is not found and send an error
    } catch (error) {
        console.log(error);
        //status is the server status code any 400 is an error code
        res.status(418).json({
            msg: "Database Error",
            error: error
        })
    }
}
 
//Exports this file to be used elsewhere
module.exports = registerUser;