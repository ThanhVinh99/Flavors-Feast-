//thêm món mới
const loGo = document.getElementById("logo");
const images = document.getElementById("imageUpload");
let file; // Declare `file` globally so it can be accessed later

images.addEventListener("change", (event) => {
    file = event.target.files[0]; // Assign the file to the global variable
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            loGo.src = e.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        alert('Chưa có ảnh nào được chọn');
    }
});

let idEdit;

const saveChange = document.getElementById("savechange");

saveChange.addEventListener("click", async () => {
    const name = document.getElementById("foodName").value;
    const price = document.getElementById("price").value;
    let id = 1;
    console.log(idEdit);
     if(!idEdit) {
        foods.map(f => {
            if(parseInt(f.id) == id){
                id++;
            }else {
                return;
            }
        })
     }
  let idNew = idEdit ? idEdit : JSON.stringify(id);

    if (file) {
        try {
            const img = await uploadImageToCloudinary(file); // Wait for the image upload
            const food = {
               id: idNew,
                name,
                price,
                img: img.url // Assuming the response contains a `url` property
            };
           if(idEdit){
             edit(urlFood, food);
           }else {
             add(urlFood, food); // Ensure `urlFood` and `add()` are defined
           }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload image. Please try again.');
        }
    } else {
        alert('No file selected for upload.');
    }
});
// sửa món
function getAllFix(id) {
    idEdit = id;
    const food = foods.find( a => a.id == id);
    if(food) {
        const foodName = document.getElementById("foodName");
        const price = document.getElementById("price");
        const image = document.getElementById("logo");
        foodName.value = food.name ;
        price.value = food.price;
        image.src = food.img;
        const textfix = document.querySelector(".title_food");
        const update = document.getElementById("savechange");
        console.log(textfix);
        
        textfix.innerText = "Sửa Món Ăn";
        update.innerText = "Upload";
    }
    
};

const them = document.getElementById("them");
them.addEventListener("click", () => {
     idEdit = null;
    const foodName = document.getElementById("foodName");
        const price = document.getElementById("price");
        const image = document.getElementById("logo");
        foodName.value = "";
        price.value = "";
        image.src = "../img/logo.png";
        const textfix = document.querySelector(".title_food");
        const update = document.getElementById("savechange");
        textfix.innerText = "Thêm món ăn";
        update.innerText = "Save changes";

})
