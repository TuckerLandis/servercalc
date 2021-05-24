const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// const PORT = process.env.PORT || 80
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
//app.listen(PORT, () => {
//    console.log('RUNNING ON PORT:', PORT)
//});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

// modules
// const mathBlaster = require('./modules/mathBlaster')
// const mathList = require('./modules/mathList.js')
// couldn't get these to work properly, kept giving me mathList undefined on server start, will circle back


/// "Database"
let mathList = [];


/// POST ROUTES
app.post('/objCatcher', (req, res) => {

    console.log('ln 20 receieved', req.body);
    mathList.push(req.body);
    console.log('ln 22 Adjusted mathList is', mathList);

    res.sendStatus(201)

});


// GET ROUTES
app.get('/mathList', (req, res) => {
    console.log('ln 34 got to /mathList');

    mathBlaster(mathList);
    formatter(mathList);

    res.send(mathList);

})

function mathBlaster(mathList) {
    mathList.forEach(thing => {

        switch (thing.operator) {
            case '+':
                thing.sum = (Number(thing.num1) + Number(thing.num2))
                break;
            case '-':
                thing.sum = (Number(thing.num1) - Number(thing.num2))
                break;
            case '*':
                thing.sum = (Number(thing.num1) * Number(thing.num2))
                break;
            case '/':
                thing.sum = (Number(thing.num1) / Number(thing.num2))
                break;
            default:
                console.log('ln 61 mathBlaster is broken');

        } // end switch
    }) // end foreach
} // end mathBlaster


function formatter(mathList) {
    console.log('ln 76 formatter in: ', mathList);

    mathList.forEach(thing => {
        thing.string = `${thing.num1}  ${thing.operator}  ${thing.num2}  =  ${thing.sum}`;
        console.log(thing.string);
    });
}