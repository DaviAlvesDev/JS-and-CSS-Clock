function pointers_movement() {
    const moment = new Date()
    const hour = Number(moment.getHours())
    const min = Number(moment.getMinutes())
    const sec = Number(moment.getSeconds())

    const hour_angle = ((360/12) * hour) + ((30/60) * min)
    const min_angle = (360/60) * min
    const sec_angle = (360/60) * sec


    document.documentElement.style.setProperty('--hr-angle', `${hour_angle}deg`)

    document.documentElement.style.setProperty('--min-angle', `${min_angle}deg`)

    document.documentElement.style.setProperty('--sec-angle', `${sec_angle}deg`)
}

function am_pm() {
    const moment = new Date()
    const hour = Number(moment.getHours())
    const min = Number(moment.getMinutes())
    const sec = Number(moment.getSeconds())

    const root = document.querySelector('html')
    if (hour > 12) {
        root.classList.add('pm')
    } else{
        root.classList.remove('pm')
    }
}

am_pm()
pointers_movement()
setInterval(pointers_movement, 1000)
setInterval(am_pm, 10000)