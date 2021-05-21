const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended : true}));
app.listen(PORT, () => {
    console.log('RUNNING ON PORT:', PORT)
});

/// "Database"
let mathList = [];




/// POST ROUTES
app.post('/objCatcher', (req, res) => {
   
    console.log('receieved', req.body);
    mathList.push(req.body);
    console.log('Adjusted mathList is', mathList);
    

    res.sendStatus(201)
    
});


/// GET ROUTES

app.get('/mathList', (req, res) => {
    console.log('got to /mathList');

    res.send(mathList);
    // instead of getting from the math array and doing work on the client to display, could format it in the server?
})