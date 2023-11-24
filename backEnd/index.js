

const express = require('express')
const cors = require('cors')


const app = express()

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json())



//routers 


// const users = require('./routes/users')
const products = require('./routes/product')
const login = require('./routes/login')




const path= require ('path')

const db= require('./models')



const { product } = require('./controllers')












// app.use('/users', users);
app.use('/product', products);
app.use('/login', login);


app.use('/static', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

(async () => {
    await db.sequelize.sync(); //this is gonna run mysql code
})(); //IIFE  (parenthesis)  used to avoid polluting the global namespace.

app.use((req, res, next) => {
    console.log(new Date().toLocaleDateString());
    next();
})




app.get('/', [
    (req, res, next) => {
        res.send('This is the home page!')
    }
]);

app.use(function(request, response, next) {
    console.log('This is global middleware!');
    next();
});
// 
(async () => {
    await db.sequelize.sync(); // This is gonna run MySQL code
    connectToDatabase();
  })(); // IIFE (immediately-invoked function expression) used to avoid polluting the global namespace.
  
  function connectToDatabase() {
    db.sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch((error) => {
        console.error('Unable to connect to the database:', error);
      });
  }
  

//port
const PORT = 8001


//server
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})




