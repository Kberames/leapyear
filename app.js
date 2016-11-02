function LeapYearFinder(year) {
    if (((0 == year % 4) && (0 != year % 100)) || (0 == year % 400)) {
        return true;
    }
    else {
        return (false);
    }
}
function Calculate() {
    var year = document.getElementById("leapyear");
    var yearValue = year.value;
    var answerText = "";
    if (LeapYearFinder(yearValue)) {
        answerText = yearValue + " is a leap year.";
    }
    else {
        answerText = yearValue + " is NOT a leap year.";
    }
    document.getElementById("answer").innerText = answerText;
}
