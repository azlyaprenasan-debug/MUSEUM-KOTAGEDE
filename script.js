// =====================================
// MEMBUAT PETA
// =====================================

var map = L.map('map').setView(
    [-7.8285, 110.4017],
    15
);

// Basemap OpenStreetMap
L.tileLayer(
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; OpenStreetMap'
    }
).addTo(map);

// =====================================
// ICON
// =====================================

var museumIcon = L.icon({
    iconUrl: 'img/museum.png',
    iconSize: [45, 45]
});

var hotelIcon = L.icon({
    iconUrl: 'img/hotel.png',
    iconSize: [25, 25]
});

var restoranIcon = L.icon({
    iconUrl: 'img/restoran.png',
    iconSize: [15, 15]
});

var ibadahIcon = L.icon({
    iconUrl: 'img/tempatibadah.png',
    iconSize: [15, 15]
});

var kesehatanIcon = L.icon({
    iconUrl: 'img/fasilitaskesehatan.png',
    iconSize: [15, 15]
});

// =====================================
// MUSEUM
// =====================================

fetch("Data/museum.geojson")
.then(response => response.json())
.then(data => {

    L.geoJSON(data, {

        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {
                icon: museumIcon
            });
        },

        onEachFeature: function(feature, layer){
            layer.bindPopup(
                "<b>Museum Kotagede</b>"
            );
        }

    }).addTo(map);

});

// =====================================
// HOTEL
// =====================================

fetch("Data/hotel.geojson")
.then(response => response.json())
.then(data => {

    L.geoJSON(data, {

        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {
                icon: hotelIcon
            });
        },

        onEachFeature: function(feature, layer){
            layer.bindPopup(
                "<b>Hotel</b>"
            );
        }

    }).addTo(map);

});

// =====================================
// RESTORAN
// =====================================

fetch("Data/restoran.geojson")
.then(response => response.json())
.then(data => {

    L.geoJSON(data, {

        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {
                icon: restoranIcon
            });
        },

        onEachFeature: function(feature, layer){
            layer.bindPopup(
                "<b>Restoran</b>"
            );
        }

    }).addTo(map);

});

// =====================================
// TEMPAT IBADAH
// =====================================

fetch("Data/tempat_ibadah.geojson")
.then(response => response.json())
.then(data => {

    L.geoJSON(data, {

        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {
                icon: ibadahIcon
            });
        },

        onEachFeature: function(feature, layer){
            layer.bindPopup(
                "<b>Tempat Ibadah</b>"
            );
        }

    }).addTo(map);

});

// =====================================
// FASILITAS KESEHATAN
// =====================================

fetch("Data/fasilitas_kesehatan.geojson")
.then(response => response.json())
.then(data => {

    L.geoJSON(data, {

        pointToLayer: function(feature, latlng){
            return L.marker(latlng, {
                icon: kesehatanIcon
            });
        },

        onEachFeature: function(feature, layer){
            layer.bindPopup(
                "<b>Fasilitas Kesehatan</b>"
            );
        }

    }).addTo(map);

});