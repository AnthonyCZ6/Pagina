let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let btnlogin = document.getElementById("btnlogin");
let mensage = document.getElementById("mensage");

function verificarCampos(){
    if(email === "" || password === ""){
        mensage.innerHTML = "Por favor, complete todos los campos.";
        mensage.style.color = "red";
    }else{
        mensage.innerHTML = "Campos válidos.";
        mensage.style.color = "blue";
    }
}

btnlogin.addEventListener("click", verificarCampos);