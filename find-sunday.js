for (let year = 2014 ; year <= 2050 ; year++) {
   const d = new Date(year, 23);
   if (d.getDay() === 1) {
	console.log(year)
   }
}
