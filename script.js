let initial_password = document.querySelector("#password")
let confirm_password = document.querySelector("#confirm-password")


let matching = document.querySelector(".matching")


if (initial_password.textContent !== "" && initial_password.textContent === confirm_password.textContent) {
    matching.textContent = "Passwords Match!"
}
else {
    matching.textContent = "Passwords Do Not Match";
}