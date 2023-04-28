const deleteicon = document.querySelector(".deleteicon")
const products = document.querySelector(".products")
const show = document.querySelector(".allproducts")
const deleteBtn = document.querySelector(".error")
const search = document.querySelector(".input")


window.addEventListener("DOMContentLoaded", () => fetchDatas())

function fetchDatas() {
    fetch("http://localhost:3000/wishlist?_expand=product")
        .then(res => res.json())
        .then(datas => {
            datas.forEach(apiData => {
                let brand = apiData.product.Brand
                // console.log(brand);
                let pro = apiData.product
                let name = pro.name
                let model_Name = pro.model_Name
                let price = pro.price
                let images = pro.images[0]

                let div = document.createElement("div")
                div.setAttribute("class", "products")
                let namePtag = document.createElement("p")
                namePtag.setAttribute("class", "name")
                namePtag.innerText = name
                let model_NamePtag = document.createElement("p")
                model_NamePtag.setAttribute("class", "modelName")
                model_NamePtag.innerText = model_Name
                let priceptag = document.createElement("p")
                priceptag.setAttribute("class", "price")
                priceptag.innerText = price
                let imgTag = document.createElement("img")
                imgTag.setAttribute("class", "fetchImage")
                imgTag.src = images
                let divDelete = document.createElement("div")
                divDelete.setAttribute("class", "divDelete")
                let deleteimage = document.createElement("img")
                deleteimage.setAttribute("id", apiData.id)
                deleteimage.src = "../WishlistsCode/images/Delete.png"
                let brandPtag = document.createElement("p")
                brandPtag.setAttribute("class","searchName")
                brandPtag.innerText = brand

                div.append(imgTag)
                div.append(divDelete)
                divDelete.append(deleteimage)
                div.append(namePtag)
                div.append(model_NamePtag)
                div.append(priceptag)
                show.append(div)
                deleteFunction(deleteimage)


    search.addEventListener("keyup",()=>{
        if(namePtag.innerText.toUpperCase().indexOf(search.value.toUpperCase()) != -1){
            console.log(namePtag.parentElement)
            namePtag.parentElement.style.visibility = "visible"
        }
        else{
            namePtag.parentElement.style.visibility = "hidden"
        }

    })

            });
        })
}

function deleteFunction(deleteimage) {
    deleteimage.addEventListener("click", (e) => {
        let deletetarget = e.target.id;

        fetch("http://localhost:3000/wishlist/" + deletetarget, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        alerts(deleteBtn)
    })
}

function alerts(deleteBtn) {
    deleteBtn.classList.add("active")
    setTimeout(() => {
        deleteBtn.classList.remove("active")
    }, 2000);
}

//search function

