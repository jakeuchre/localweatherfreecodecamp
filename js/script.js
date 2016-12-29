$(document).ready(function(){
  var apiGeo = "https://ipapi.co/json/";
  $.getJSON(apiGeo, function(data){
    var lat = data.latitude;
    var lon = data.longitude;
    var apiWeather = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=ed2f6936798a945c023b64fc46abae48";
    $.getJSON(apiWeather, function(data){
      var weatherDes = data.weather[0].description;
      var city = data.name;
      var kTemper = data.main.temp;
      var fTemper = ((kTemper) * (9/5) - 459.67).toFixed(1);
      var cTemper = (kTemper - 273).toFixed(1);;
      var windSpeed = data.wind.speed;
      var icon = ("<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'>");
      var anim = ("<img src='images/animated/cloudy.svg'>");


      $("#anim").html(anim);
      $("#city").html(city);
      $("#icon").html(icon);
      $("#weather").html(weatherDes);
      $("#Temper").html(fTemper + " &#x2109;");
      $("#far").click(function(){
        $("#Temper").html(fTemper + " &#x2109;");
      });
      $("#cel").click(function(){
        $("#Temper").html(cTemper + " &#x2103;");
      });
    });

  });

  

});