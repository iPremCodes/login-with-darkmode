function passwordToggle() {
    const passwordInput = document.getElementById("passwordInput");
    const eyeClose = document.querySelector(".eyeClose");
    const eyeOpen = document.querySelector(".eyeOpen");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeClose.style.display = "block";
        eyeOpen.style.display = "none";
    } else {
        passwordInput.type = "password";
        eyeClose.style.display = "none";
        eyeOpen.style.display = "block";

    }
  }