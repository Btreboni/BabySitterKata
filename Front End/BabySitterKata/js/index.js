$(document).ready(function(){
    runProgram();
});

function runProgram(){
    hideBoxTwo();
    onClickStartWageCalculatorButton();
    onStartValueChange();
}

function onClickStartWageCalculatorButton(){
    $("#start-wage-calculator-button").click(function(){
        hideBoxOne();
        showBoxTwo();
    })
}

function onStartValueChange(time){
    let returnTime = handleTimeChange(time);
    console.log(returnTime);
    return returnTime;
}

function onDownTimeValueChange(time){
    let returnTime = handleTimeChange(time);
    console.log(returnTime);
    return returnTime;
}

function onEndTimeValueChange(time){
    let returnTime = handleTimeChange(time);
    console.log(returnTime);
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

function hideBoxOne(){
    $("#box-one").hide();
}

function showBoxTwo(){
    $("#box-two").show();
}

function hideBoxTwo(){
    $("#box-two").hide();
}