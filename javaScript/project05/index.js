//generating random number for a colour
const randomColorNumber = function () {
    const hex = '01234567890ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random()*16) ]
    }
    return color
}

 let changeColor

const changeBackground = function (){
    const randomColor = function (){
        document.querySelector('body').style.backgroundColor = randomColorNumber()
    }
    changeColor = setInterval(randomColor,1000)
}


const stopBackground = function (){
    clearInterval(changeColor)
}

document.getElementById('start').addEventListener('click',changeBackground)

document.getElementById('stop').addEventListener('click',stopBackground)
