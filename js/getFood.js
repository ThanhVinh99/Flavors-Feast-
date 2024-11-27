getAll(urlFood, getAllDish);
let foods ; // toan cuc
function getAllDish(data,search) {
    foods = data;
    let dataSearch ;

    if(search){
        dataSearch  = data.filter(a => a.name.toLowerCase().includes(search.toLowerCase()));
    }else{
        dataSearch = data ;
    }
    const setDish = document.querySelector(".dish");
    setDish.innerHTML = "";
    dataSearch.sort((a,b) => a.id - b.id).forEach(element => {
        const item = document.createElement("div");
        item.classList.add("col");

        item.innerHTML = `<div class="card dish-table">
                                    <div class="text d-flex justify-content-around mt-2 mb-2">
                                        <span>${element.id}</span>
                                        <b>${element.name}</b>
                                        <div class="d-flex justify-content-center align-items-center gap-2">
                                          <div onclick=getAllFix(${element.id}) data-bs-toggle="modal" data-bs-target="#exampleModalsearch"><i class="fa-solid fa-pen-to-square"></i></div>
                                          <div class="text-danger" data-bs-toggle="modal" data-bs-target="#exampleeraser">
                                          <i  onclick=getAllEraser(${element.id}) class="fa-solid fa-eraser"></i>
                                          </div>
                                        </div>
                                    </div>
                                    <div class="card_img">
                                        <img src="${element.img}" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <p class="d-flex justify-content-center align-items-center mb-1"><b>$${element.price}</b></p>
                                        <div class="d-flex justify-content-center align-items-center gap-1">
                                            <span><i class="fa-solid fa-minus"></i></span>
                                            <button class="quanity">0</button>
                                            <span><i class="fa-solid fa-plus"></i></span>
                                        </div>
                                    </div>
                                </div>`;
                                const minus = item.querySelector(".fa-minus");
                                const quanity = item.querySelector(".quanity");
                                const plus = item.querySelector(".fa-plus");
                                minus.addEventListener("click", () => {
                                    if(parseInt(quanity.innerText) > 0) {
                                        quanity.innerText = parseInt(quanity.innerText) - 1;
                                    }
                                });
                                plus.addEventListener("click", () => {
                                    quanity.innerText = parseInt(quanity.innerText) + 1;
                                });
                                setDish.appendChild(item);
    });
  
};
getAll(urlFood, getAllEraser);
let idfood;
function getAllEraser(id) {
    idfood = id;
};
const eraser = document.getElementById("eraser");
eraser.addEventListener("click", () => {
    deleted(urlFood, idfood);
});

const timkiem = document.querySelector(".search-food");

timkiem.addEventListener("change", () => {
    getAllDish(foods,timkiem.value);
});
