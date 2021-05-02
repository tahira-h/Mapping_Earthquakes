// Add console.log to check to see if our code is working.
console.log("working");


// Add a Map Object

// Change the center of the map to SFO and change the zoom to 5 so that we can see the line.
// let map = L.map('mapid').setView([30, 30], 2);

// Map a Single Line

// Coordinates for each point to be used in the line.
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     // Add two more airport stops: Salt Lake City International Airport(SLC) and Seattle-Tacoma International Airport(SEA).
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];


// Map a GeoJSON Point

// Add single point on our map using GeoJSON data. The following is a FeatureCollection object that has properties & geometry for the San Francisco Airport.

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
//             // The coordinates appear in reverse order in the setView() method because the GeoJSON data coordinates are set with the first parameter as X (longitude) and the second parameter as Y (latitude), as documented in the GeoJSON Standard. The L.geoJSON() layer reverses the coordinates to plot them on the map.
// ]};


// GeoJSON Layer

// GeoJSON objects are added to the map through a GeoJSON layer, L.geoJSON. In "The GeoJSON Layer" section, it says to create the GeoJSON layer and add it to our map. 

//Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);


// Bind a Popup to the Marker

// Options to add data to a marker are to use the 'pointToLayer' or 'onEachFeature' callback functions. With either of these functions, we can add data to a map from each GeoJSON object. The major difference between the 2 functions is that the 'pointToLayer' callback function adds markers to a map, whereas the 'onEachFeature' callback function allows you to add styling and bind data to a popup marker. 

// The pointToLayer Function

// EX: 
// L.geoJson(data, {
//     pointToLayer: function(feature, latlng) {
//       return L.marker(latlng);
//      }
// });

// Create a circle marker instead of a marker on the map?
    //Use 'circleMarker()'

// Add a marker using the 'pointToLayer' function and add data to a popup marker.

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng);
//     }

//   }).addTo(map);


// Popup Marker

// Add the data in the JS objects to a popup marker. 
    // 'bindPopUp()'

// To add a popup marker, we need to use the 'bindPopup() method to the 'pointToLayer' callback function. This will add a popup marker for each object in our GeoJSON data even though we only have one object in our data, SFO.

// Let's add the city popup marker (line 100)  
    //(edit lines 74-80)

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     pointToLayer: function(feature, latlng) {
//       console.log(feature);
//       return L.marker(latlng)
//       .bindPopup("<h2>" + feature.properties.city + "</h2>");

//     }

//   }).addTo(map);


// The onEachFeature Function

// When using the 'onEachFeature' callback function we can add a popup marker for each feature and add from the properties of the JS object.

//Ex:
// L.geoJson(data, {
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup();
//      }
// });

// Grabbing our GeoJSON data.
// L.geoJson(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup();

//     }

//   }).addTo(map);




// Create a line on a map using the polyline() function.In the polyline() function, pass the line coordinates and the key-value pair color:"red" to make the line red. 

// // Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//     //color: "red"
//     // make the line yellow by editing the value for the "color" key.
//     color: "yellow"
//   }).addTo(map);


// City Variable referencing the 5 most populous cities array 

// An array containing each city's location, state, and population.
// let cities = [{,,,,}];

// Loop through the cities array and create one marker for each city.
// cities.forEach(function(city) {
//     console.log(city)
//    });

// Title Layer

// Change the map style to "satellite-streets-v11."

// Create the tile layer that will be the background of the map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create the tile layer that will be the background of the map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// let street = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
// let light = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// //let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// // We create the dark view tile layer that will be an option for our map.
// let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
  };

// Create the earthquake layer for our map.
let earthquakes = new L.layerGroup();

// We define an object that contains the overlays.
// This overlay will be visible all the time.
let overlays = {
  Earthquakes: earthquakes
};

  // Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps, overlays).addTo(map);


// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/majorAirports.json";

// Accessing the Toronto airline routes GeoJSON URL.
// let torontoData = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoRoutes.json";

// Accessing the Toronto neighborhoods GeoJSON URL.
// let torontoHoods = "https://raw.githubusercontent.com/<GitHub_name>/Mapping_Earthquakes/main/torontoNeighborhoods.json";


// Grabbing our GeoJSON data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data).addTo(map);
// });

// Create a style for the lines.
// let myStyle = {
//     color: "#ffffa1",
//     weight: 2
// }

// Grabbing our GeoJSON data.
// d3.json(torontoHoods).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   L.geoJson(data).addTo(map);
// });

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
    console.log(data);
// Creating a GeoJSON layer with the retrieved data.
L.geoJson(data, {
  // We turn each feature into a circleMarker on the map.
  pointToLayer: function(feature, latlng) {
      console.log(data);
      return L.circleMarker(latlng);
    },
  // We set the style for each circleMarker using our styleInfo function.
style: styleInfo,
  // We create a popup for each circleMarker to display the magnitude and
  //  location of the earthquake after the marker has been created and styled.
  onEachFeature: function(feature, layer) {
  layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
}
}).addTo(earthquakes);

// // Creating a control with a legend is easier, since it is static and doesn't change on state hover. 
// var legend = L.control({position: 'bottomright'});
// legend.onAdd = function (map) {
//   var div = L.DomUtil.create('div', 'info legend'),
//     grades = [0, 10, 20, 50, 100, 200, 500, 1000],
//     labels = [];

//     //loop through our density intervals and generate a label with a colored square for each internal
//     for (var i = 0; i < grades.length; i++) {
//       div.innerHTML +=
//         '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
//         grades[i] = (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
//     }

//     return div;
// };

// legend.addTo(map);

// Create a legend control object.
let legend = L.control({position: "bottomright"});

// Then add all the details for the legend.
legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");
  //};
  const magnitudes = [0, 1, 2, 3, 4, 5];
  const colors = [
    "#98ee00",
    "#d4ee00",
    "#eecc00",
    "#ee9c00",
    "#ea822c",
    "#ea2c2c"
  ]};
  // Looping through our intervals to generate a label with a colored square for each interval.
    for (var i = 0; i < magnitudes.length; i++) {
      console.log(colors[i]);
      div.innerHTML +=
        "<i style='background: " + colors[i] + "'></i> " +
        magnitudes[i] + (magnitudes[i + 1] ? "&ndash;" + magnitudes[i + 1] + "<br>" : "+");
    }
      return div;

    legend.addTo(map);

  // Then we add the earthquake layer to our map.
  //earthquakes.addTo(map);
//});

  // // This function returns the style data for each of the earthquakes we plot on
  // // the map. We pass the magnitude of the earthquake into a function
  // // to calculate the radius.
  // function styleInfo(feature) {
  //   return {
  //     opacity: 1,
  //     fillOpacity: 1,
  //     fillColor: "#ffae42",
  //     color: "#000000",
  //     radius: getRadius(),
  //     stroke: true,
  //     weight: 0.5
  //   };
  // }

// This function returns the style data for each of the earthquakes we plot on
// the map. We pass the magnitude of the earthquake into two separate functions
// to calculate the color and radius.
function styleInfo(feature) {
  return {
    opacity: 1,
    fillOpacity: 1,
    fillColor: getColor(feature.properties.mag),
    color: "#000000",
    radius: getRadius(feature.properties.mag),
    stroke: true,
    weight: 0.5
  };
}

// This function determines the color of the circle based on the magnitude of the earthquake.
function getColor(magnitude) {
  if (magnitude > 5) {
    return "#ea2c2c";
  }
  if (magnitude > 4) {
    return "#ea822c";
  }
  if (magnitude > 3) {
    return "#ee9c00";
  }
  if (magnitude > 2) {
    return "#eecc00";
  }
  if (magnitude > 1) {
    return "#d4ee00";
  }
  return "#98ee00";
}

  // This function determines the radius of the earthquake marker based on its magnitude.
  // Earthquakes with a magnitude of 0 will be plotted with a radius of 1.
  function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

});


