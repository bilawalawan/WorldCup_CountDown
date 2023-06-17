var todayDate = document.getElementById('TodayDate');
var nowDate = new Date();
let month = nowDate.getMonth();

// Get Month Name
var MonthName = ["Jun", "Feb", "March", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
MonthName.forEach((ele, ind) => {
    if (month == ind) {
        month = ele;
    }
})

let date = nowDate.getDate()
let day = nowDate.getDay()
let year = nowDate.getFullYear();

// Set The Date According to System
var format = `${month} ${date} ${year}`
todayDate.innerHTML = "Today Date Is: " + format;

// Set The CounDown according to System Date
var clock = () => {
    var getAccess = document.querySelectorAll(".times");
    // console.log(getAccess);
    let WorldCup = new Date("10/5/2023");
    var Today = new Date()
    // Find The Different Between The Time 
    var diff = (WorldCup - Today) / 1000;
    // console.log(diff);

    var days = Math.floor(diff / 3600 / 24);
    // console.log(days);
    getAccess[0].value = days;

    var hours = Math.floor((diff / 3600) % 24);
    getAccess[1].value = hours;

    var mint = Math.floor((diff / 60) % 60);
    getAccess[2].value = mint;

    var seconds = Math.floor((diff) % 60);
    getAccess[3].value = seconds;
    
}
clock();

setInterval(() => {
    clock()
}, 1000);
