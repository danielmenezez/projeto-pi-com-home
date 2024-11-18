document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const city = document.getElementById("city");
        const address = document.getElementById("address");
        const fileInput = document.getElementById("fileInput");

        clearErrors();

        let isValid = true;

        if (name.value.trim() === "") {
            showError(name, "Por favor, insira seu nome completo.");
            isValid = false;
        }

        if (!validateEmail(email.value)) {
            showError(email, "Por favor, insira um email válido.");
            isValid = false;
        }

        if (!validatePhone(phone.value)) {
            showError(phone, "Por favor, insira um número de telefone válido.");
            isValid = false;
        }

        if (city.value.trim() === "") {
            showError(city, "Por favor, insira sua cidade.");
            isValid = false;
        }

        if (address.value.trim() === "") {
            showError(address, "Por favor, insira seu endereço.");
            isValid = false;
        }

        if (fileInput.files.length === 0) {
            showError(fileInput, "Por favor, envie um documento.");
            isValid = false;
        }

        if (isValid) {
            alert("Cadastro realizado com sucesso!");
            form.submit(); 
        }
    });

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validatePhone(phone) {
        const regex = /^\d{10,11}$/;
        return regex.test(phone.replace(/\D/g, ""));
    }

    function showError(input, message) {
        const error = document.createElement("div");
        error.className = "error-message";
        error.textContent = message;
        input.parentElement.appendChild(error);
        input.classList.add("error-border");
    }

    function clearErrors() {
        const errors = document.querySelectorAll(".error-message");
        errors.forEach((error) => error.remove());

        const inputs = document.querySelectorAll(".error-border");
        inputs.forEach((input) => input.classList.remove("error-border"));
    }
});
