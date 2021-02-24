// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var form = d3.select("#form")

button.on("click", runufo);
form.on("change",runufo)

function runufo(){

	d3.event.preventDefault();

	var inputElement = d3.select("#datetime")
	var inputElement2 = d3.select("#state")
	var inputValue = inputElement.property("value")
	var inputValue2 = inputElement2.property("value");
	console.log(inputValue)

	if (inputValue === "") {
		var samedate = tableData
		console.log(samedate)
	}
	else {
		var samedate = tableData.filter(function(sighting){
			return sighting.datetime === inputValue;
		});
		console.log(samedate)	
	}

	if (inputValue2 === "") {
		var samestate = samedate
	}
	else {
		var samestate = samedate.filter(function(sighting){
			return sighting.state === inputValue2;
		});
		console.log(samestate)	
	}

	var tbody = d3.select("tbody")
	tbody.html("")
	samestate.forEach(function(sightings){
		var row = tbody.append("tr")
		Object.entries(sightings).forEach(function([key, value]){
			var cell = row.append("td");
			cell.text(value);
		});
	});

}