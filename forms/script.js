document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Here you can perform validation if needed

    // For demonstration purposes, simply display the submitted data
    var statusMessage = document.getElementById("statusMessage");
    statusMessage.innerHTML = "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;
});
