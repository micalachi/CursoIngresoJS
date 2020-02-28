/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;
    var descuento;
    
    importe=document.getElementById("importe").value;
    
    importe=parseInt(importe);

    resultado=parseInt(resultado);
    
    resultado=importe*25/100;

    descuento=importe-resultado;

    document.getElementById("resultado").value=descuento
    
}
