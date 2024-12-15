const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3000;

const express = require('express');
const app = express();
const dbConnection = require('./services/db.connection');
const path = require('path');
const authRoutes =  require('./routes/auth.routes');


/** Databse connection establish... */
dbConnection();

/** Set view template engine */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

/** Static folders */
app.use(express.static(path.join(__dirname,'public')));


/** Parse in json format from client */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/** Parse in cookie  */

app.use(cookieParser()); 

/** Routes */
app.use(authRoutes);


/** Server running... */
app.listen(PORT , function() {
    console.log(`Server is running on PORT: ${PORT}`);
});


module.exports = app;
