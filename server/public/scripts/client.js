
$(readyNow)

let newObj = {};
let returnedObjects= [];

function readyNow() {
    
    
    $('#answerDisplay').text('-(0) _ (0)-');
    
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

// on page load, there is an empty object, on running the below function, which happens on click of the equals button, the "newObj" is assigned the apporopriate values according to my data model

function newObjSet(){ 
    newObj.num1 = $('#inputNum1').val();
    newObj.num2 = $('#inputNum2').val();
    newObj.operator = operator.operator;
}

/// these could be one, but it works, also nice to have the easy(er) changing of class when clicking an operator
// they set an operator's property of operator to the selected operator

function clickPlus(){
    console.log('clicked plus');
    operator = {operator:'+'};
    $('#buttonPlus').addClass('selected');
    $('#buttonSub').removeClass('selected');
    $('#buttonMult').removeClass('selected');
    $('#buttonDivide').removeClass('selected');
}

function clickSub(){
    console.log('clicked sub');
    operator = {operator:'-'};  
    $('#buttonPlus').removeClass('selected');
    $('#buttonSub').addClass('selected');
    $('#buttonMult').removeClass('selected');
    $('#buttonDivide').removeClass('selected');
}

function clickMult(){
    console.log('clicked mult');
    operator = {operator:'*'}; 
    $('#buttonPlus').removeClass('selected');
    $('#buttonSub').removeClass('selected');
    $('#buttonMult').addClass('selected');
    $('#buttonDivide').removeClass('selected');
}

function clickDivide(){
    console.log('clicked divide');
    operator = {operator:'/'};   
    $('#buttonPlus').removeClass('selected');
    $('#buttonSub').removeClass('selected');
    $('#buttonMult').removeClass('selected');
    $('#buttonDivide').addClass('selected');
}

// this handles the following on clicking equals 
// setting an object to the values in the number inputs
// setting 
// alerts for empty inputs or operator blank
// clears values and removes selected operator class
// posts data to server in the mathList array and gets the formatted math list after a succesful post

function clickSubmit(){
    console.log('clicked submit');
    newObjSet();
    console.log(newObj);

    if (newObj.num1 == '' || newObj.num2 == ''){
        console.log('error Empty Number');
        alert('One of the number inputs is empty :(')
        return;
    }   else if (newObj.operator == '') {
        console.log('error Empty Operator');
        alert('You have not selected a math operation')
        return;
    }

    $('#inputNum1').val('');
    $('#inputNum2').val('');
    $('button').removeClass('selected');

    $.ajax({
        method: 'POST',
        url: '/objCatcher',
        data: newObj,
    }).then(function (response) {
        console.log(response);
        getHistory();
        
}) 
} 

// this simply clears the inputs and operator when clicked
function clickClear() {
    console.log('clicked clear');
    $('#inputNum1').val('');
    $('#inputNum2').val('');
    operator.operator = '';
    
}

// this gets history, based on the stack in the get route on the server, which performs math on the mathList, and then formats it, and appends it
// it also appends the latest calculations sum property to the dom in the answerdisplay section

function getHistory(){
    console.log('loading history');

    $.ajax({
        method: 'GET',
        url: '/mathList'
    }).then(function (response){
        console.log('106106106!!', response);

        returnedObjects = response; 

        $('#answerDisplay').text(returnedObjects[returnedObjects.length - 1].sum)

        $('#resultsTable').empty();
        response.forEach(thing => {
            $('#resultsTable').append(`<li>${thing.string}</li>`)
        });  
    }) 
}