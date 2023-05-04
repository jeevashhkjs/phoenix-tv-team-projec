const formTag = document.querySelector("form")
const firstName = document.querySelector(".fname")
const setName = document.querySelector(".setName")
const lastName = document.querySelector(".lname")
const email = document.querySelector(".email")
const password = document.querySelector(".Password")
const subBtn = document.querySelector(".subBtn")
const chechBox = document.querySelector(".checkBox")
const recommendPassword = document.querySelector(".suggestion")
const setEmail = document.querySelector(".setEmail")



subBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    let givingData =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/
    let settingEmail = /^(?=.*[@])(?=.*[gmail.com])/
    if(password.value.match(givingData)){
        password.value = "";
    }
    else if(!(password.value.match(givingData))){
        recommendPassword.style.display = "block"
    }
    else if(!(email.value.match(settingEmail))){
        email.value = "";
    }
    else if(password.value == "" || firstName.value == "" || email.value == ""){
        recommendPassword.style.display = "block";
        setName.style.visibility = "visible";
        setEmail.style.visibility = "visible"

    }
    else{
        recommendPassword.style.display = "none"
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

