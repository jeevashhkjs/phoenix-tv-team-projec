//get elements in HTML file
let searchInput = document.querySelector(".search")
let searchIcon = document.querySelector(".searchIcon")
let productList = document.querySelector(".productsLists")

//search icons invisible function
searchInput.addEventListener("click",()=>{
    searchIcon.style.display = "none"
})
window.addEventListener("click",(e)=>{
    if(!(e.target.classList.contains("search"))){
        if(searchInput.value == "")
        searchIcon.style.display = "block"
    }
})

//fetch Data from API

window.addEventListener("DOMContentLoaded",()=>{
    fetch('http://localhost:3000/products')
    .then(res=>res.json())
    .then(products=>{
        products.forEach(productsDetails => {
            console.log(productsDetails)
        });
    })
})