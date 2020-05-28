//Largo de un array, igul funciona con strings
var frutas = ["Manzana", "Banana"];

console.log(frutas.length); 
// 2
//Funciones, if, igualdades, mayusculas y minpusculas
function info(cadena) {

        var resultado = "La cadena \""+cadena+"\" ";
      
        // Comprobar mayúsculas y minúsculas
        if(cadena == cadena.toUpperCase()) {
          resultado += " está formada sólo por mayúsculas";
        }
        else if(cadena == cadena.toLowerCase()) {
          resultado += " está formada sólo por minúsculas";
        }
        else {
          resultado += " está formada por mayúsculas y minúsculas";
        }
      
        return resultado;
      }
//Sentencia for funciones y declaraciones
function printCualities(array) {
        var txtPC="";
        for (let i = 0; i < array.length ; i++) {
                txtPC+=array[i].brand+"    "+array[i].type+"    "+array[i].content+"    "+array[i].price+"<br>";
//Se guarda en txtPC como cadena de carácteres
                
        }
        document.getElementById("demo").innerHTML = txtPC;
        
}
//JSON
var array = [];
var json = JSON.stringify(array); //de JS a JSON
array = JSON.parse(json); //de JSON a JS
//Fechas 
var hoy = new Date();   //Aquí obtienes la fecha del momento exacto en el que lo pides
var milisegundos=hoy.getTime(); //Lo que hace esta función es que lo convierte a milisegundos 
var principioAño=new Date(2020, 0, 1, 0, 0, 0);  //Pides fecha específica
var resta=(milisegundos-principioAño.getTime()); ////haces una resta de fechas basándote en los milisegundos
//Métodos para arrays
var x;
x.toString();
x.join(" + ");
x.pop();
x.push("y");
x.shift();
x.unshift();
x.lenght();
x.splice(2,0,5,8);
//Encontrar medinate una función el valor más alto en cada fila de una matriz, para esto es mejor que esté conformada por arrays
//Recordar que los arrays cuentan el 0 como el primer espacio
var fila1 = [2,8,8,7];
var fila2 = [8,4,7,2];
var valoresMaximos = [];
 valoresMaximos[0] = Math.max(fila1[0],fila1[1],fila1[2],fila1[3]);
 valoresMaximos[1] = Math.max(fila2[0],fila2[1],fila2[2],fila2[3]);
//Esta función devuelve un número positivo si elem1 es mayor que elem2, con lo cual elem1 se colocará detrás.
// Si escribimos return elem2 – elem1 se ordenará de mayor a menor.
function ejemplo() {

        var miArrayOriginal = [1, 4, 2, 9, 11, 44, 111, 7, 4];
        var miArray = [1, 4, 2, 9, 11, 44, 111, 7, 4];
        var msg ='El array original es: ' + miArrayOriginal +'\n';
        msg = msg + 'Ordenado de mayor a menor es ' + miArray.sort(deMayorAMenor)+'\n';
        msg = msg + 'Ordenado de menor a mayor es ' + miArray.sort(deMenorAMayor)+'\n';
        alert(msg);
        }
        function deMenorAMayor(elem1, elem2) {return elem1-elem2;}
        function deMayorAMenor(elem1, elem2) {return elem2-elem1;}

//Clases, extensiones y cómo crear objetos con ellas
class CellPhone {
        constructor(brand) {
          this.cellname = brand;
        }
        present() {
          return 'I have a ' + this.cellname;
        }
      }
      
      class Model extends CellPhone {
        constructor(brand, mod) {
          super(brand);
          this.model = mod;
        }
        show() {
          return this.present() + ', it is a ' + this.model;
        }
      }
      
      mycell = new Model("Samsung", "Galaxy s20 Ultra");
//Sumar arrays con for y funciones
var arr1=[1, 2, 3, 4];
var arr2=[2, 3, 4, 5];
var newArray=[0, 0, 0, 0];
function myFunction(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
  newArray[i]= arr1[i]+arr2[i];
  };
};
myFunction(arr1, arr2);

//Combinar arrays intercalándolos, no uniendolos
var array1 = ["Luis", "José", "Alejandro", "Raul", "Carlos"];
var array2 = ["Juan", "Pablo", "Renan", "Oscar", "Eduardo"];
var nuevoarray = [];
function intercalararrays(){
        for (let i = 0; i < array1.length; i++) {
                nuevoarray[i] += array1[i];
                nuevoarray[i] += array2[i];
                
        }
}
//Buscar una string dentro d eotro string
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate");    //Esto te devuelve el indice donde está localizada la palabra

//ejercicos de la hoja
var ultimo = frutas.pop();  // Elimina "Naranja" del final
// ["Manzana", "Banana"]

var nuevaLongitud = frutas.unshift('Fresa');  // Añade "Fresa" al inicio
// ["Fresa" ,"Manzana", "Banana"]

var primero = frutas.shift();  // Elimina "Fresa" al inicio
// ["Manzana", "Banana"]

var elementoEliminado = frutas.splice(pos, 1);
// ["Manzana", "Fresa"]

//
//
var vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria'];

var pos = 1, hastaPos = 2;

var elementosEliminados = vegetales.splice(pos, hastaPos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
// ["Repollo", "Zanahoria"] ==> Lo que actualmente tiene "vegetales" 
//
//
var copiaArray = vegetales.slice();
// ["Repollo", "Zanahoria"]; ==> Copiado en "copiaArray"

