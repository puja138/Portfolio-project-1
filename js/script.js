// Step 1: Form ko select karo
document.getElementById("contactform").addEventListener("submit", function (e) {
    e.preventDefault(); // Form ko rukao agar invalid hai

    // Step 2: Saare input values le lo
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile-number").value.trim();
    let message = document.getElementById("message").value.trim();

    // Step 3: Empty field check
    if (name === "" || email === "" || mobile === "" || message === "") {
        alert("All fields are required.");
        return;
    }

    // Step 4: Email pattern check
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Step 5: Mobile number should be digits and 10 digits
    let mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    // Step 6: Message length check
    if (message.length < 10) {
        alert("Message should be at least 10 characters.");
        return;
    }

    // Step 7: Sab sahi hai toh success
    alert("Form submitted successfully!");

    // Optional: Form ko reset karo
    document.getElementById("contactform").reset();
});
