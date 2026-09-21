// ===============================
// Digital Journal - Login Page JS
// ===============================

// Buttons
const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

// Forms
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

// Create a message element automatically
const message = document.createElement("p");
message.style.textAlign = "center";
message.style.fontWeight = "600";
message.style.marginTop = "20px";
loginForm.after(message);

// ------------------------------
// Switch to Login Form
// ------------------------------

loginBtn.addEventListener("click", () => {

    loginForm.style.display = "flex";
    registerForm.style.display = "none";

    loginBtn.classList.add("active");
    registerBtn.classList.remove("active");

    message.textContent = "";

});

// ------------------------------
// Switch to Register Form
// ------------------------------

registerBtn.addEventListener("click", () => {

    loginForm.style.display = "none";
    registerForm.style.display = "flex";

    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");

    message.textContent = "";

});

// ------------------------------
// Login
// ------------------------------

loginForm.addEventListener("submit", function(event){

    event.preventDefault();

    const button = loginForm.querySelector(".submit-btn");

    button.disabled = true;
    button.innerHTML = "Logging in...";

    setTimeout(() => {

        message.style.color = "green";
        message.innerHTML = "✔ Login Successful! Redirecting...";

        button.disabled = false;
        button.innerHTML = "Login";

        setTimeout(() => {

            window.location.href = "dashboard.html";

        },1500);

    },1800);

});

// ------------------------------
// Register
// ------------------------------

registerForm.addEventListener("submit", function(event){

    event.preventDefault();

    const password =
        registerForm.querySelectorAll("input")[2].value;

    const confirmPassword =
        registerForm.querySelectorAll("input")[3].value;

    if(password !== confirmPassword){

        message.style.color = "red";
        message.innerHTML = "❌ Passwords do not match.";

        return;
    }

    const button = registerForm.querySelector(".submit-btn");

    button.disabled = true;
    button.innerHTML = "Creating Account...";

    setTimeout(() => {

        message.style.color = "green";
        message.innerHTML = "✔ Account Created Successfully!";

        button.disabled = false;
        button.innerHTML = "Create Account";

        registerForm.reset();

        setTimeout(() => {

            registerForm.style.display = "none";
            loginForm.style.display = "flex";

            registerBtn.classList.remove("active");
            loginBtn.classList.add("active");

            message.innerHTML = "";

        },1800);

    },1800);

});