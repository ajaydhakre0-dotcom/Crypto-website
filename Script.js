
// Crypto Shiksha Hindi
// Registration Form Validation

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    if (!form) {
        console.error("Registration form nahi mila.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        handleRegistration();
    });

    // Existing HTML button ke liye
    const payButton = form.querySelector('button[type="button"]');

    if (payButton) {
        payButton.removeAttribute("onclick");
        payButton.addEventListener("click", handleRegistration);
    }
});

function handleRegistration() {
    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();
    const whatsapp = document.getElementById("whatsapp").value.trim();

    if (!name  !mobile  !email || !whatsapp) {
        alert("Kripya sabhi details bhariye.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Sahi 10 digit mobile number bhariye.");
        return;
    }

    if (!/^[0-9]{10}$/.test(whatsapp)) {
        alert("Sahi 10 digit WhatsApp number bhariye.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Sahi email address bhariye.");
        return;
    }

    alert(
        "Form validation successful!\n\n" +
        "Course: Crypto Shiksha Hindi\n" +
        "Fee: ₹199\n\n" +
        "Registration aur payment system abhi connect karna baaki hai."
    );

    console.log("Form validation successful.");
}
