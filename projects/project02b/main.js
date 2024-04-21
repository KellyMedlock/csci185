let map = L.map('map').setView([35.5951, -82.5515], 13);
let markerDowntown = L.marker([35.59795, -82.55577]).addTo(map);

markerDowntown.bindPopup("<span class='popup'><h2><b>Chai Pani</b></h2><br><p>This is one of the best resturants in town. Be sure to try the okra fries!</p><br><img src='images/chaipani.jpg' class='chaipani'></span>").openPopup();

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);