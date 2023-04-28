let cart_product=document.querySelector(".cart_product_details")

window.addEventListener("DOMContentLoaded",()=>{
    fetch("http://localhost:3000/wishlist?_expand=product")
    .then(res=>res.json())
    .then(data=>{
        data.forEach(element => {
            console.log(element);
            // console.log(element.product.price);
            let cartproductdiv=document.createElement("div")
            cartproductdiv.setAttribute("class","cartproductdiv")
               cart_product.append(cartproductdiv)
    
               let imgdiv=document.createElement("div")
               imgdiv.setAttribute("class","imgdiv")
               cartproductdiv.append(imgdiv)
    
            let productimg=document.createElement("img")
            productimg.src=element.product.images[0]
            productimg.setAttribute("class","cart_productimg")
            imgdiv.append(productimg)
    
    
    
            let details=document.createElement("div")
            details.setAttribute("class","productdel")
            cartproductdiv.append(details)
            
            
    
            let productname=document.createElement("p")
            productname.setAttribute("class","productname")
            productname.innerText=element.product.name
            details.append(productname)

            let priceselectdiv=document.createElement("div")
            priceselectdiv.setAttribute("class","priceselectdiv");
            details.append(priceselectdiv)




            let selectqty=document.createElement("select")
            selectqty.setAttribute("class","selectqty")
            
            let option1=document.createElement("option")
            option1.innerText=1;
            
            let option2=document.createElement("option")
            option2.innerText=2

            let option3=document.createElement("option")
            option3.innerText=3;

            let option4=document.createElement("option")
            option4.innerText=4;

            let option5=document.createElement("option")
            option5.innerText=5;

            
            selectqty.add(option1)
            selectqty.add(option2)
            selectqty.add(option3)
            selectqty.add(option4)
            selectqty.add(option5)
            priceselectdiv.append(selectqty)

            let product_price =document.createElement("p")
            product_price.setAttribute("class","price")
            product_price.innerText=`RS.${element.product.price}/Per item`
            priceselectdiv.append(product_price)

            let addfavdiv= document.createElement("div")
            addfavdiv.setAttribute("class","addfavdiv")
            addfavdiv.innerHTML = `<i class="fa-regular fa-heart" style="color: #3e75fd;" ></i>`
            priceselectdiv.append(addfavdiv)

            let remove=document.createElement("button")
            remove.setAttribute("class","removeproduct")
            remove.innerText="Remove"
            priceselectdiv.append(remove)

        
        

            





            

            
        });








    })
})

