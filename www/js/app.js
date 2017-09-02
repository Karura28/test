var base = 5;
var altura = 7;
var area = base * altura;
console.log("el área de mi rectangulo es igual:" + area );


var pi = 3.1416;
var radio = 5;
var area = ((pi* (radio*radio)))
console.log("El área del circulo es :"  + area ); 


var base = 8.3;
var altura = 13;
var area = ((base*altura)/2);
console.log("El área del Triangulo es:"  + area);

var radio = 7;
var pi = 3.1416;
var area = ((4/3)*pi*(radio*radio*radio));
console.log("El volumen de la esfera es" +  area);



function Saludo(){
 variableGlobal = "Vanessa";
 alert("Hola"   + variableGlobal)
}
 var variableGlobal;
 Saludo();

 var nombre = "Karla";
 function saludar(){
     if (true){
         var nombre = "juan";
     }
     console.log(`Hola ${nombre}`);
 }
 function saludar10(){
    let i=0;
    for ( i; i<10; i++){
        console.log(`Hola ${nombre}`);
     }
    console.log(`El valor de i es ${i}`)
 }
 
 