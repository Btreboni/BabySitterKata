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
    });
}

function returnTime(time){
    return time;
}

function onFireWageCalculatorButton() {
    let startValue = Number(returnTime($('#start-time-value').val()));
    let downTimeValue = Number(returnTime($('#down-time-value').val()));
    let endTimeValue = Number(returnTime($('#end-time-value').val()));
    
    let validateHours = startValue > downTimeValue || startValue > endTimeValue || downTimeValue > endTimeValue;
    let areHoursNullOrEmpty = startValue === "" || endTimeValue === "" || downTimeValue === "";

    if(validateHours){
        alert("Sorry, an error occured. Please make sure that your hourly time-line is correct");
    }

    if(areHoursNullOrEmpty){
        alert("Sorry, an error occured. Please make sure that all your start, down, and end times all have values.");
    }

    let data= JSON.stringify({
        "startTime": startValue,
        "downTime": downTimeValue,
        "endTime": endTimeValue
    })

    console.log(data);

    $.ajax({
        type: 'POST',
        url: 'https://localhost:5001/api/calculate/wages',
        dataType: 'json',
        contentType: 'application/json',
        processData: false, 
        data: JSON.stringify({
            "startTime": startValue,
            "downTime": downTimeValue,
            "endTime": endTimeValue
        }),

        success: function(data, textStatus, jQxhr){
            console.log(data);
        },

        error: function(jQxhr, textStatus, errorThrown){
            console.log(errorThrown);
        }
    });
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