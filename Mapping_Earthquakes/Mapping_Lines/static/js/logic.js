// Add console.log to check to see if our code is working.
console.log("working");

// Add a Map Object

// Change the center of the map to SFO and change the zoom to 5 so that we can see the line.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Map a Single Line

// Coordinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    // Add two more airport stops: Salt Lake City International Airport(SLC) and Seattle-Tacoma International Airport(SEA).
    [40.7899, -111.9791],
    [47.4502, -122.3088]
];

// Create a line on a map using the polyline() function.In the polyline() function, pass the line coordinates and the key-value pair color:"red" to make the line red. 

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    //color: "red"
    // make the line yellow by editing the value for the "color" key.
    color: "yellow"
  }).addTo(map);

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
    console.log(city)
   });

// Title Layer

// Change the map style to "satellite-streets-v11."

// Create the tile layer that will be the background of the map.
// let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
street.addTo(map);
