$(document).ready(function(){
    runProgram();
});

function runProgram(){
    hideBoxTwo();
    onClickStartWageCalculatorButton();
    onStartValueChange();
    onFireWageCalculatorButton();
}

function onClickStartWageCalculatorButton(){
    $("#start-wage-calculator-button").click(function(){
        hideBoxOne();
        showBoxTwo();
    })
}

function returnTime(time){
    return time;
}

function onFireWageCalculatorButton() {
    let startValue = returnTime($('#start-time-value').val());
    let downTimeValue = returnTime($('#down-time-value').val());
    let endTimeValue = returnTime($('#end-time-value').val());
    let validateHours = startValue > downTimeValue || startValue > endTimeValue || downTimeValue > endTimeValue;
    let areHoursNullOrEmpty = tartValue === "" || endTimeValue === "" || downTimeValue === "";

    if(validateHours){
        alert("Sorry, an error occured. Please make sure that your hourly time-line is correct");
    }

    if(areHoursNullOrEmpty){
        alert("Sorry, an error occured. Please make sure that all your start, down, and end times all have values.")
    }

    $.ajax({
        type: 'POST',
        url: '',
        dataType: 'json',
        contentType: 'application/json',
        processData: false, 
        data: JSON.stringify({
            "startTime": startValue,
            "downTime": downTimeValue,
            "endTime": endTimeValue
        }),

        success: function(data, textStatus, jQxhr){
            // return call will go here
        },

        error: function(jQxhr, textStatus, errorThrown){
            console.log(errorThrown);
        }
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