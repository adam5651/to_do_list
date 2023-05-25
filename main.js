let inputfield = document.getElementById("to_do")
let submitbutton = document.getElementById("submit")
let fieldOfThingsToDo = document.getElementById("thinks_to_do")
 

submitbutton.addEventListener("click", function(){
  let div = document.createElement("div")
  let paragraf = document.createElement("p")
  let icon1 = document.createElement("img")
  let icon2 = document.createElement("img")
  icon1.src="./img/icons8-trash-50.png"
  icon2.src="./img/icons8-check-mark-48.png"
  paragraf.innerText = inputfield.value 
  fieldOfThingsToDo.appendChild(div)
  div.appendChild(paragraf)
  div.appendChild(icon2)
  div.appendChild(icon1)
  inputfield.value = ""

  icon2.addEventListener("click", function(){
    paragraf.style.textDecoration = "line-through"
  })
  icon1.addEventListener("click", function(){
    fieldOfThingsToDo.removeChild(div)
})

})






