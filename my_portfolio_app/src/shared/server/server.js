const Mongooose = require("mongoose")
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5007
const bdUrl = `mongodb+srv://dbUser:daviducha7@cluster0.trgw0vr.mongodb.net/auth_project?retryWrites=true&w=majority`
const { userAuth, adminAuth} = require('./controller/ControllerAuth')


const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Credentials", true)
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
};


app.use(express.json());
app.use(cors);
app.use('/api/auth', require('./route/route'));
app.get('/register', (req, res) => res.render('register'));
app.get('/login', (req, res) => res.render('login'));
app.get('/admin', adminAuth, (req,res) => res.render('Admin'));
app.get('/basic', userAuth, (req,res) => res.render('User'));


const connectDB = async() => {
  try {
    await Mongooose.connect(bdUrl,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`Server Connected to port ${PORT}`))
  } catch (error) {
    console.log(error);
  }
  console.log('MongoDB worked');
}
connectDB()
module.exports = connectDB