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
   
    console.log('ln 20 receieved', req.body);
    mathList.push(req.body); //  <------------------------reqdotbody
    console.log('ln 22 Adjusted mathList is', mathList);
    
    

    res.sendStatus(201)
    
});


/// GET ROUTES

app.get('/mathList', (req, res) => {
    console.log('ln 34 got to /mathList');

    mathBlaster(mathList);
    formatter(mathList); // will be appender

    res.send(mathList);
    // instead of getting from the math array and doing work on the client to display, could format it in the server?
})




/// server functions


function mathBlaster(mathList) {
    mathList.forEach(thing => {

        switch (thing.operator)
{
    case '+': thing.sum = (Number(thing.num1) + Number(thing.num2))
        break;
    case '-': thing.sum = (Number(thing.num1) - Number(thing.num2))
        break;
    case '*': thing.sum = (Number(thing.num1) * Number(thing.num2))
        break;
    case '/': thing.sum = (Number(thing.num1) / Number(thing.num2))
        break;
    default: console.log('ln 61 mathBlaster is broken');
    
} // end switch
    })
} // end mathBlaster







// to do maybe a seperate get to get the sum/diff and display on the right side of page?

function formatter(mathList) {
    console.log('ln 76 formatter in: ', mathList);
    
    mathList.forEach(thing => {
        thing.string = `${thing.num1}  ${thing.operator}  ${thing.num2}  =  ${thing.sum}`;
        console.log(thing.string);
        
    });

   
    
}