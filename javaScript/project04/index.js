let randomNumber=parseInt(Math.random()*100 +1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess =1
let playGame =true

if (playGame){
    submit.addEventListener('click' , function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        // console.log(guess)    
        validGuess(guess)
    })
}

function validGuess(guess){
    if(isNaN(guess)){
        alert(`Please enter a valid number`);
    } else if (guess < 1){
        alert(`Please enter a number more than 1`);
    } else if (guess > 100){
        alert(`Please enter a number less than 100`);
    } else if (prevGuess.includes(guess)){
        alert(`You have already guessed that number. Try a different number.`);
    } else {
        prevGuess.push(guess);
        if(numGuess >= 10){
            displayGuess(guess);
            displayMessage(`Game over. The random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}


function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`you guessed it right`)
        endGame()
    } else if (guess < randomNumber){
        displayMessage(`Number is Too low`)
    } else if (guess > randomNumber){
        displayMessage(`Number is Too high`)
    } 
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML +=`${guess} `
    numGuess++
    remaining.innerHTML = `${10-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    const newGameButton = document.createElement('button')
    newGameButton.classList.add('button')
    newGameButton.innerHTML = 'Start New Game'
    newGameButton.setAttribute('id', 'newGame')
    startOver.appendChild(newGameButton)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(){
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(newGameButton)
        playGame = true
    })
}
