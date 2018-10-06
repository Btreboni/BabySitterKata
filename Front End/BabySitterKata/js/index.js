let num = 1;

$(document).ready(function(){
    runProgram();
});

function runProgram(){
    hideBoxTwo();
    onClickStartWageCalculatorButton();
}

function onClickStartWageCalculatorButton(){
    $("#start-wage-calculator-button").click(function(){
        hideBoxOne();
        showBoxTwo();
    })
}

function hideBoxOne(){
    $("#box-one").hide();
}

function showBoxTwo(){
    $("#box-two").show();
}

function hideBoxTwo(){
    $("#box-two").hide();
}