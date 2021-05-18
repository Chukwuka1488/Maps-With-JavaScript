var map = L.map("map").setView([0, 0], 1);

// adding tile layers from maptiler
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=xAKBsQj3xIsRIZQ3vfnB",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

// adding markers [-ve for west and positive for east]
var markerLondon = L.marker([51.5, -0.09]).addTo(map);
var markerLagos = L.marker([6.5, 3.4]).addTo(map);
var markerDarmstadt = L.marker([49.9, 8.7]).addTo(map);

//adding circle
var circleLondon = L.circle([51.508, -0.11], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 5000,
}).addTo(map);

// adding polygon
var polygonLagos = L.polygon(
  [
    [6.505, 3.45],
    [6.405, 3.54],
    [6.515, 3.48],
  ],
  {
    color: "green",
    fillColor: "#f03",
    fillOpacity: 0.5,
  }
).addTo(map);

// adding pop-ups
markerLondon.bindPopup("<b> Hey There!</b><br>This is London.").openPopup();
polygonLagos.bindPopup("This is Lagos!!!");
