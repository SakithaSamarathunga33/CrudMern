const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require ('body-parser');

// Express app
const app = express()

//import routes 
const postRoutes = require('./routes/posts')

//app middleware
app.use(bodyParser.json());

//routes middleware
app.use(postRoutes);

const PORT = 4000;
const DB_URL = 'mongodb+srv://sakithaudarashmika63:wdbgoe8IabcMdDIO@mernapp.s3ekfyg.mongodb.net/testCrud?retryWrites=true&w=majority&appName=mernApp';

mongoose.connect(DB_URL)
.then(() =>{
    console.log('DB connected')
})
.catch((err) => console.log('DB connection error',err));

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}!`)
})
