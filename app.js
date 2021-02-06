
getLocation();


var mymap = L.map('mapid').setView([37.1369219, -93.3586231], 11);

const attribution =
'&copy; <a href= "https://www.openstreetmap.org/copywrite">OpenStreetMap</a> contributors';


const tileUrl='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles =L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);






function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }

  
function showPosition(position) {
    L.marker([position.coords.latitude, position.coords.longitude]).addTo(mymap);
  }