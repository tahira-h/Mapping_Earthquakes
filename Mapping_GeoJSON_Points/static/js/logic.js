// Add console.log to check to see if our code is working.
console.log("working");

// Add a Map Object

// Change the center of the map to SFO and change the zoom to 5 so that we can see the line.
let map = L.map('mapid').setView([37.5, -122.5], 10);

// Map a GeoJSON Point

// Add single point on our map using GeoJSON data. The following is a FeatureCollection object that has properties & geometry for the San Francisco Airport.

// Add GeoJSON data.
let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
            // The coordinates appear in reverse order in the setView() method because the GeoJSON data coordinates are set with the first parameter as X (longitude) and the second parameter as Y (latitude), as documented in the GeoJSON Standard. The L.geoJSON() layer reverses the coordinates to plot them on the map.
]};


// GeoJSON Layer

// GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON. In "The GeoJSON Layer" section, it says to create the GeoJSON layer and add it to our map. 

//Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data.
L.geoJson(sanFranAirport, {
    // We turn each feature into a marker on the map.
    onEachFeature: function(feature, layer) {
      console.log(layer);
      layer.bindPopup();

    }

  }).addTo(map);

// Loop through the cities array and create one marker for each city.
cities.forEach(function(city) {
    console.log(city)
   });

// Title Layer

// Change the map style to "satellite-streets-v11."

// Create the tile layer that will be the background of the map.
let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
street.addTo(map);
