// Add console.log to check to see if our code is working.
console.log("working");

// Add a Map Object

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// (1)Add a marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
    console.log(city)
   });

// Get data from cities.js
let cityData = cities;

cities.forEach(function(city) {
    console.log(city)
    L.marker(city.location).addTo(map);
});

//Edit the forEach function (lines 22-26) and add the bindPopup() method (line 48). Inside the parentheses of the bindPopup method(). Doing this, we'll retrieve the name of the city, state, and population

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.marker(city.location)
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population + "</h3>")
  .addTo(map);
});

// Change the marker for each city to a circle that has a radius equivalent to the city's population. To do this, replace the marker function with a circleMarker() function (line 47). Then assign the "radius" key to the population by using city.population.

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        //divide the city.population value by 100000 to decrease the city's radius so the circle markers fit on the map. If not, the radii will be to large & will not fit the map.
        radius: city.population/100000
    })
    .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});


// Add a Circle to the Map

// To change the marker on the map to a point or dot, use the circle() function. The circle() function will place a circle on the map at the given coordinates. 
L.circle([34.0522, -118.2437], {
    radius: 100
}).addTo(map);

// Title Layer

// Create the tile layer that will be the background of the map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);