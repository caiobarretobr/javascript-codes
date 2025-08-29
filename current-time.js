var date = new Date()
var day = date.getDay()
var hour = date.getHours()
var minute = date.getMinutes()

switch (day) {
   case 0:
	day = "sunday";
	break;
   case 1:
	day = "monday";
	break;
   case 2:
	day = "tuesday";
	break;
   case 3:
	day = "wednesday";
	break;
   case 4:
	day = "thursday";
	break;
   case 5:
	day = "friday";
	break;
   case 6:
	day = "saturday";
	break;
}

console.log(`Today is: ${day}\nCurrent time is: ${hour}:${minute} PM`);
