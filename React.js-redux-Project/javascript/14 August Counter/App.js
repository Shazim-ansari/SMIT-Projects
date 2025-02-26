const targetDate = new Date("2024-08-14T10:27:30");

function countdown() {
    const currentDate = new Date();
    const Difference = targetDate.getTime() - currentDate.getTime();
    const days = Math.floor(Difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((Difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((Difference / (1000 * 60)) % 60);
    const seconds = Math.floor((Difference / 1000) % 60);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(countdown, 1000);