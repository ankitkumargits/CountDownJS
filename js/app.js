const endDate = "09 June 2022 01:02 PM";

document.getElementById("end-date").innerText = endDate;
const input = document.querySelectorAll("input");

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0 ) return ;
    // convert into the days 
    input[0].value = Math.floor(diff / 3600 / 24);
    // convert into the Hours 
    input[1].value = Math.floor((diff / 3600) % 24);

    // convert into the Minutes
    input[2].value = Math.floor(diff / 60 % 60);

    // convert into the Seconds 
    input[3].value = Math.floor(diff) % 60;


}
// initial call of arrow function 
setInterval(() => {
    clock();
}, 1000);