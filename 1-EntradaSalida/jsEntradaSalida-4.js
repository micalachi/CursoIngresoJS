8/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
var nombre;
var edad;

nombre= prompt ("ingrese su nombre:"); 

document.getElementById("elNombre").value=nombre;

}