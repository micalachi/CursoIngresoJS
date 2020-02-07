/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{ var numero1;
  var numero2;
  var respuesta;

  numero1=document.getElementById ("numeroUno").value;
  numero1 = parseInt(numero1);

  numero2=document.getElementById ("numeroDos").value;
  numero2 = parseInt(numero2);

  respuesta= numero1 + numero2;

  alert ("La suma es " + respuesta);

}

