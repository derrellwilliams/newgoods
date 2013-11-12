 <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB5F8NU4PwlkNub_ebY4AWL8yTye1D-zlk&sensor=false"></script>
      
       <script>
      function initialize() {
        var myLatlng = new google.maps.LatLng(40.79565,-73.938718);
        var mapOptions = {
          zoom: 15,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [ { stylers: [ { "weight": 0.1 }, { "saturation": -31 } ] } ]

          
        }
        var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'East Harlem',
            
        });
      }
    </script> 
    
        <script>
      function initialize() {
        var myLatlng = new google.maps.LatLng(40.79565,-73.938718);
        var mapOptions = {
          zoom: 15,
          center: myLatlng,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          styles: [ { stylers: [ { "weight": 0.1 }, { "saturation": -31 } ] } ]
        }

        var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

        var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h4 id="firstHeading" class="firstHeading">East Harlem</h4>'+
            '<div id="bodyContent">'+
            '<p> 96th St. to Harlem River, East River to 5th Ave. </p>'+
           	'</div>'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 200
        });

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'East Harlem'
        });
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map,marker);
        });
      }

    </script>