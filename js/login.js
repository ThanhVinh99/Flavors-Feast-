
const loGin = document.getElementById("login");
let accounts;
getAll(urlAccounts, getAccounts);
function getAccounts(data) {
    accounts = data;
}
loGin.addEventListener("submit", (e) => {
    e.preventDefault();
    const usename = document.getElementById("usename").value;
    const password = document.getElementById("password").value;
    const profile = accounts.find(a => a.name == usename && a.pass == password);
    if (profile) {
        localStorage.setItem("accounts",JSON.stringify(profile));
        window.location.href = "home.html";
    } else {
        alert("tài khoản không tồn tại");
    };

});
