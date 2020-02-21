function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var flag
	var respuesta='si';

	do
	{
		numero = parseInt(prompt("Ingrese un numero:"));
		while (isNaN(numero))
		{
		numero = parseInt(prompt("Eso no es un numero. Ingrese un numero:"));
		}
		
		// me fijo el signo del numero
		if (numero>= 0) {
		// aca hago lo que tengo que hacer con los positivos

		  positivo = positivo + numero;
		}

	else {
		// aca hago lo que tengo que hacer con los negativos
		negativo = negativo * numero;
		flag = 1;

	}


		respuesta = prompt ("¿Quiere ingresar otro numero?");
	} while (respuesta =='s');

	if ( flag == 0){
		negativo =0;

	}
	


	 document.getElementById('suma').value=positivo;
	 document.getElementById('producto').value=negativo;
		
		

}//FIN DE LA FUNCIÓN