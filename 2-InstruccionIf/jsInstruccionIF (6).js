function mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById("edad").value;

parseInt(edad);

if(edad>=13 && edad<=17)
{
    alert("Usted es adolescente");
}
else if(edad<13)
{
    alert("usted es niño");
}
else
{ 
    alert("Usted es mayor de edad");    
}



}//FIN DE LA FUNCIÓN