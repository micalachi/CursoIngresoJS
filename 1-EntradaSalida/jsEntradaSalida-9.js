/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{var sueldo;
    var aumento;
    var mostrarAumento;
  
    sueldo=document.getElementById ("sueldo").value;
    sueldo = parseInt(sueldo);
  
    aumento=document.getElementById ("resultado").value;
    aumento = parseInt(resultado);
  
    respuesta= sueldo + aumento;
  
    alert ("La suma es " + respuesta);var sueldo;
  var aumento;
  var mostrarAumento;

  sueldo=document.getElementById ("sueldo").value;
  sueldo = parseInt(sueldo);

  aumeto=document.getElementById ("mostraraumento").value;
  aumento = parseInt(mostraraumento);

  resultado= sueldo + aumento;

  alert ("La suma es " + mostraraumento);

	
}
