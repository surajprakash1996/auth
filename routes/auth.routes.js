const express = require("express");
const { loginHandler , registerHandler, getLogin , getDashboardHandler , getRegister} = require("../controllers/auth.controllers");
const router = express.Router();

router.get('/', getLogin );
router.get('/dashboard', getDashboardHandler);
router.get('/register', getRegister );
router.post('/register', registerHandler);
router.post('/login', loginHandler);


module.exports = router;

