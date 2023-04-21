const express = require('express');
const morgan = require('morgan');
const {mongoose} = require('./database');

const app = express();

/*SETTINGS:*/
app.set('port', process.env.PORT || 4000);


/*MIDDLEWARES:*/
app.use(morgan('dev'));
app.use(express.json());


/*ROUTES:*/
app.use( '/api/movieCRUD', require('./routes/movies.routes'));

/*STATIC FILES:*/


app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});