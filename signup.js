const formTag = document.querySelector(".form")
const firstName = document.querySelector(".fname")
const lastName = document.querySelector(".lname")
const email = document.querySelector(".email")
const password = document.querySelector(".Password")
const subBtn = document.querySelector(".sub-btn")
const wrongAlert = document.querySelector(".wrong")
const chechBox = document.querySelector(".checkBox")
// console.log(subBtn)



formTag.addEventListener("click",(e)=>{
    e.preventDefault()
})

chechBox.addEventListener("click",()=>passwordVisible())
subBtn.addEventListener("click",()=> insertData())

function passwordVisible(){
    if(password.type == "password"){
        password.type = "text"
    }
    else{
        password.type = "password"
    }
}

function insertData(){
    let givingData =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    if(password.value.match(givingData)){
        wrongAlert.style.display = "none"
    }
    else{
        wrongAlert.style.display = "block"
    }
}


// function validatePassword(pass) {
//     let password =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
//     for (let i = 0; i <pass.length; i++) {
//       if (pass.match(password)) {
//         return " it's valid password"
        
//       } else {
//               return " it's invalid password"
//       }
//     }
//   }
  
//   console.log(validatePassword("sanjay1&"));