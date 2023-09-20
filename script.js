let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime() {
    let d = new Date();
    let cDate = d.getDate();
    let hour = d.getHours();
    let minute = d.getMinutes();
    let second = d.getSeconds();

    document.getElementById("dateBox").textContent = cDate;

    let hRotation = 30*hour+minute/2;
    let mRotation = 6*minute;
    let sRotation = 6*second;

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;
}
// displayTime();
setInterval(displayTime,1000);

setInterval(() => {
    let a = new Date();
    const format = {
        hour:'numeric',hour12:true,minute:'numeric',second:'numeric',year:'numeric',month:'long',day:'numeric',weekday:'long' 
    }
    date = a.toLocaleString(undefined,format);
    // let date = a.getDate()+'/'+a.getMonth()+'/'+a.getFullYear();
    // let h = a.getHours()
    // if(h>12){
    //     var c = h % 12;
    // }
    // let time = c +':'+a.getMinutes()+':'+a.getSeconds();
    document.getElementById('time').innerHTML = date;
}, 1000);