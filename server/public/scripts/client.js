console.log('JS');

$(readyNow)

function readyNow() {
    console.log('JQ');
    
    //click listeners
    $('#buttonPlus').on('click', clickPlus);
    $('#buttonSub').on('click', clickSub);
    $('#buttonMult').on('click', clickMult);
    $('#buttonDiv').on('click', clickDiv);
    $('#buttonSubmit').on('click', clickSubmit);
    $('#buttonClear').on('click', clickClear);

}


// function to collect and wrap object
// post to server
// on = press, send and clear inputs
// on C press clear the inputs

function clickPlus(){
    console.log('clicked plus');
    
}

function clickSub(){
    console.log('clicked sub');
    
}

function clickMult(){
    console.log('clicked mult');
    
}

function clickDiv(){
    console.log('clicked divide');
    
}

function clickSubmit(){
    console.log('clicked submit');
    
}

function clickClear() {
    console.log('clicked clear');
    
}