let sectionEl = document.getElementById("section");
let serachInputEl = document.getElementById("searchInput");

let mobileImage = "https://source.unsplash.com/83ypHTv6J2M/";
let electronicImage = "https://source.unsplash.com/0rUp9vgyEYo";
let furnitureImage = "https://source.unsplash.com/IH7wPsjwomc";
let mabileName = "Mobile"
let electronicName = "Electronics"
let furnitureName = "Furniture"
let mobileRate = "14000/-INR"
let electronicRate = "20000/-INR"
let furnitureRate = "13000/-INR"



const items = (a,b,c,val) =>{

    for (let i = 0; i <= 10; i++){

        let anchorEl = document.createElement("a")
        let divEl = document.createElement("div");
        divEl.classList.add("item-box")
        let imgEl = document.createElement("img");
        imgEl.setAttribute("src", a);
        imgEl.classList.add("item-img")
        divEl.appendChild(imgEl);
        let h4El = document.createElement("h4")
        h4El.textContent = b
        h4El.classList.add("mt-3")
        divEl.appendChild(h4El);
        let pEl = document.createElement("p")
        pEl.textContent = c
        divEl.appendChild(pEl)
        anchorEl.appendChild(divEl)
        sectionEl.appendChild(anchorEl);
        
        }
      
   
}

items(mobileImage, mabileName, mobileRate);
items(electronicImage,electronicName,electronicRate);
items(furnitureImage,furnitureName,furnitureRate);