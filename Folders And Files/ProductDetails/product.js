// get particular id from HomePage
let getLink = window.location.search
let targetId = getLink.slice(4,getLink.length)
console.log(targetId)

let modelName = document.querySelector(".modelNme")
let size = document.querySelector(".sizeCm")
let cartBtn = document.querySelector(".cartBtn")

//get elements from html page
let parentImg = document.querySelector(".currentSelectImg")
let childImgDiv = document.querySelector(".childImgDiv")
let prdctsDetails = document.querySelector(".priceAndNames")

window.addEventListener("DOMContentLoaded",()=>{

  fetch(`http://localhost:3000/products/${targetId}`)
  .then(res=>res.json())
  .then(prodct =>{

    //size and model name assign 
    size.innerText = prodct.inches
    modelName.innerText = prodct.model_Name

  //parent image
    parentImg.src = prodct.images[0]

  //child images
  for(let i=0;i<prodct.images.length;i++){
    let createChldImg = document.createElement("img")
    createChldImg.setAttribute("class","childImg")
    createChldImg.src = prodct.images[i]

    // console.log(prodct.images[i])
    createChldImg.addEventListener("click",(e)=>{
      let childImages = document.querySelectorAll(".childImg")
      for(let k=0;k<childImages.length;k++){
        childImages[k].classList.remove("selectImg")
      }
      e.target.classList.add("selectImg")
      // console.log(prodct.images[i])
      parentImg.src = prodct.images[i]
    })
    
    childImgDiv.append(createChldImg)
  }

  //products details name parent div
  let productNameParent = document.createElement("div")
  productNameParent.setAttribute("class","parentprdname")
  prdctsDetails.append(productNameParent)

  //products details
  let productName = document.createElement("p")
  productName.setAttribute("class","productFUllName")
  productName.innerText = prodct.fullName

  //product Price
  let productPrice = document.createElement("h2")
  productPrice.setAttribute("class","productPrice")
  productPrice.innerHTML = `${prodct.price} <span class="discount">${prodct.discountPrice}</span>`

  //product rating
  let rating = document.createElement("p")
  rating.setAttribute("class","rating")
  rating.innerHTML = `4.4 <span><i class="fa-regular fa-star starIcon"></i></span>`

  let parentInches = document.createElement("div")
  parentInches.setAttribute("class","parentInches")

  //created elements apped
  productNameParent.append(productName)
  productNameParent.append(productPrice)
  productNameParent.append(rating)
  productNameParent.append(parentInches)

  // console.log(prodct.discountPrice.slice(1,prodct.discountPrice.length))

  cartBtn.addEventListener("click",(e)=>{
    console.log(e.target)
  })
  console.log(prodct.discountPrice)  

  let priceProducts = Number(prodct.discountPrice.slice(1,prodct.discountPrice.length))

  for(let k=0;k<5;k++){
    if(k == 1){
      inchesCards("32 inches",priceProducts+1000)
    }
    else if(k ==2){
      inchesCards("42 inches",priceProducts+1599)
    }
    else if(k ==3){
      inchesCards("44 inches",priceProducts+2099)
    }else if(k ==4){
      inchesCards("55 inches",priceProducts+2599)
    }
  }
function inchesCards(incs,prce,disprce){

    let inches = document.createElement("div")
    inches.setAttribute("class","inches")
  
    let TVsize = document.createElement("span")
    TVsize.setAttribute("class","size")
    TVsize.innerHTML = `size <span class = "tvinches">${incs}</span>`
  
    let createLineInches = document.createElement("div")
    createLineInches.setAttribute("class","lineInches")
  
    let productPriceInches = document.createElement("input")
    productPriceInches.type = "radio"
    productPriceInches.value =`₹${disprce}`
  
    let priceInches = document.createElement("span")
    priceInches.setAttribute("class","radioPrice")
    priceInches.innerText = `₹${prce}`

    parentInches.append(inches)
    inches.append(TVsize)
    inches.append(createLineInches)
    inches.append(productPriceInches)
    inches.append(productPriceInches)
    inches.append(priceInches)
  }
})

})


