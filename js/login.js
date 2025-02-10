const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
debugger
const emailToPass = document.getElementById('emailToUse').value;
const passwordInput = document.getElementById('pass').value;


registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Example: Log values when user types
emailToPass.addEventListener("input", () => {
    console.log("Email:", emailToPass);
});

passwordInput.addEventListener("input", () => {
    console.log("Password:", passwordInput);
});