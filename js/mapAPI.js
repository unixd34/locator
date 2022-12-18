function initMap(){
    
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
    // Ormoc city entrance marker
    var entrance = new google.maps.Marker({
      position: {lat: 11.1128, lng: 124.5739},
      map: map
    });
    // Ormoc city marker
    var Ormoc = new google.maps.Marker({
      position: {lat: 11.038, lng: 124.619},
      map: map
    });
    //Ormoc City entrance navigator
    var infowindow = new google.maps.InfoWindow({
      content:"From Tacloban to Ormoc Road (Entrance)"
    });
    infowindow.open(map,entrance);

    //Ormoc City navigator
    var infowindow = new google.maps.InfoWindow({
      content:"Ormoc City"
    });
    infowindow.open(map,Ormoc);

    // Search Fast food
    var input = document.getElementById('search');
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
        places.forEach(function(p) {
          if (!p.geometry)
            return;

          markers.push(new google.maps.Marker({
            map: map,
            title: p.name,
            position: p.geometry.location,
            zoom: 15,
            animation:google.maps.Animation.BOUNCE,
          }));

          var infowindow = new google.maps.InfoWindow({
            content: google.maps.Location
          });
          infowindow.open(map,bounds);

          if (p.geometry.viewport)
            bounds.union(p.geometry.viewport);
          else
            bounds.extend(p.geometry.location);
        });
        
        map.fitBounds(bounds);
      });
}