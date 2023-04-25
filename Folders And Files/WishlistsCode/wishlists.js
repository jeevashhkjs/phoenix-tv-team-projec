const deleteicon = document.querySelector(".deleteicon")
const products =  document.querySelector(".products")
const show = document.querySelector(".allproducts")
const allproducts =  document.querySelector(".error")
        
window.addEventListener("DOMContentLoaded",()=>{
    fetch("http://localhost:3000/wishlist?_expand=product")
    .then(res => res.json())
    .then(datas=>{
        console.log(datas);
    })
})

// deleteicon.addEventListener("click",(e)=>{
//     e.target.parentElement.parentElement.remove()
//     allproducts.classList.add("active")
//     setTimeout(() => {
//         allproducts.classList.remove("active")
//     }, 1000);
// }) 