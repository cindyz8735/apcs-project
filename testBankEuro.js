var numberCorrect = 0;

function validateForm() {
    var x = document.forms["euroTest"]["q1"].value;
    console.log(x);
    if (x == "a1") {
        //alert("Question 1 was answered correctly!");
        numberCorrect = numberCorrect + 1;
        console.log("Number correct so far is " + numberCorrect);
        return true;
    }
    else {
        alert("Question 1 was answered incorrectly! Try again!");
        return false;
    }
}

function validateForm2() {
    var y = document.forms["euroTest"]["q2"].value;
    console.log(y);
    if (y == "b2") {
        //alert("Question 2 was answered correctly!");
        numberCorrect = numberCorrect + 1;
        console.log("Number correct so far is " + numberCorrect);
        return true;
    }
    else {
        alert("Question 2 was answered incorrectly! Try again!");
        return false;
    }
}

function validateForm3() {
    var z = document.forms["euroTest"]["q3"].value;
    console.log(z);
    if (z == "a3") {
        //alert("Question 3 was answered correctly!");
        numberCorrect = numberCorrect + 1;
        console.log("Number correct so far is " + numberCorrect);
        return true;
    }
    else {
        alert("Question 3 was answered incorrectly! Try again!");
        return false;
    }

}

function stopAlarm() {
    if (validateForm() && validateForm2() && validateForm3()) {
        document.getElementById("mp3").pause();
        window.alert("The alarm will stop now.");
        document.getElementById("home").style.visibility = "visible";
    }
    else location.reload(true);
}