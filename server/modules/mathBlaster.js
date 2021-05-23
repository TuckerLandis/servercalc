const mathList = require('./mathList.js')

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
    }) // end foreach
} // end mathBlaster

module.exports = mathBlaster();