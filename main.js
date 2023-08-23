const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


function handleSecretNumber() {
  return Math.round(Math.random() * 10)
}

let secretNumber = handleSecretNumber()
let betCount = 0

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (inputNumber.value != "") {
    betCount++

    if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
      alert('O número digitado não está entre 0 e 10')
      betCount--
    }
  
    if (Number(inputNumber.value) === secretNumber) {
      toggleScreen()
  
      screen2
        .querySelector("h2")
        .innerText = `acertou em ${betCount} tentativas`
    }
  
    inputNumber.value = ""
  }
  
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleResetClick(){
  toggleScreen()
  secretNumber = handleSecretNumber()

  betCount = 0
}

function handleResetEnter(e){
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetEnter)