

$(document).ready(function(){
    getWeather();


function getWeather(){
   //getting the city or area key
    $.get(`https://dataservice.accuweather.com/locations/v1/cities/search?apikey=WgWCsW328fzBKdm4t3Aoci34y8ooI2ft&q=chelsea`, function(city){
      let statekey = city[0].Key;

      console.log(city[0].Key);
      console.log(city);
      //getting city or area weather information 
        $.get(`https://dataservice.accuweather.com/forecasts/v1/daily/1day/${statekey}?apikey=WgWCsW328fzBKdm4t3Aoci34y8ooI2ft`, function(weather){
              let minimumValue = weather.DailyForecasts[0].Temperature.Minimum.Value;
              let maximumValue = weather.DailyForecasts[0].Temperature.Maximum.Value;
              let summary = weather.Headline.Text
              let dayPrecipitation = weather.DailyForecasts[0].Day.HasPrecipitation;
              let nightPrecipitation = weather.DailyForecasts[0].Night.HasPrecipitation;
              let precipitationTypeDay =  weather.DailyForecasts[0].Day.PrecipitationType
              let precipitationTypeNight = weather.DailyForecasts[0].Night.PrecipitationType
              let iconNum = weather.DailyForecasts[0].Day.Icon
              let iconPhrase = weather.DailyForecasts[0].Day.IconPhrase
              console.log(maximumValue)
              console.log(minimumValue);

            });
      });
  

  };

});