
$(readyNow)

let newObj = {};
let returnedObjects= [];

function readyNow() {

    $('#answerDisplay').empty();
    
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

function newObjSet(){ 
    newObj.num1 = $('#inputNum1').val();
    newObj.num2 = $('#inputNum2').val();
    newObj.operator = operator.operator;
}

/// these should be one, but it works
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

function clickClear() {
    console.log('clicked clear');
    $('#inputNum1').val('');
    $('#inputNum2').val('');
    operator.operator = '';
    
}

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