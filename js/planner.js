
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");

let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}

function showCalendar(month, year) {

    let firstDay = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let tbl = document.getElementById("calendar-body"); // body of the calendar

    // clearing all previous cells
    tbl.innerHTML = "";

    // filing data about month and in the page via DOM.
    monthAndYear.innerHTML = months[month] + " " + year;
    selectYear.value = year;
    selectMonth.value = month;

    // creating all cells
    let date = 1;
    for (let i = 0; i < 6; i++) {
        // creates a table row
        let row = document.createElement("tr");
        row.setAttribute("id", "")
        //creating individual cells, filing them up with data.
        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let cell = document.createElement("td");
                let cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);

            }
            else if (date > daysInMonth) {
                break;
            }


            else {
                let cell = document.createElement("td");
                let cellText = document.createTextNode(date);

                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } // color today's date
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }
    

}

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