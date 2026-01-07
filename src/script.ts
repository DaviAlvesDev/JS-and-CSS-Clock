function am_pm() {
    const moment:Date = new Date()
    const hour:number = moment.getHours()
    const min:number = moment.getMinutes()
    const sec:number = moment.getSeconds()

    const root = document.querySelector('html') as HTMLHtmlElement
    if (hour > 12) {
        root.classList.add('pm')
    } else{
        root.classList.remove('pm')
    }
}

function pointers_movement() {
    const moment:Date = new Date()
    const hour:number = moment.getHours()
    const min:number = moment.getMinutes()
    const sec:number = moment.getSeconds()

    let hour_angle:number = ((360/12) * hour) + ((30/60) * min)
    let min_angle:number = (360/60) * min
    let sec_angle:number = (360/60) * sec

    const point = document.querySelector('#point') as HTMLDivElement
    if(sec_angle == 0) {point.classList.add('no-anim')} 
    else {point.classList.remove('no-anim')}

    document.documentElement.style.setProperty('--hr-angle', `${hour_angle}deg`)

    document.documentElement.style.setProperty('--min-angle', `${min_angle}deg`)

    document.documentElement.style.setProperty('--sec-angle', `${sec_angle}deg`)

    am_pm()
}


pointers_movement()
setInterval(pointers_movement, 1000)