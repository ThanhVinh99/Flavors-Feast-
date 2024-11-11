const icon = document.querySelector(".icon");
const menu = document.querySelector(".menu");
const Item = document.querySelectorAll(".item");
const listTilte = document.querySelectorAll(".menu li");
const listBox = document.querySelectorAll(".container .box")
icon.addEventListener("click", () => {
    Item.forEach(item => item.classList.toggle("hidden"));
    menu.classList.toggle("menu");
});
listTilte.forEach((e, i) => {
    e.addEventListener("click", () => {
        listBox.forEach(box => box.style.display = "none");
        listBox[i].style.display ="block";
        listTilte.forEach(item => {
            item.style.background = "rgb(235, 59, 117)";
            item.style.color = "white";
        });
        e.style.background = "white";
        e.style.color = "black";
    });
});