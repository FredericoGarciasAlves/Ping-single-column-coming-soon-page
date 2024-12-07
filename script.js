document.addEventListener("DOMContentLoaded", function () {
    const formMain = document.getElementById("form-main");
    const email = document.getElementById("email");
    formMain.setAttribute("novalidate", true);
    formMain.addEventListener("submit", function (event) {
        if (!erroEmail()) {
            event.preventDefault();
        }
        let dados = new FormData(formMain);
        for (let [chave, valor] of dados.entries()) {
            console.log(`${chave}: ${valor}`);
        }
    });
    const erroMessage = document.createElement("p");
    erroMessage.setAttribute("class", "erro-message");

    function erroEmail() {
        let fieldValid = true;
        if (!email.value) {
            erroMessage.remove();
            erroMessage.innerText = "please enter your email address";
            formMain.insertAdjacentElement("afterend", erroMessage);
            fieldValid = false;
        }
        if (email.value && !email.value.includes("@")) {
            erroMessage.remove();
            erroMessage.innerText = "Please provide a valid email address";
            formMain.insertAdjacentElement("afterend", erroMessage);
            fieldValid = false;
        }

        const mediaQuerye = window.matchMedia("(max-width: 375px)");
        if (mediaQuerye.matches) {
            if (erroMessage.parentNode) {
                erroMessage.remove();
            }
            email.insertAdjacentElement("afterend", erroMessage);
        }
        return fieldValid;
    }
});
