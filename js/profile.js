const person = document.getElementById("person");
const textemail = document.getElementById("login");
const inputEmail = document.getElementById("inputEmail4");
const fistname = document.getElementById("fistname");
const avtperson = document.getElementById("avtperson");

const accountLogin = JSON.parse(localStorage.getItem("accounts"));

fistname.value = person.innerText = accountLogin.name;
inputEmail.value = textemail.innerText = accountLogin.email;

const avtAccount = document.getElementById("avt_account");
const formFile = document.getElementById("formFile");

const lastname1 = document.getElementById("lastname");
    const phone1 = document.getElementById("phone");
    const date1 = document.getElementById("date");
    const address1 = document.getElementById("inputAddress");
   lastname1.value = accountLogin.lastname;
   phone1.value = accountLogin.phone;
   address1.value = accountLogin.address;
   date1.value = accountLogin.date;
let file1;
formFile.addEventListener("change", (event) => {

    file1 = event.target.files[0]; // Assign the file to the global variable
    if (file1) {
        const reader = new FileReader();
        reader.onload = function (e) {
            avtAccount.src = e.target.result;
        };
        reader.readAsDataURL(file1);
    } else {
        alert('Chưa có ảnh nào được chọn');
    }
});
avtperson.src = avtAccount.src = accountLogin.img;
const submitAccount = document.getElementById("submitaccount");
submitAccount.addEventListener("click", async (e) => {
    e.preventDefault();
    const lastname = document.getElementById("lastname").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const address = document.getElementById("inputAddress").value;
    let idAccount = accountLogin.id;
    if (file1) {
            const imgAcc = await uploadImageToCloudinary(file1);
            const accountNew = {
                id : idAccount,
                name: accountLogin.name,
                email: accountLogin.email,
                pass: accountLogin.pass,
                lastname: lastname,
                phone: phone,
                date: date,
                address: address,
                img: imgAcc.url
            };
            if (idAccount) {
                localStorage.setItem("accounts",  JSON.stringify(accountNew) );
                edit(urlAccounts, accountNew);
            };
}
});
    