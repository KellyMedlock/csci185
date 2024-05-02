let map = L.map('map').setView([35.5954, -82.5517], 15);
let markerChaiPani = L.marker([35.59795, -82.55577]).addTo(map);
let markerPackSquare = L.polygon([
    [35.5956, -82.5519],
    [35.5958, -82.5501],
    [35.5952, -82.5499],
    [35.5949, -82.5517]
]).addTo(map);
let markerMalaprops = L.marker([35.5967, -82.5547]).addTo(map);
let markerMamacitas = L.marker([35.5924, -82.5496]).addTo(map);
let markerMAE = L.marker([35.5925, -82.5571]).addTo(map);
let markerMastGeneral = L.marker([35.5946, -82.5517]).addTo(map);
let markerAvlYogaCenter = L.marker([35.6028, -82.5514]).addTo(map);
let markerAvlTourists = L.marker([35.5877, -82.5502]).addTo(map);

markerPackSquare.bindPopup("<span class='popup'><h2><b>Pack Square</b></h2><br><p>This is basically the center of Asheville. Located right in the heart of downtown, it is one of the most recognizable places in town.</p><br><img src='images/packsquare.jpg' class='popupphoto'></span>");
markerChaiPani.bindPopup("<span class='popup'><h2><b>Chai Pani</b></h2><br><p>This is one of the best resturants in town. Be sure to try the okra fries!</p><br><img src='images/chaipani.jpg' class='popupphoto'></span>");
markerMalaprops.bindPopup("<span class='popup'><h2><b>Malaprop's</b></h2><br><p>A great local bookstore in downtown Asehville. A great place to grab a coffee and a new book to read.</p><br><img src='images/malaprops.jpg' class='popupphoto'></span>");
markerMamacitas.bindPopup("<span class='popup'><h2><b>Mamacitas</b></h2><br><p>A great local mexican burrito buffet in downtown Asehville. Consistently good mexican food. Super quick and easy as well as filling.</p><br><img src='images/mamacitas.jpg' class='popupphoto'></span>");
markerMAE.bindPopup("<span class='popup'><h2><b>Medlock & Associates Engineering</b></h2><br><p>This is a shameless family plug for my father's structural engineering business. Go make sure your house isn't falling down.</p><br><img src='images/MAE.png' class='popupphoto'></span>");
markerMastGeneral.bindPopup("<span class='popup'><h2><b>Mast General Store</b></h2><br><p>A great place for just about everything. Outdoors? Yep! Lotion? You betcha! Cheap toys? They got ya! Take your kids nd they'll be entertained for hours.</p><br><img src='images/mastgeneral.webp' class='popupphoto'></span>");
markerAvlYogaCenter.bindPopup("<span class='popup'><h2><b>Asheville Yoga Center</b></h2><br><p>Perfect for getting a good stretch or to in. The teachers are great and they'll have you feeling good in no time!</p><br><img src='images/ashevilleyogacenter.jpg' class='popupphoto'></span>");
markerAvlTourists.bindPopup("<span class='popup'><h2><b>Asheville Tourists Stadium</b></h2><br><p>Home of the Asheville Tourists. Got watch a baseball game and enjoy some hotdogs and a drink.</p><br><img src='images/ashevilletourists.jpg' class='popupphoto'></span>");

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 35.5956, -82.5519
// 35.5958, -82.5501
// 35.5952, -82.5499
// 35.5949, -82.5517
// 35.5954, -82.5517