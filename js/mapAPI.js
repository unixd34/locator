function initMap(){
  var directionsRenderer = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();
    
    // Apply google map api
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11, 
        center: {lat: 11.038, lng: 124.619},

        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL
        },
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        streetViewControl: true,
    });

    // Search Fast food
    var input = document.getElementById('search');
    var searchBox = new google.maps.places.SearchBox(input);

      map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
      });

      var markers = [];
      searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();


        var bounds = new google.maps.LatLngBounds();
        places.forEach(function(p) {
          if (!p.geometry)
            return;


          if (p.geometry.viewport)
            bounds.union(p.geometry.viewport);
          else
            bounds.extend(p.geometry.location);
        });
        
        map.fitBounds(bounds);
      });



      var input = document.getElementById('to');
    var searchBox = new google.maps.places.SearchBox(input);

      map.addListener('bounds_changed', function() {
        searchBox.setBounds(map.getBounds());
      });

      var markers = [];
      searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();
        if (places.length == 0)
          return;


        markers.forEach(function (m) { m.setMap(null); });
        markers = [];
        var bounds = new google.maps.LatLngBounds();


          var a = places.geometry.location.lat();
          var b = places.geometry.location.lng();
          var c = places.name;

          var mark = new google.maps.Marker({
                map: map,
                title: places.name,
                position: {lat: a, lng: b},
                zoom: 15,
                animation:google.maps.Animation.BOUNCE,
              });

          infowindow.open(map,mark);


          if (p.geometry.viewport) {
            bounds.union(places.geometry.viewport);
          }
          else{
            bounds.extend(places.geometry.location);
          }

        
        map.fitBounds(bounds);
      });



      directionsRenderer.setMap(map);
      document.getElementById("mode").addEventListener("change", () => {
        var e = document.getElementById("distination");
        var text = e.options[e.selectedIndex].text;

        const selectedMode = document.getElementById("mode").value;

        directionsService.route({
            origin: document.getElementById("search").value,
            destination: text,
            travelMode: google.maps.TravelMode[selectedMode],
          })
          .then((response) => {
            directionsRenderer.setDirections(response);
          })
          .catch((e) => window.alert("There's no type of service like that in this location! " + status));
      });
}





window.initMap = initMap;