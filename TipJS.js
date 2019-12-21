function tipCalculator(){
	var bill = document.getElementById("billAmount").value;//gets value of billAmount
	var numPeople = document.getElementById("numberofPeople").value;//gets value of nummberofPeople
	var TIP = document.getElementById("tip").value;//gets the tip percentage
	var tipR =  (bill * (TIP/100))/numPeople;//calculates tip per preson
	document.getElementById("Totalresult").innerHTML = "Total tip amount: $" + (bill * (TIP/100));//show total tip amount
	document.getElementById("result").innerHTML = "Tip per person: $" + tipR;//show total tip per person
}