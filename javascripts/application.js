(function(win, CLIType) {
  if (win.document.querySelector(".posts-title")) {
    CLIType.go(".posts-title");
  }

  // js hack for markdown multiple get parameters processing error
  var responsiveUrl = win.document.querySelector("#responsive-url");
  if (responsiveUrl) {
    responsiveUrl.href = "http://armoucar.github.io/responsive-play/?to=1600&url=http%3A%2F%2Farthurcarvalho.com%2Fdont-panic%2F";
  }

  if (win.document.querySelector("#maps-ireland")) {

    win.inicializaMapa =  function() {
      var mapOptions = {
        zoom: 13,
        center: new google.maps.LatLng(53.34771, -6.2592),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      var map = new google.maps.Map(document.getElementById("maps-ireland"), mapOptions);
    };

    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyBpmmPNvZHnfJZZB8JUlCdbbV9tO-s-7pI&sensor=false&callback=inicializaMapa";
    win.document.body.appendChild(script);
  }
})(window, CLIType);
