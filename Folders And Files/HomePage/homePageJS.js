
//get elements in HTML file
let searchInput = document.querySelector(".search")
let searchIcon = document.querySelector(".searchIcon")
let productList = document.querySelector(".productsLists")
let brandDiv = document.querySelector(".brandsName")
let banner = document.querySelector(".bannerImg")
let products = document.querySelector(".productsLists")
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

let brands = ["One Plus","Sony","SAMSUNG","LG","ONIDA","PANASONIC","MI","PHILIPS","VU"]

//brand name showing function
brands.forEach(brand => {
    let brandPara = document.createElement("p")
    brandPara.innerText = brand
    brandDiv.append(brandPara)
});

//banner showing function
banner.src = "./images/banner1.svg"


//products lists
//fetch Data from API
window.addEventListener("DOMContentLoaded",()=>{
    fetch('http://localhost:3000/products')
    .then(res=>res.json())
    .then(productsFromApi=>{
        for(let i=0;i<productsFromApi.length;i++){
            if(i>4){
                break;
            }

            let parentDiv = document.createElement("div")
            parentDiv.setAttribute("class","parentDivs")
            
            let createImg = document.createElement("img")
            createImg.src = productsFromApi[i].images[0]

            let productDetail = document.createElement("p")
            productDetail.setAttribute("class","productName")
            productDetail.innerText = `${productsFromApi[i].name.slice(0,12)}...`
            // console.log(productsFromApi[i].name.slice(0,12))

            let productPrice = document.createElement("p")
            productPrice.setAttribute("class","PPrice")
            productPrice.innerHTML = `${productsFromApi[i].price}`
            // console.log(productsFromApi[i].price)            

            parentDiv.append(createImg)
            parentDiv.append(productDetail)
            parentDiv.append(productPrice)
            products.append(parentDiv)
        }
    })
})