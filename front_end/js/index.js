function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 3,
      center: { lat: 40.7812, lng: -73.9665 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
  
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  
  const locations = [
    { lat: 40.7812, lng: -73.9665 },
    { lat: 40.7532, lng: -73.9823 },
    { lat: 40.7794, lng: -73.9632 },
  ];