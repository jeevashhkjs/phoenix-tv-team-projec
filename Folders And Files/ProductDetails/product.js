// get particular id from HomePage
let getLink = window.location.search
let targetId = getLink.slice(4,getLink.length)

let prodct = [
    {
    "id": 1,
    "fullName": "OnePlus Y1S 108 cm (43 inch) Full HD LED Smart Android TV with Android 11 and Bezel-Less Frame",
    "description": "You can watch your favourite movies, shows, and other content on this OnePlus TV. Sporting a slim bezel-less design, this TV is designed to offer an enhanced viewing experience.",
    "price": "₹25000",
    "images": [
      "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/g/4/k/43fd2a00-43-y1s-oneplus-original-imagbgc44gerfphz.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/n/t/p/43fd2a00-43-y1s-oneplus-original-imagbgc4twtftzkz.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/4/n/0/43fd2a00-43-y1s-oneplus-original-imagbgc4rcfpenmd.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/4/i/1/43fd2a00-43-y1s-oneplus-original-imagbgc4mhghmg6g.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/v/l/g/43fd2a00-43-y1s-oneplus-original-imagbgc4z5hhts39.jpeg?q=70",
      "https://rukminim1.flixcart.com/image/416/416/kzfvzww0/television/p/g/c/43fd2a00-43-y1s-oneplus-original-imagbgc4je3cbynd.jpeg?q=70"
    ],
    "discountPrice" : "₹30000",
    "model_Name": "43FD2A00",
    "screen_Type": "LED",
    "Brand": "One Plus",
    "inches": "43 inch",
    "name" : "OnePlus Y1S 108 cm (43 inch)"
  }
]

//get elements from html page
let parentImg = document.querySelector(".currentSelectImg")
let childImgDiv = document.querySelector(".childImgDiv")
let prdctsDetails = document.querySelector(".priceAndNames")

window.addEventListener("DOMContentLoaded",()=>{

  //parent image
    parentImg.src = prodct[0].images[0]

  //child images
  for(let i=0;i<prodct[0].images.length;i++){
    let createChldImg = document.createElement("img")
    createChldImg.setAttribute("class","childImg")
    createChldImg.src = prodct[0].images[i]

    childImgDiv.append(createChldImg)
  }

  //products details name parent div
  let productNameParent = document.createElement("div")
  productNameParent.setAttribute("class","parentprdname")
  prdctsDetails.append(productNameParent)

  //products details
  let productName = document.createElement("p")
  productName.setAttribute("class","productFUllName")
  productName.innerText = prodct[0].fullName

  //product Price
  let productPrice = document.createElement("h2")
  productPrice.setAttribute("class","productPrice")
  productPrice.innerHTML = `${prodct[0].price} <span class="discount">${prodct[0].discountPrice}</span>`

  //product rating
  let rating = document.createElement("p")
  rating.setAttribute("class","rating")
  rating.innerHTML = `4.4 <span><i class="fa-regular fa-star"></i></span>`

  let parentInches = document.createElement("div")
  parentInches.setAttribute("class","parentInches")

  //created elements apped
  productNameParent.append(productName)
  productNameParent.append(productPrice)
  productNameParent.append(rating)
  productNameParent.append(parentInches)


  for(let k=0;k<4;k++){
    let inches = document.createElement("div")
    inches.setAttribute("class","inches")
  
    let TVsize = document.createElement("span")
    TVsize.setAttribute("class","size")
    TVsize.innerHTML = `size <span class = "tvinches">42 inches</span>`
  
    let createLineInches = document.createElement("div")
    createLineInches.setAttribute("class","lineInches")
  
    let productPriceInches = document.createElement("input")
    productPriceInches.type = "radio"
    productPriceInches.value = "32000"
  
    let priceInches = document.createElement("span")
    priceInches.setAttribute("class","radioPrice")
    priceInches.innerText = "₹30000"

    parentInches.append(inches)
    inches.append(TVsize)
    inches.append(createLineInches)
    inches.append(productPriceInches)
    inches.append(productPriceInches)
    inches.append(priceInches)
  }

})