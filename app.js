var map = L.map("map").setView([0, 0], 1);

// adding tile layers from maptiler
L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=xAKBsQj3xIsRIZQ3vfnB",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    crossOrigin: true,
  }
).addTo(map);

//changing marker icon
// var greenIcon = L.icon({
//   iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
//   shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",

//   iconSize: [38, 95], // size of the icon
//   shadowSize: [50, 64], // size of the shadow
//   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62], // the same for the shadow
//   popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
// });

// adding multiple icons at once using classes
var LeafletIcon = L.Icon.extend({
  options: {
    shadowUrl: "https://leafletjs.com/examples/custom-icons/leaf-shadow.png",
    iconSize: [38, 95],
    shadowSize: [50, 64],
    iconAnchor: [22, 94],
    shadowAnchor: [4, 62],
    popupAnchor: [-3, -76],
  },
});

var greenIcon = new LeafletIcon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-green.png",
  }),
  redIcon = new LeafletIcon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-red.png",
  }),
  orangeIcon = new LeafletIcon({
    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-orange.png",
  });

// adding markers [-ve for west and positive for east]
var markerLondon = L.marker([51.5, -0.09], { icon: redIcon }).addTo(map);
var markerLagos = L.marker([6.5, 3.4], { icon: orangeIcon }).addTo(map);
var markerDarmstadt = L.marker([49.9, 8.7], { icon: greenIcon }).addTo(map);

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
markerDarmstadt.bindPopup("Welcome to Darmstadt");
