const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5007

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async() => {
  try {
    await mongoose.connect(`mongodb+srv://dbUser:daviducha7@cluster0.trgw0vr.mongodb.net/auth_project?retryWrites=true&w=majority`)
    app.listen(PORT, () => {
      console.log(`server has started ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}

start()