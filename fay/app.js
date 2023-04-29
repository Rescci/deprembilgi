// Initialize the map
var map = L.map('mapid').setView([38.96, 35.24], 6);

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

// Add a marker for Istanbul
L.marker([41.0082, 28.9784]).addTo(map)
    .bindPopup("<b>İstanbul</b><br />Fay hatlarına yakın bir şehir.");

// Add a marker for Izmir
L.marker([38.4237, 27.1428]).addTo(map)
    .bindPopup("<b>İzmir</b><br />Fay hatlarına yakın bir şehir.");

// Add a marker for Ankara
L.marker([39.9334, 32.8597]).addTo(map)
    .bindPopup("<b>Ankara</b><br />Fay hatlarına yakın bir şehir.");
