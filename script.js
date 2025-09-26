let validation = (e) => {
    e.preventDefault()
    let name = e.target[0]
    let email = e.target[1]
    let query = e.target[2]
    let err = document.getElementById('err')

    if(name.value === '' || name.value === null || email.value === '' || email.value === null || query.value === '' || query.value === null){
        err.innerText = 'All fields are mandatory.'
        err.style.color = 'red'
    }
    else{
        err.innerText = 'Successful ✅'
        err.style.color = 'green'
        name.value = ''
        email.value = ''
        query.value = ''
    }

}

// let daynight = () => {
//     let b1 = document.getElementById('b1')
//     let head = document.getElementsByClassName('headermain')[0]
//     let a1 = document.getElementsByClassName('a1')
//     console.log(b1.src)
//     if(b1.src === './images/night-mode.png'){
//         document.body.classList.toggle('daynight')
//         head.classList.toggle('color')
//         b1.src = './images/day-mode.png'
//         a1[0].classList.toggle('clr')
//         a1[1].classList.toggle('clr')
//         a1[2].classList.toggle('clr')
//         a1[3].classList.toggle('clr')
//         a1[4].classList.toggle('clr')
//     }
//     else{
//         document.body.classList.toggle('daynight')
//         head.classList.toggle('color')
//         b1.src = './images/night-mode.png'
//         a1[0].classList.toggle('clr')
//         a1[1].classList.toggle('clr')
//         a1[2].classList.toggle('clr')
//         a1[3].classList.toggle('clr')
//         a1[4].classList.toggle('clr')
//     }
// }



let daynight = () => {
    let btn = document.getElementById('b1')
    document.body.classList.toggle('daynight')
    let head = document.getElementsByClassName('headermain')[0]
    let a1= document.getElementsByClassName('a1')
    if (document.body.classList.contains('daynight')) {
        btn.src = './images/day-mode.png'
        head.classList.toggle('color')
        a1[0].classList.toggle('clr')
        a1[1].classList.toggle('clr')
        a1[2].classList.toggle('clr')
        a1[3].classList.toggle('clr')
        a1[4].classList.toggle('clr')
    } else {
        btn.src = './images/night-mode.png'
        head.classList.toggle('color')
        a1[0].classList.toggle('clr')
        a1[1].classList.toggle('clr')
        a1[2].classList.toggle('clr')
        a1[3].classList.toggle('clr')
        a1[4].classList.toggle('clr')
    }
}