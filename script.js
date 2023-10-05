document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add code to handle form submission (e.g., sending data to server)
});
function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if the email and password match (you can replace this with your own validation logic)
    if (email === "example@email.com" && password === "password123") {
        alert("Login successful!");
        return true;
    } else {
        alert("Invalid email or password. Please try again.");
        return false;
    }
}

