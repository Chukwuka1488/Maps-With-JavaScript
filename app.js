var map = L.map("map").setView([0, 0], 1);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=xAKBsQj3xIsRIZQ3vfnB",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);
var markerLondon = L.marker([51.5, -0.09]).addTo(map);
var markerLagos = L.marker([6.5, 3.4]).addTo(map);
var markerDarmstadt = L.marker([49.9, 8.7]).addTo(map);
