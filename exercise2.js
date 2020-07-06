
let u =document.querySelector("#user")
u.insertAdjacentHTML("beforebegin","<label>Username: </label><br>")

let pw = document.querySelector(".pw");
let confirm = document.querySelector(".confirm");
let submit = document.querySelector(".submit")
pw.insertAdjacentHTML("beforebegin","<label>Password:</label><br>");
confirm.insertAdjacentHTML("beforebegin","<label>Confirm Password:</label><br>")

submit.addEventListener("click",
(e) => {if (pw.value !== confirm.value){
  e.preventDefault()
  let p =document.createElement("p")
  let text= document.createTextNode('Please ensure that both passwords are identical')
  p.appendChild(text)
  document.body.appendChild(p)
  setTimeout(() => document.body.removeChild(p),1000)
}
}
)

submit.setAttribute("disabled","disabled");
let form = document.querySelector("form")

form.addEventListener("change",
(event)=> {
let nodeList = document.querySelectorAll('input')
let x =Array.from(nodeList)
let formIsFilled =x.every(input =>input.value !== "");

if(formIsFilled){
  submit.removeAttribute("disabled");
}}
)
