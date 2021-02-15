const secondsHand = document.querySelector(".seconds-hand");
const minutesHand = document.querySelector(".minutes-hand");
const hoursHand = document.querySelector(".hours-hand");

function setDate(){
    const now = new Date();
    /* ---- segundos ---- */
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`
    /* ---- minutos ---- */
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`
    /* ---- horas ---- */
    const hours = now.getHours();
    const hoursDegrees = ((hours / 60) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`

    console.log("segundos: " + seconds);
    console.log("minutos: " + minutes);
    console.log("horas: " + hours);
}

setInterval(setDate,1000);