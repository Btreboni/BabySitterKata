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

function onStartValueChange(time){
    let returnTime = handleTimeChange(time);
    return returnTime;
}

function onDownTimeValueChange(time){
    let returnTime = handleTimeChange(time);
    return returnTime;
}

function onEndTimeValueChange(time){
    let returnTime = handleTimeChange(time);
    return returnTime;
}

function handleTimeChange(time){
    if (time.value !== "") {
        let hours = time.split(":")[0];
        let minutes = time.split(":")[1];
        let suffix = hours >= 12 ? "pm" : "am";
        hours = hours % 12 || 12;
        hours = hours < 10 ? "0" + hours : hours;
    
        let displayTime = hours + ":" + minutes + " " + suffix;
        return displayTime;
    }
}

function onFireWageCalculatorButton() {
    let startValue = onStartValueChange($('#start-time-value').val());
    let downTimeValue = onDownTimeValueChange($('#down-time-value').val());
    let endTimeValue = onEndTimeValueChange($('#end-time-value').val());

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