


let textArr = ["yes", "has", "bashaps", "cas", "visit", "miss", "rush", "ecstainer", "kiss", "observed", "lose", "was", "myster", "master", "lust", "dislike", "passed", "best", "ves", "wish", "dose", "its"]


function splitText(textArr) {
  
let myString = textArr.join(' ').split('')

return myString

}

function displayText() {

  textArr.sort(() => Math.random() - 0.5)

  let currentRow = document.getElementById('text-Input')
  
  splitText(textArr).forEach(myString => {
    let newTag = document.createElement('span')

    currentRow.appendChild(newTag)

    newTag.innerHTML +=myString
    
  });

}

function btnReset() {


  // let mystring = splitText(textArr)

  // for(let i = 0; i < mystring.length; i++){

  // let letter = document.getElementById('text-Input')
  // letter.innerHTML = letter.innerHTML.replace('<span style="background-color:White; color:black">'+mystring[i]+'</span>','' )
  // letter.innerHTML = letter.innerHTML.replace('<span style="background-color:White; color:red">'+mystring[i]+'</span>','' )
  // letter.innerHTML = letter.innerHTML.replace('<span>'+mystring[i]+'</span>' , '')
  // }

  let letter = document.getElementById('text-Input')
  letter.innerHTML = ''


  document.getElementById('scoreIncorrect').innerHTML = "Error: "
  document.getElementById('infoReset').innerHTML = ""

  displayText()
  correct = 0
  incorrect = 0
}



let correct = 0
let incorrect = 0
document.addEventListener('keydown', (event) => {

  let i = correct + incorrect
  let mystring = splitText(textArr)
  
  for(i; i < mystring.length; i++){

    if(event.key == mystring[i]){

      let letter = document.getElementById('text-Input')
      letter.innerHTML = letter.innerHTML.replace('<span>'+mystring[i]+'</span>', '<span style="background-color:White; color:black">'+mystring[i]+'</span>')
      
      correct++
      break;
    } else {
      let letter = document.getElementById('text-Input')
      letter.innerHTML = letter.innerHTML.replace('<span>'+mystring[i]+'</span>', '<span style="background-color:White; color:red">'+mystring[i]+'</span>')
      
      incorrect++
      break;
    } 
  }


if(i >= 0 && i <= 124){
    document.getElementById('scoreIncorrect').innerHTML =  "Errors: " + incorrect + " of 125"
    
}

if(incorrect > 5 && incorrect <= 10 && i >= 124){
  document.getElementById('infoReset').innerHTML = "Nice Bro!"
}else if(incorrect > 10 && incorrect <= 20 && i >= 124){
  document.getElementById('infoReset').innerHTML = "better play again.."
}else if(incorrect > 20 && incorrect <= 30 && i >= 124){
  document.getElementById('infoReset').innerHTML = "Really? You have" + incorrect + "error.."
}else if(incorrect > 30 && i >= 124){
  document.getElementById('infoReset').innerHTML = "Better turn off the game.."
}else if(incorrect <= 5 && i >= 124){
  document.getElementById('infoReset').innerHTML = "You are Pro!!"
}



})

 
window.addEventListener("load" , function () {
  displayText()

})