//node.js
// const http = require('http')
// const server = http.createServer((req, res) => {
//   if (req.url == "/about") {
//     res.end("About Page") }
//   else if (req.url == "/profile") {
//     res.end("Profile Page") }
//   else if (req.url == "/home") {
//     res.end("Home Page") }
// })

// server.listen(3000)


//Express.js
const express = require('express');
const morgan = require('morgan')
const app = express()
const User = require('./models/user') // Importing the User model
const dbconnection = require('./config/db') // Importing the database connection
const userModel = require('./models/user') // Importing the user model


app.use(morgan('dev')) // Logging middleware
app.use(express.json()) // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })) // Middleware to parse URL-encoded bodies
app.use(express.static('public')) // Serve static files from the 'public' directory

app.set("view engine", 'ejs')


// app.use(
//   // Middleware by user
// //   (req, res, next) => {
// //   console.log("Middleware is running")
// //   const a = 10
// //   const b = 20
// //   console.log("Sum is: ", a + b) 
// //  return next()
// // }
//   (req, res, next) => {
//     // console.log("Middleware is running")
//     next()
//   }
// )

app.get('/',
  //third party middleware
// (req, res,next) => {
//   const a = 10
//   const b = 20
//   console.log("Sum is: ", a + b)
//   next() // Call next middleware or route handler
// },

  (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.send("About Page")
})
app.get('/profile', (req, res) => {
  res.send("Profile Page")
}
)
app.get('/home', (req, res) => {  
  res.send("Home Page")
}
)



app.get('/register', (req, res) => {
  res.render('register')
}
)


app.post('/register',async (req, res) => {
  const { username, email, password } = req.body; // Destructure form data from the request body

  const newUser = await  userModel.create({
    username: username,
    email: email,
    password: password })

    res.send(newUser) // Send the created user as a response
  })
  
app.get('/get-users',(req, res) => {
  // userModel.find({
  //   username: 'a'
  // })
  //   .then(users => {
  //     res.send(users) // Send the list of users as a response
  //   })

  userModel.findOne({
    username: 'c'
  })
    .then(user => {
      console.log(user) // Log the found user to the console
      res.send(user) // Send the found user as a response
    })
 
  })


  app.get('/update-user',async (req, res) => {
    await userModel.findOneAndUpdate({
      username: 'a'
    }, {
      email: "c@c.com"
    })
    res.send("User updated successfully") // Send a success message
  })


  app.get('/delete-user',async (req,res)=>{
    await userModel.findOneAndDelete({
      username: 'a'
    })
    res.send("User deleted successfully") // Send a success message
  })





//post= frontend to backend
//get =server to frontend

app.post ('/get-form-data', (req, res) => {
  console.log(req.body) // Access form data from the request body
  res.send("Form data received")

})







app.listen(3000)


