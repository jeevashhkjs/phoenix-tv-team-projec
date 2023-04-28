const formTag = document.querySelector("form")
const firstName = document.querySelector(".fname")
const lastName = document.querySelector(".lname")
const email = document.querySelector(".email")
const password = document.querySelector(".Password")
const subBtn = document.querySelector(".subBtn")
const wrongAlert = document.querySelector(".wrong")
const chechBox = document.querySelector(".checkBox")
const recommendPassword = document.querySelector(".suggestion")

// console.log(chechBox)

subBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let givingData =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    let settinEmail = /^(?=.*[@])(?=.*[gmail.com])/
    if(password.value.match(givingData)){
        // wrongAlert.style.display = "none"
        recommendPassword.style.display = "block"
        password.value = "";
    }
    else if(password.value == ""){

    }
    else if(email.value.match(settinEmail)){
        email.value = "";
    }
    else{
        recommendPassword.style.display = "block"
    }
});
chechBox.addEventListener("click",()=>passwordVisible());



function passwordVisible(){
    if(password.type == "password"){
        password.type = "text"
    }
    else{
        password.type = "password"
    }
}

function insertData(e){

}

