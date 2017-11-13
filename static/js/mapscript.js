$( document ).ready(function() {
    
});

function initMap() {
    // -2.145986, -79.965600
    var uluru = {lat: -2.145986, lng: -79.965600};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }