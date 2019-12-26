const express = require('express');
const app = express();
// var cors = require('cors')
var router = express.Router();
var db = require('./config/db.js');
// app.use(cors())
var bodyParser = require('body-parser');

router.use(bodyParser.json());


app.listen(process.env.PORT || 300, function() {
    console.log('server is listening')
})

app.use(express.json());

app.use(express.urlencoded({extended: true}));

app.use('/', require('./routes/index.js'))

// app.get('/test', (req, res) => {
//     res.send({message: "Worked"})
// })

// app.get('/getAllFriends', (req, res) => {
//     console.log('hello world')
//     res.send({users: [], message: 'successful'})
// })

// app.post('/addFriend', (req, res) => {
//     console.log('hello world')
//     res.send({message: 'friend added'})
// })