const user = "MathewM"
const passw = 1234
function verificar(){
    let usuario = document.getElementById("nombre").value
    let clave = document.getElementById("clave").value
    if (user == usuario && passw == clave){
        alert("Login exitoso")
    }
    else{
        alert("Verifique los datos ingresados")
    }

}
