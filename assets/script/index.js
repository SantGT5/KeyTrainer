


let textArr = ["mequetrefe", "amoitar", "piripaque", "serelepe", "siricutico", "bugiganga", "xexar", "azuado"]




function splitText(textArr) {
  
  

let myString = textArr.join(' ').split('')

return myString

}


function displayText() {

  textArr.sort(() => Math.random() - 0.5)
  console.log(textArr)

  let currentRow = document.getElementById('text-Input')
  
  splitText(textArr).forEach(myString => {
    let newTag = document.createElement('span')

    currentRow.appendChild(newTag)

    newTag.innerHTML +=myString
    
  });

}

function btnReset() {


  let mystring = splitText(textArr)

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

window.addEventListener("load" , function () {
  displayText()

})

// function btnShuffle(){
  
//   let shuffledArray = textArr.sort(() => Math.random() - 0.5)
  
// console.log(shuffledArray)

//   return shuffledArray

// }











let correct = 0
let incorrect = 0
document.addEventListener('keydown', (event) => {

  let i = correct + incorrect
  let mystring = splitText(textArr)
  
  for(i; i < mystring.length; i++){

    console.log("array", mystring[i])
    console.log("event.key", event.key)

    if(event.key == mystring[i]){
      console.log('correct character')

      let letter = document.getElementById('text-Input')
      letter.innerHTML = letter.innerHTML.replace('<span>'+mystring[i]+'</span>', '<span style="background-color:White; color:black">'+mystring[i]+'</span>')
      
      correct++
      break;
    } else {
      console.log('wrong character')
      console.log(mystring[i])
      let letter = document.getElementById('text-Input')
      letter.innerHTML = letter.innerHTML.replace('<span>'+mystring[i]+'</span>', '<span style="background-color:White; color:red">'+mystring[i]+'</span>')
      
      incorrect++
      break;
    } 
  }

// if(correct === mystring.length){
//   btnReset()
// }

if(correct >= 0 && correct >= mystring.length){
  document.getElementById('scoreIncorrect').innerHTML = "Erros: " + incorrect + " of 71"
  document.getElementById('infoReset').innerHTML = "Press button Reset!"
}

})


