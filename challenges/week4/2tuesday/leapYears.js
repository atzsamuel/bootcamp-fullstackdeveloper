function leapYears(year) {
  //var year = prompt("Enter a year");
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        console.log("Leap year");
      } else {
        console.log("Not a leap year");
      }
    } else {
      console.log("Leap year");
    }
  } else {
    console.log("Not a leap year");
  }
}

leapYears(2000); // Leap year
leapYears(2001); // Not a leap year
leapYears(2002); // Not a leap year
