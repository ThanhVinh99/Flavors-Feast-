getAll(urlTable, getAllTable);

function getAllTable(data) {
    console.log(data);
    const setTable = document.querySelector(".settable");
    const choose_table = document.getElementById("choose-table");
    const pay_bill = document.getElementById("pay-bill");
    data.forEach(element => {
        if(element.status) {
            choose_table.innerHTML += `<option value="${element.id}"> Table ${element.id} </option>`;
            pay_bill.innerHTML += `<option value="${element.id}"> Table ${element.id} </option>`;
        };
        const img = element.status ? "../img/img.1.png" : "../img/img.2.png" ;
        const add = element.status ? `<button onclick=getByAdd(${element.id})  class="btn btn-success text-nowrap"><i class="fa-solid fa-plus"></i> ADD</button>
                                         <button onclick=getByCart(${element.id}) class="btn btn-danger text-nowrap" data-bs-toggle="modal" data-bs-target="#cart"><i class="fa-solid fa-cart-shopping"></i> CART</button>` :
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
let idcartpaybill; // toàn cục

function getByCart(id) {
    idcartpaybill = id;
    const cart_table = document.getElementById("carrt-table");
    const cartFoot = document.querySelector(".cart-foot");
    cartFoot.innerHTML = "";
    cart_table.innerHTML = "";
    const bill = orders.find(a => a.id == id);
    let total = 0;
   bill.items.forEach((f,i) => {
       const food = foods.find(a => a.id == f.idFood);
       cart_table.innerHTML += `
                   <tr>
                        <th>${i + 1}</th>
                        <td><img src=${food.img} alt=""></td>
                        <td>${food.name}</td>
                        <td >${f.quanity}</td>
                        <td >$${food.price}</td>
                    </tr>
       `;
       total += parseInt(food.price) * parseInt(f.quanity);
   });
   cartFoot.innerHTML += `
                    <th colspan="4">Total</th>
                    <th>$${total}</th>
                    `;
    
};



const bookingTable = document.getElementById("booking-table");

bookingTable.addEventListener("submit", function(e) {
    e.preventDefault();
    const customerName = document.getElementById("name").value;
    const quantity = document.getElementById("quantity").value;
    
    const updatTable = { id: idUpdate , nameCustomer: customerName , quantity :quantity , status : true};

    edit(urlTable,updatTable);
});

