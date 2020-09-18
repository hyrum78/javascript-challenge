// from data.js
var tableData = UFOdata;

// YOUR CODE HERE!
// var for table body
var tbody = d3.select("tbody");

//filter button action
var filterAction = d3.select("#filter-btn");
filterAction.on("click", function() {
    
  // stop refreshing
  d3.event.preventDefault();
    
  // select HTML element IDs
  var datetimeHTML = d3.select("#datetime");
  var cityIDhtml = d3.select("#cityID");
  var stateIDhtml = d3.select("#stateID");
  var countryIDhtml = d3.select("#countryID");
  var shapeIDhtml = d3.select("#shapeID");
    
  // retrieve input data
  var datetimeData = datetimeHTML.property("value");
  var cityData = cityIDhtml.property("value").toLowerCase().trim();
  var stateData = stateIDhtml.property("value").toLowerCase().trim();
  var countryData = countryIDhtml.property("value").toLowerCase().trim();    
  var shapeData = shapeIDhtml.property("value").toLowerCase().trim();

//  if statements for multiple filters
  if (datetimeData != "") {
      tableData = tableData.filter(entry => entry.datetime === datetimeData);
  }
  if (cityData != "") {
       tableData = tableData.filter(entry => entry.city === cityData);     
  }
  if (stateData != "") {
       tableData = tableData.filter(entry => entry.state === stateData);     
  }
  if (countryData != "") {
       tableData = tableData.filter(entry => entry.country === countryData);     
  }
  if (shapeData != "") {
       tableData = tableData.filter(entry => entry.shape === shapeData);     
  }  
  console.log(tableData);    
  renderTable();
});

//activate clear button to reset page
var clearData = d3.select("#clear-btn");
clearData.on("click", function() {
  location.reload();
});

// renderTable function to show table
renderTable();

//loop through all data
function renderTable(){
    tbody.html("");
    console.log(tableData);
    tableData.forEach(function(xFiles) {
        console.log(xFiles);
        var row = tbody.append("tr");
        Object.entries(xFiles).forEach(function([key,value]) {
            console.log(key,value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}