let map = L.map('map').setView([35.5954, -82.5517], 13);

let markerChaiPani = L.marker([35.59795, -82.55577]).addTo(map);
markerChaiPani._icon.classList.add("huechange");

let markerPackSquare = L.polygon([
    [35.5956, -82.5519],
    [35.5958, -82.5501],
    [35.5952, -82.5499],
    [35.5949, -82.5517]
], {
    color: "#EB6126",
    fillColor: "#EB6126",
    fillOpacity: 0.5
}).addTo(map);

let markerMalaprops = L.marker([35.5967, -82.5547]).addTo(map);
markerMalaprops._icon.classList.add("huechange");

let markerMamacitas = L.marker([35.5924, -82.5496]).addTo(map);
markerMamacitas._icon.classList.add("huechange");

let markerMAE = L.marker([35.5925, -82.5571]).addTo(map);
markerMAE._icon.classList.add("huechange");

let markerMastGeneral = L.marker([35.5946, -82.5517]).addTo(map);
markerMastGeneral._icon.classList.add("huechange");

let markerAvlYogaCenter = L.marker([35.6028, -82.5514]).addTo(map);
markerAvlYogaCenter._icon.classList.add("huechange");

let markerAvlTourists = L.polygon([
    [35.5868, -82.5489],
    [35.5871, -82.5503],
    [35.5880, -82.5499],
    [35.5877, -82.5486]
], {
    color: "#EB6126",
    fillColor: "#EB6126",
    fillOpacity: 0.5
}).addTo(map);

let markerMonfordPark = L.polygon([
    [35.6060, -82.5672],
    [35.6066, -82.5677],
    [35.6077, -82.5661],
    [35.6065, -82.5659]
], {
    color: "#EB6126",
    fillColor: "#EB6126",
    fillOpacity: 0.5
}).addTo(map);


let markerDelVecchios = L.marker([35.6110, -82.5543]).addTo(map);
markerDelVecchios._icon.classList.add("huechange");

let markerTacoBilly = L.marker([35.5808, -82.57438]).addTo(map);
markerTacoBilly._icon.classList.add("huechange");

let markerSalvageStation = L.marker([35.5981, -82.5735]).addTo(map);
markerSalvageStation._icon.classList.add("huechange");

let markerHighland = L.marker([35.5710, -82.4978]).addTo(map);
markerHighland._icon.classList.add("huechange");

let markerVortex = L.marker([35.5896, -82.5536]).addTo(map);
markerVortex._icon.classList.add("huechange");

markerPackSquare.bindPopup("<span class='popup'><h2><b>Pack Square</b></h2><br><p>This is basically the center of Asheville. Located right in the heart of downtown, it is one of the most recognizable places in town.</p><br><img src='images/packsquare.jpg' class='popupphoto'></span>");
markerChaiPani.bindPopup("<span class='popup'><h2><b>Chai Pani</b></h2><br><p>This is one of the best resturants in town. Be sure to try the okra fries!</p><br><img src='images/chaipani.jpg' class='popupphoto'></span>");
markerMalaprops.bindPopup("<span class='popup'><h2><b>Malaprop's</b></h2><br><p>A great local bookstore in downtown Asehville. A great place to grab a coffee and a new book to read.</p><br><img src='images/malaprops.jpg' class='popupphoto'></span>");
markerMamacitas.bindPopup("<span class='popup'><h2><b>Mamacitas</b></h2><br><p>A great local mexican burrito buffet in downtown Asehville. Consistently good mexican food. Super quick and easy as well as filling.</p><br><img src='images/mamacitas.jpg' class='popupphoto'></span>");
markerMAE.bindPopup("<span class='popup'><h2><b>Medlock & Associates Engineering</b></h2><br><p>This is a shameless family plug for my father's structural engineering business. Go make sure your house isn't falling down.</p><br><img src='images/MAE.png' class='popupphoto'></span>");
markerMastGeneral.bindPopup("<span class='popup'><h2><b>Mast General Store</b></h2><br><p>A great place for just about everything. Outdoors? Yep! Lotion? You betcha! Cheap toys? They got ya! Take your kids nd they'll be entertained for hours.</p><br><img src='images/mastgeneral.webp' class='popupphoto'></span>");
markerAvlYogaCenter.bindPopup("<span class='popup'><h2><b>Asheville Yoga Center</b></h2><br><p>Perfect for getting a good stretch or to in. The teachers are great and they'll have you feeling good in no time!</p><br><img src='images/ashevilleyogacenter.jpg' class='popupphoto'></span>");
markerAvlTourists.bindPopup("<span class='popup'><h2><b>Asheville Tourists Stadium</b></h2><br><p>Home of the Asheville Tourists. Got watch a baseball game and enjoy some hotdogs and a drink.</p><br><img src='images/ashevilletourists.jpg' class='popupphoto'></span>");
markerMonfordPark.bindPopup("<span class='popup'><h2><b>Montford Park</b></h2><br><p>Perfect place to get outside at. Great for shooting basketball, playing pickleball or ust hanging out.</p><br><img src='images/montfordpark.PNG' class='popupphoto'></span>");
markerDelVecchios.bindPopup("<span class='popup'><h2><b>Del Vecchios</b></h2><br><p>One of my favorite spots to get pizza. May not be the cheapest but I think it is worth it.</p><br><img src='images/delvecchios.jpg' class='popupphoto'></span>");
markerTacoBilly.bindPopup("<span class='popup'><h2><b>Taco Billy</b></h2><br><p>The best place to get tacos in town. Plus I work here part time, so come on down and we'll feed you right.</p><br><img src='images/tacobilly.jpg' class='popupphoto'></span>");
markerSalvageStation.bindPopup("<span class='popup'><h2><b>Salvage Station</b></h2><br><p>Easily one of the best music venues in town. Also great for just grabbing a beer when they have nothing going on.</p><br><img src='images/salvagestation.jpeg' class='popupphoto'></span>");
markerHighland.bindPopup("<span class='popup'><h2><b>Highland Brewing Company</b></h2><br><p>Great spot to get outdoors and enoy a beer. Great for families. There is a disc golf course as well as outdoor volleyball. They often have live music.</p><br><img src='images/highland.jpg' class='popupphoto'></span>");
markerVortex.bindPopup("<span class='popup'><h2><b>Vortex Doughnuts</b></h2><br><p>Absolutely amazing doughnuts. They are made daily with special flavors. Do not miss out!</p><br><img src='images/vortexdoughnuts.jpg' class='popupphoto'></span>");

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// 35.5956, -82.5519
// 35.5958, -82.5501
// 35.5952, -82.5499
// 35.5949, -82.5517
// 35.5954, -82.5517