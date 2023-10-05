document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    
});
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    
    if (email === "example@email.com" && password === "password123") {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid email or password. Please try again.");
        return false;
    }
}

