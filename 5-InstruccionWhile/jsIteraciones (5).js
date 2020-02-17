function mostrar() {

    var sexo = prompt("ingrese f ó m .").toLowerCase();

    //while (sexo != f && sexo != "m") {
    while (!(sexo == 'm' || sexo == 'f')) {
        sexo = prompt("Sexo invalido. Reingrese f o m. ").toLowerCase();
    }

    document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN