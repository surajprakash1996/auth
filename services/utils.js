require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const GEN_SALT = process.env.SALT || 10;
const SECRET_KEY = process.env.SECRET_KEY;


async function hashPassword(password) {
    try {
        const hashedPassword = await bcrypt.hash(password, GEN_SALT);
        return hashedPassword;
    } 
    catch (error) {
        console.error('Error hashing password:', error.message);
        throw error;
    }
}


async function verifyPassword(password, hashedPassword) {
    try {
        const match = await bcrypt.compare(password, hashedPassword);
        if (match) {
            return 1;
        } 
        return 0;
    } 
    catch (error) {
        console.error('Error verifying password:', error.message);
        throw error;
    }
}


function generateToken(user) {
    const payload = {
        id: user._id,      
        email: user.emailAddress,
    };
    const options = {
        expiresIn: '1h',
    };
    const token = jwt.sign(payload, SECRET_KEY, options);
    return token;
}


function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        console.log('Decoded token:', decoded);
        return decoded;
    } catch (error) {
        console.error('Invalid token:', error.message);
        return null; // Handle invalid token appropriately
    }
}




module.exports = {
    hashPassword,
    verifyPassword,
    generateToken
}