const  signUp = document.getElementById("signUp");
signUp.addEventListener("submit", function() {
    const userName = document.getElementById("Usename").value;
    const email = document.getElementById("email").value;
    const passWord = document.getElementById("password").value;
    const confirmpassword = document.getElementById("confirmpassword").value;
    if (passWord===confirmpassword) {
        const signupUpdate = {
            name: userName,
            email: email,
            pass: passWord,
            avt: "../img/boy.png"
        }
        add(urlAccounts,signupUpdate );
    }else {
        alert("xác thực lại mật khẩu");  
    };
    
});
