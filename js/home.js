const icon = document.querySelector(".icon");
const menu = document.querySelector(".menu");
const Item = document.querySelectorAll(".item");
const listTilte = document.querySelectorAll(".menu li");
const listBox = document.querySelectorAll(".container .box");

icon.addEventListener("click", () => {
    Item.forEach(item => item.classList.toggle("hidden"));
    menu.classList.toggle("menu");
});
listTilte.forEach((e, i) => {
    e.addEventListener("click", () => {
        listBox.forEach(box => box.style.display = "none");
        listBox[i].style.display = "block";
        listTilte.forEach(item => {
            item.style.background = "rgb(235, 59, 117)";
            item.style.color = "white";
        });
        e.style.background = "white";
        e.style.color = "black";
        localStorage.setItem("key", i);
    });
});

const profile = document.querySelector(".profile");
const ul = document.querySelector(".profile ul");

profile.addEventListener("click", () => {
    ul.classList.toggle("hidden");
});
function getByAdd(id) {
    listBox[1].style.display = "none";
    listBox[2].style.display = "block";
    listTilte[1].style.background = "rgb(235, 59, 117)";
    listTilte[1].style.color = "white";
    listTilte[2].style.background = "white";
    listTilte[2].style.color = "black";
    const choose_table = document.getElementById("choose-table");
    choose_table.value = id;

}

const pay_table = document.getElementById("pay-bill");

pay_table.addEventListener("change", getPayBill);

function getPayBill() {
    const pay_bill = document.getElementById("pay_bill");
    const total_pay = document.getElementById("total_pay");
    pay_bill.innerHTML = "";
    total_pay.innerHTML = "";
    const bill = orders.find(a => a.id == pay_table.value);
    let total = 0;
    bill.items.forEach((f, i) => {
        const food = foods.find(a => a.id == f.idFood);
        pay_bill.innerHTML += `
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
    total_pay.innerHTML += `
                    <th colspan="4">Total</th>
                    <th>$${total}</th>
                    `;
}

const deleteed = document.getElementById("delete");

deleteed.addEventListener("click", () => {
    const pay_table = document.getElementById("pay-bill");
    deleted(urlOrder, pay_table.value);
    const table = {
        "id": pay_table.value,
        "nameCustomer": "",
        "quantity": "",
        "status": false
    }
    edit(urlTable, table);
});

const cartPaybill = document.getElementById("cart-paybill");
cartPaybill.addEventListener("click", () => {

    listBox[1].style.display = "none";
    listBox[3].style.display = "block";
    listTilte[1].style.background = "rgb(235, 59, 117)";
    listTilte[1].style.color = "white";
    listTilte[3].style.background = "white";
    listTilte[3].style.color = "black";
    const choose_table = document.getElementById("pay-bill");
    choose_table.value = idcartpaybill;
    getPayBill();
});

const signOut = document.getElementById("signout");
console.log(signOut);

signOut.addEventListener("click", () => {

    window.location.href = "signup.html";
});
const login = document.getElementById("login");
login.addEventListener("click", () => {
    window.location.href = "login.html";
});


function getlocal(index) {

    listBox[index].style.display = "block";
    listTilte[index].style.background = "white";
    listTilte[index].style.color = "black";

}

const local = JSON.parse(localStorage.getItem("key"));

if (local) {
    getlocal(local)
}
