var _initMap = function(){
	var map;
	var myLocation = (lat: 40.3573, lng: 74.6672);
	map = new.google.maps.Map(document.getElementById('map'),
		(zoom: 0, center: myLocation))
}