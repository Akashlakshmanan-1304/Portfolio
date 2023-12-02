function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 9.161844, lng: 77.876751};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Kovilpatti,TN' // Title Location
    });
}