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


app.use(morgan('dev')) // Logging middleware

app.set("view engine", 'ejs')



app.get('/',(req,res,next)=>{
  const a=5;
  const b=10;
  const sum = a + b;
  console.log(`Sum is: ${sum}`);
  next();
}, (req, res) => {
  res.render('index')
})

app.get('/about',(req,res,next)=>{
  const c=100;
  const d=100;
  const sum1 = c + d;
  console.log(`Sum is: ${sum1}`);
  next();
}, (req, res) => {
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

app.listen(3000)