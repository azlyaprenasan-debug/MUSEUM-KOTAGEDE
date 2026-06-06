// =====================================
// PETA
// =====================================

var museumLat = -7.826349;
var museumLng = 110.392154;

var map = L.map('map').setView(
    [museumLat,museumLng],
    28
);

// =====================================
// BASEMAP
// =====================================

L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'© OpenStreetMap'
}
).addTo(map);

// =====================================
// SCALE BAR
// =====================================

L.control.scale({
metric:true,
imperial:false
}).addTo(map);

// =====================================
// ICON
// =====================================

var museumIcon = L.icon({
iconUrl:'img/museum.png',
iconSize:[60,60]
});

var hotelIcon = L.icon({
iconUrl:'img/hotel.png',
iconSize:[40,40]
});

var restoranIcon = L.icon({
iconUrl:'img/restoran.png',
iconSize:[30,30]
});

var ibadahIcon = L.icon({
iconUrl:'img/tempatibadah.png',
iconSize:[30,30]
});

var kesehatanIcon = L.icon({
iconUrl:'img/fasilitaskesehatan.png',
iconSize:[30,30]
});

// =====================================
// VARIABEL LAYER
// =====================================

var museumLayer;
var hotelLayer;
var restoranLayer;
var ibadahLayer;
var kesehatanLayer;

// =====================================
// MUSEUM
// =====================================

fetch("Data/museum.geojson")
.then(res=>res.json())
.then(data=>{

museumLayer = L.geoJSON(data,{

pointToLayer:function(feature,latlng){

return L.marker(latlng,{
icon:museumIcon
});

},

onEachFeature:function(feature,layer){

layer.bindPopup(

"<div style='width:250px'>" +

"<h3>"+feature.properties.nama+"</h3>"+

"<b>Kategori :</b> "+
feature.properties.kategori+

"<br><br>"+

"<b>Deskripsi :</b><br>"+
feature.properties.deskripsi+

"<br><br>"+

"<b>Alamat :</b><br>"+
feature.properties.alamat+

"<br><br>"+

"<b>Jam Buka :</b><br>"+
feature.properties.jam_buka+

"</div>"

);

}

});

museumLayer.addTo(map);

});

// =====================================
// HOTEL
// =====================================

fetch("Data/hotel.geojson")
.then(res=>res.json())
.then(data=>{

hotelLayer = L.geoJSON(data,{

pointToLayer:function(feature,latlng){

return L.marker(latlng,{
icon:hotelIcon
});

},

onEachFeature:function(feature,layer){

layer.bindPopup(

"<h3>"+feature.properties.nama_lokas+"</h3>"+

"<b>Alamat :</b><br>"+

feature.properties.alamat

);

}

});

hotelLayer.addTo(map);

});

// =====================================
// RESTORAN
// =====================================

fetch("Data/restoran.geojson")
.then(res=>res.json())
.then(data=>{

restoranLayer = L.geoJSON(data,{

pointToLayer:function(feature,latlng){

return L.marker(latlng,{
icon:restoranIcon
});

},

onEachFeature:function(feature,layer){

layer.bindPopup(

"<h3>"+feature.properties.nama_resto+"</h3>"+

"<b>Alamat :</b><br>"+

feature.properties.alamat

);

}

});

restoranLayer.addTo(map);

});

// =====================================
// TEMPAT IBADAH
// =====================================

fetch("Data/tempat_ibadah.geojson")
.then(res=>res.json())
.then(data=>{

ibadahLayer = L.geoJSON(data,{

pointToLayer:function(feature,latlng){

return L.marker(latlng,{
icon:ibadahIcon
});

},

onEachFeature:function(feature,layer){

layer.bindPopup(

"<h3>"+feature.properties.nama_tempa+"</h3>"+

"<b>Alamat :</b><br>"+

feature.properties.alamat

);

}

});

ibadahLayer.addTo(map);

});

// =====================================
// FASILITAS KESEHATAN
// =====================================

fetch("Data/fasilitas_kesehatan.geojson")
.then(res=>res.json())
.then(data=>{

kesehatanLayer = L.geoJSON(data,{

pointToLayer:function(feature,latlng){

return L.marker(latlng,{
icon:kesehatanIcon
});

},

onEachFeature:function(feature,layer){

layer.bindPopup(

"<h3>"+feature.properties.nama_faske+"</h3>"+

"<b>Alamat :</b><br>"+

feature.properties.alamat

);

}

});

kesehatanLayer.addTo(map);

});

// =====================================
// LEGENDA
// =====================================

var legend = L.control({
position:'bottomright'
});

legend.onAdd = function(){

var div = L.DomUtil.create(
'div',
'legend'
);

div.innerHTML =

'<h4>Legenda</h4>'+

'<p><img src="img/museum.png" width="18"> Museum</p>'+

'<p><img src="img/hotel.png" width="18"> Hotel</p>'+

'<p><img src="img/restoran.png" width="18"> Restoran</p>'+

'<p><img src="img/tempatibadah.png" width="18"> Tempat Ibadah</p>'+

'<p><img src="img/fasilitaskesehatan.png" width="18"> Fasilitas Kesehatan</p>';

return div;

};

legend.addTo(map);

// =====================================
// LAYER CONTROL
// =====================================

setTimeout(function(){

var overlayMaps = {

"Museum":museumLayer,

"Hotel":hotelLayer,

"Restoran":restoranLayer,

"Tempat Ibadah":ibadahLayer,

"Fasilitas Kesehatan":kesehatanLayer

};

L.control.layers(
null,
overlayMaps,
{
collapsed:false
}
).addTo(map);

},1000);

// =====================================
// HOME BUTTON
// =====================================

document
.getElementById("homeBtn")
.addEventListener("click",function(){

map.setView(
[museumLat,museumLng],
16
);

});