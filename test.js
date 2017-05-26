var refreshIntervalId;

function checkTime(inputHour, inputMinute) {
    var inputHour = document.getElementById("Hour").value;
    var inputMinute = document.getElementById("Minute").value;
    var inputTestBank = document.getElementById("TestBank").value;
    var today = new Date();
    var h = today.getHours();
    var min = today.getMinutes();
    var m = "";

    if (min < 10) {
        m = '0' + min;
    }
    else {
        m = min;
    }
    
    var x = "";
    
    if (inputTestBank == 1) {
        x = "testBankEuro.html";
    }
    else if (inputTestBank == 2) {
        x = "testBankBiotech.html";
    }
    else if (inputTestBank == 3) {
        x = "testBankCalculus.html";
    }
    else if (inputTestBank == 4) {
        x = "testBankEnglish.html";
    }
    else if (inputTestBank == 5) {
        x = "testBankMacro.html";
    }
    else if (inputTestBank == 6) {
        x = "testBankAPES.html";
    }
    else {
        x = "testBankAPCS.html";
    }
        
    if (h == inputHour && m == inputMinute) {
        window.location.href = x;
    }

    else {
        console.log("Keep sleeping! It is still " + h + ":" + m);
    }
}

function setAlarm() {
    var inputHour = document.getElementById("Hour").value;
    var inputMinute = document.getElementById("Minute").value;
    var inputTestBank = document.getElementById("TestBank").value;
    
    window.alert("Your alarm has been set for " + inputHour + ":" + inputMinute);

    var today = new Date();
    var h = today.getHours();
    var min = today.getMinutes();
    var m = "";

    if (min < 10) {
        m = '0' + min;
    }
    else {
        m = min;
    }
    
    var x = "";
    
    if (inputTestBank == 1) {
        x = "testBankEuro.html";
    }
    else if (inputTestBank == 2) {
        x = "testBankBiotech.html";
    }
    else if (inputTestBank == 3) {
        x = "testBankCalculus.html";
    }
    else if (inputTestBank == 4) {
        x = "testBankEnglish.html";
    }
    else if (inputTestBank == 5){
        x = "testBankMacro.html";
    }
    else if (inputTestBank == 6) {
        x = "testBankAPES.html";
    }
    else {
        x = "testBankAPCS.html";
    }

    console.log("The current time is " + h + ":" + m);
    console.log("The alarm is set for " + inputHour + ":" + inputMinute);
    console.log("The value of the test bank is " + inputTestBank);
    console.log("The value of x is " + x);

    refreshIntervalId = window.setInterval("checkTime()", 1000);
}
