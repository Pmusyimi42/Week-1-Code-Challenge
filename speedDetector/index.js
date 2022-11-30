const form = document.getElementById('prompt');
form.addEventListener('submit', function(e){
    e.preventDefault()
    let speed = document.getElementById('prompts').value
    demeritPoint = 0;
    let msg;
    if(speed > 0 && speed < 70) {
        msg = ("ok")
        demeritPoint = 0;
    }
    else if(speed > 70){
        demeritPoint += Math.floor((speed - 70) / 5)
        if(demeritPoint > 0 && demeritPoint < 12){
            msg = "Demerit point is " + demeritPoint;
        }
        else if (demeritPoint > 12){
            msg = ("licence is suspended");
        }
    }
    const message = document.getElementById("msg1")
    console.log(message)
    message.innerText = msg;
    const respo = document.getElementById('msg');
    respo.innerText = "Demerit points: " + demeritPoint;
    // console.log(speed);
});
// console.log(form);