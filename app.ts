function LeapYearFinder(year){
  //three conditions to find out the leap year
  if( ((0 == year % 4) && (0 != year % 100)) || (0 == year % 400) )
  {
    return true;
  }
  else
  {
    return(false);
  }
}
function Calculate(){
  let year = <HTMLInputElement>document.getElementById("leapyear");
  let yearValue = year.value;
  let answerText = "";

  if (LeapYearFinder(yearValue)){
    answerText = yearValue + " is a leap year."
  }
  else{
    answerText = yearValue + " is NOT a leap year."

  }

  document.getElementById("answer").innerText = answerText;
}
