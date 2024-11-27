let orders ;
getAll(urlOrder,  getOrders);

function getOrders (data) {
    orders = data ;
}


const orderpaybill = document.querySelector(".order-paybill");
orderpaybill.addEventListener("click", () => {
    const choose_table = document.getElementById("choose-table").value;
    const bill = orders.find(a => a.id == choose_table );
    const items = bill ? bill.items : [];
    const dishTable = document.querySelectorAll(".dish-table");
    
    dishTable.forEach(a => {
      const quanity =    a.querySelector(".quanity");
      if(parseInt(quanity.innerText) > 0) {

       const idFood  = a.querySelector("span").innerText;
       const  index = items.findIndex(a => a.idFood == idFood);
       if(index >= 0) {
         items[index].quanity += parseInt(quanity.innerText) ;
       }else{
        const food = {idFood : idFood , quanity : parseInt(quanity.innerText) };
         items.push(food);
       }     
      }
    });
    const order = {
         id : choose_table,
         items : items
    }
    if(bill) {
        edit(urlOrder,order)
    }else {
        add(urlOrder,order);
    }
});


