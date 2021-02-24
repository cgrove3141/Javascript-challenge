// from data.js
var tableData = data;

// YOUR CODE HERE!
var button = d3.select("#filter-btn");
var form = d3.select("#form")

button.on("click", runufo);
form.on("submit",runufo)

function runufo(){

	d3.event.preventDefault();

	var inputElement = d3.select("#datetime")
	var inputValue = inputElement.property("value")
	console.log(inputValue)

	var samedate = tableData.filter(function(sighting){
		return sighting.datetime === inputValue;
	});
	console.log(samedate)	

	
	var tbody = d3.select("tbody")
	tbody.html("")
	samedate.forEach(function(sightings){
		var row = tbody.append("tr")
		Object.entries(sightings).forEach(function([key, value]){
			var cell = row.append("td");
			cell.text(value);
		});
	});

}