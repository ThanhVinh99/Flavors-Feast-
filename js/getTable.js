getAll(urlTable, getAllTable);

function getAllTable(data) {
    console.log(data);
    const setTable = document.querySelector(".settable");
    data.forEach(element => {
        const img = element.status ? "../img/img.1.png" : "../img/img.2.png" ;
        const add = element.status ? `<button class="btn btn-success text-nowrap"><i class="fa-solid fa-plus"></i> ADD</button>
                                         <button class="btn btn-danger text-nowrap" data-bs-toggle="modal" data-bs-target="#cart"><i class="fa-solid fa-cart-shopping"></i> CART</button>` :
                             `<button onclick=getById(${element.id}) data-bs-toggle="modal" data-bs-target="#booking" class="btn btn-warning"><i class="fa-solid fa-calendar-days"></i> BOOKING</button>`;

        setTable.innerHTML += `<div class="col">
                                <div class="card">
                                    <span>${element.id}</span>
                                    <div class="card_img">
                                        <img src=${img} alt="...">
                                    </div>
                                    <div class="card-body">
                                      <div class="d-flex gap-2 justify-content-center">
                                         ${add}
                                      </div>
                                    </div>
                                  </div>
                            </div>`;
    });
};
let idUpdate ; // toàn cục
function getById(id) {
    idUpdate = id ;
}

const bookingTable = document.getElementById("booking-table");

bookingTable.addEventListener("submit", function(e) {
    e.preventDefault();
    const customerName = document.getElementById("name").value;
    const quantity = document.getElementById("quantity").value;
    
    const updatTable = { id: idUpdate , nameCustomer: customerName , quantity :quantity , status : true};

    edit(urlTable,updatTable);
});



getAll(urlFood, getAllDish);

function getAllDish(e) {
    console.log(e);
    const setDish = document.querySelector(".dish");
    e.forEach(element => {
        setDish.innerHTML += `<div class="col">
                                <div class="card">
                                    <div class="text d-flex justify-content-around mt-2 mb-2">
                                        <span>${element.id}</span>
                                        <b>${element.name}</b>
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </div>
                                    <div class="card_img">
                                        <img src="${element.img}" alt="...">
                                    </div>
                                    <div class="card-body">
                                        <p class="d-flex justify-content-center align-items-center mb-1"><b>$${element.price}</b></p>
                                        <div class="d-flex justify-content-center align-items-center gap-1">
                                            <span><i class="fa-solid fa-minus"></i></span>
                                            <button>0</button>
                                            <span><i class="fa-solid fa-plus"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>`;
    });
    
};
