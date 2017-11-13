$( document ).ready(function() {
    
});

function initMap() {
    var fiec = {lat: -2.144603, lng: -79.967674};  //-2.144603, -79.967674
	var fcnm = {lat: -2.146250, lng: -79.967166};  //-2.146250, -79.967166
	var celex = {lat: -2.145986, lng: -79.965600};  //-2.148606, -79.967472
	var fcsh = {lat: -2.148606, lng: -79.967484};  //-2.148623, -79.967484
	var fimcbor = {lat: -2.145986, lng: -79.965600};  //-2.146688, -79.963264
	var fimcp = {lat: -2.146688, lng: -79.965894};  //-2.144561, -79.965894
	var edcom = {lat: -2.143555, lng: -79.962165};  //-2.143555, -79.962165
	var fcv = {lat: -2.151894, lng: -79.956762};  //-2.151894, -79.956762
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: fiec
    });
    var marker = new google.maps.Marker({
      position: fiec,
      map: map
    });
	var marker2 = new google.maps.Marker({
      position: fcnm,
      map: map
    });
	var marker3 = new google.maps.Marker({
      position: celex,
      map: map
    });
  }