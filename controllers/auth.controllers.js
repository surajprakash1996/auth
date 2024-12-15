const authModel = require('../models/auth.models');
const { hashPassword } = require("../services/utils")

async function loginHandler(req, res) { }
async function registerHandler(req, res) {
    let { firstname, lastname, address, gender, phonenumber, email, password, confirmpassword } = req.body;
    
    const hashedPassword = await hashPassword(password);

    try {
        const authUser = new authModel({
            firstName: firstname,
            lastName: lastname,
            address: address,
            gender: gender,
            phonenumber: phonenumber,
            emailAddress: email,
            password: hashedPassword
        });

        const data = await authUser.save();

        return res.redirect('/dashboard' , );

    }
    catch (err) {
        return res.status(500).render('errors');
    }
}

async function getDashboardHandler(req, res) {
    return res.render('pages/dashboard', { pageTitle: 'Home | Dashboard' });
}
async function getLogin(req, res) {
    return res.render('index', { pageTitle: 'Home | Login' });
}
async function getRegister(req, res) {
    return res.render('pages/register', { pageTitle: 'Home | Register' });
}

module.exports = {
    getLogin,
    getRegister,
    getDashboardHandler,
    loginHandler,
    registerHandler,
}