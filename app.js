require('dotenv').config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5777;
const path = require('path');

// set middleware
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  console.log("middleware working");
  next();
})


app.get('/', (req, res) =>{
  res.render('index')
})


app.listen(PORT, (req, res) => {
  console.log(`Server is running on port ${PORT}`);
})
