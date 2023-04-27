const deleteicon = document.querySelector(".deleteicon")
const products =  document.querySelector(".products")
const show = document.querySelector(".allproducts")
const deleteBtn =  document.querySelector(".error")
        
window.addEventListener("DOMContentLoaded",()=>fetchDatas())

function fetchDatas(){
    fetch("http://localhost:3000/wishlist?_expand=product")
    .then(res => res.json())
    .then(datas=>{
        console.log(datas);
        datas.forEach(apiData => {
            let pro = apiData.product
            let name = pro.name
            let model_Name = pro.model_Name
            let price = pro.price
            let images = pro.images[0]

            let div = document.createElement("div")
            div.setAttribute("class","products")
            let namePtag = document.createElement("p")
            namePtag.innerText = name
            let model_NamePtag = document.createElement("p")
            model_NamePtag.innerText = model_Name
            let priceptag = document.createElement("p")
            priceptag.innerText = price
            let imgTag = document.createElement("img")
            imgTag.setAttribute("class","fetchImage")
            imgTag.src = images
            let divDelete = document.createElement("div")
            divDelete.setAttribute("class","divDelete")
            let deleteimage = document.createElement("img")
            deleteimage.setAttribute("id",apiData.id)
            deleteimage.src = "../WishlistsCode/images/Delete.png"

            div.append(imgTag)
            div.append(divDelete)
            divDelete.append(deleteimage)
            div.append(namePtag)
            div.append(model_NamePtag)
            div.append(priceptag)
            show.append(div)
            deleteFunction(deleteimage)
        });
    })
}

function deleteFunction(deleteimage){
    deleteimage.addEventListener("click",(e)=>{
        let deletetarget = e.target.id;
        fetch("http://localhost:3000/wishlist?_expand=productId/"+deletetarget, {
        method: 'DELETE',
        
        headers: { 
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    alerts(deleteBtn)
        // window.location.reload()
})
}

function alerts(deleteBtn){
    deleteBtn.classList.add("active")
    setTimeout(() => {
        deleteBtn.classList.remove("active")
    }, 1000);
}