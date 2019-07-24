let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectYear = document.getElementById("year");
let selectMonth = document.getElementById("month");
let date = 1;
let days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
let day = null;
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
                    day = days[date-1]
                    let template = document.querySelector('.template')
                    texter = document.createTextNode(`The date is ${months[month]} `)

                    template.appendChild(texter);

                } // color today's date
                else if (date === 1 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add(months[month] + date)
                }
                else if (date === 2 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-02')
                }
                else if (date === 3 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-03')
                }
                else if (date === 4 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-04')
                }
                else if (date === 5 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-05')
                }
                else if (date === 6 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 7 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 8 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 9 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 10 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 11 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 12 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 13 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 14 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 15 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 16 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 17 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 18 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 19 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 20 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 21 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 22 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 23 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 24 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 25 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 26 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 27 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 28 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 29 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if (date === 30 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                else if(date === 31 && year === today.getFullYear() && month === today.getMonth() ){
                    cell.classList.add('july-01')
                }
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row into calendar body.
    }


    

}
$(document).ready(function(){
    $('.Jul1').click(getWeather)

function getWeather(){
    console.log('july pushed')
    $('.template').append(`<p>The month is ${months[month]} and the date is ${day}<p>`)


};
});
  

