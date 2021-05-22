
$(readyNow)

let newObj = {};

function readyNow() {
    
    
    //click listeners
    $('#buttonPlus').on('click', clickPlus);
    $('#buttonSub').on('click', clickSub);
    $('#buttonMult').on('click', clickMult);
    $('#buttonDivide').on('click', clickDivide);
    $('#buttonSubmit').on('click', clickSubmit);
    $('#buttonClear').on('click', clickClear);

    getHistory();
    
    let operator = {};

}


// function to collect and wrap object
// post to server
// on = press, send and clear inputs
// on C press clear the inputs


// on page refresh load (append history from server)


/// possibilities for order - clicking submit sends an onbject || clicking submit adds an object to an array and also sends--too complicated maybe needed though



function newObjSet(){
    // make a new empty object on page load - tied to line 16
    
    newObj.num1 = $('#inputNum1').val();
    newObj.num2 = $('#inputNum2').val();
    newObj.operator = operator.operator;
    
}

/// these should be one, but it works
function clickPlus(){
    console.log('clicked plus');
    operator = {operator:'+'};
}

function clickSub(){
    console.log('clicked sub');
    operator = {operator:'-'};
    
}

function clickMult(){
    console.log('clicked mult');
    operator = {operator:'*'};
    
}

function clickDivide(){
    console.log('clicked divide');
    operator = {operator:'/'};
    
}


function clickSubmit(){
    console.log('clicked submit');
    newObjSet();
    console.log(newObj);

    $('#inputNum1').val('');
    $('#inputNum2').val('');

    // ajax post // on server receive and probably split to history - math functions 
    $.ajax({
        method: 'POST',
        url: '/objCatcher',
        data: newObj,
    }).then(function (response) {
        console.log(response);



        getHistory();
        
}) //end then and ajax
} // end clickSub

function clickClear() {
    console.log('clicked clear');
    $('#inputNum1').val('');
    $('#inputNum2').val('');
    
}

function getHistory(){
    console.log('loading history');

    $.ajax({
        method: 'GET',
        url: '/mathList'
    }).then(function (response){
        console.log('106106106!!', response);
        $('#resultsTable').empty();
        response.forEach(thing => {
            $('#resultsTable').append(`<li>${thing.string}</li>`)
        });
        
    })
    
}