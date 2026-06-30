const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("regEmail").value;
        const password = document.getElementById("regPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if(name==="" || email==="" || password==="" || confirmPassword===""){
            alert("Please fill all fields.");
            return;
        }

        if(password !== confirmPassword){
            alert("Passwords do not match.");
            return;
        }

        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);
        localStorage.setItem("userPassword", password);

        alert("Registration Successful!");

        window.location.href="Login.html";

    });

}


// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        const email=document.getElementById("loginEmail").value;
        const password=document.getElementById("loginPassword").value;

        const savedEmail=localStorage.getItem("userEmail");
        const savedPassword=localStorage.getItem("userPassword");

        if(email===savedEmail && password===savedPassword){

            alert("Login Successful!");

            window.location.href="index.html";

        }else{

            alert("Invalid Email or Password!");

        }

    });

}