/** Para hacer 1 **/

//Push al frente
//Dada una matriz y un valor adicional, inserta este valor al principio de la matriz. Haz esto sin utilizar ningún método de matriz incorporado.

function pushAlFrente(array, val) {

  for (var i = array.length; i > 0; i--) {
    array[i] = array[i - 1];
  }

  array[0] = val;
  console.log("resultado> "+ array);
}

var array = [2, 3, 4, 5, 6, 7, 8];
var value = 1;
console.log("pushAlFrente> array>>"+ array +" value>>"+value);
pushAlFrente(array, value);
console.log("---------------------");

//Pop al frente
//Dada una matriz, elimina y devuelve el valor al principio de la matriz. Haz esto sin utilizar ningún método de matriz incorporado, excepto pop().
function popAlFrente(array) {
    var temp = array[0];
  
    for (var i = 0; i < array.length; i++) {
        array[i] = array[i + 1];
    }
  
    array[array.length - 1] = temp;
    return array.pop();
  }
  
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log("popAlFrente> array>>"+ array);
  console.log("resultado> " + popAlFrente(array));
  console.log("---------------------");



  //Insertar en
  /*Dado una matriz, índice y valor adicional, inserta el valor en la matriz en el índice dado. 
  Haz esto sin utilizar métodos de matriz integrados. 
  Puedes pensar en pushFront(arr, val) como equivalente a insertAt(arr, 0, val).*/
  function insertAt(array, ind, val) {

    for (var i = array.length; i >= ind; i--) {
        array[i] = array[i - 1];
    }
  
    array[ind] = val;
    console.log("resultado> " + array);
  }
  
  var array = [1, 2, 4, 5, 6];
  var ind = 2;
  var val = 3;
    console.log("insertAt> array>>"+ array +" ind>>"+ind+" val>>"+val);
  insertAt(array, ind, val);
console.log("---------------------");

//Eliminar en
/*Dada una matriz y un índice en una matriz, elimina y devuelve el valor de la matriz en ese índice. 
Haz esto sin usar métodos de matriz integrados, excepto pop(). 
Piensa en popFront(arr) como equivalente a removeAt(arr, 0). */

function removeAt(array, ind) {
    var temp = array[ind];
  
    for (var i = ind; i < array.length; i++) {
        array[i] = array[i + 1];
    }
  
    array[array.length - 1] = temp;
    return array.pop();
  }

    var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    var ind = 4;
    console.log("removeAt> array>>"+ array +" ind>>"+ind);
    console.log("resultado> " + removeAt(array, ind));
    console.log("---------------------");

    //Pares de intercambio
    /*Intercambia posiciones de pares sucesivos de los valores de una matriz dada. 
    Si la longitud es impar, no cambies el elemento final. Para [1,2,3,4], devuelve [2,1,4,3]. 
    Por ejemplo, cambia la entrada ["Brendan", verdadero, 42] a [verdadero, "Brendan", 42]. 
    Al igual que con todos los desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado. */
    function swapPairs(array) {
        for (var i = 0; i < array.length; i += 2) {
            var temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
        console.log("resultado> " + array);
    }

    var arr2 = ["Brendan", true, 42];
    console.log("swapPairs> arr2>>"+ arr2);
    swapPairs(arr2);
    console.log("*******************");

    //Eliminar duplicados
    /*Sara está buscando contratar a un desarrollador web increíble y ha recibido postulaciones de varias fuentes. 
    Su asistente los ordenó alfabéticamente, pero notó algunos duplicados. Dada una matriz ordenada, 
    elimina los valores duplicados. Debido a que los elementos de la matriz ya están en orden, todos los valores duplicados se agruparán. 
    Al igual que con todos estos desafíos de arreglos, hazlo sin utilizar ningún método de arreglo incorporado. */
    //resuelve esto sin usar ningún bucle anidado.

    function removeDups(array) {
        var temp = array[0];
        var j = 0;
        for (var i = 1; i < array.length; i++) {
            if (array[i] != temp) {
                j++;
                array[j] = array[i];
                temp = array[i];
            }
        }
        array.length = j + 1;
        console.log("resultado> " + array);
    }
    
    var arr3 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
    console.log("removeDups> arr3>>"+ arr3);
    removeDups(arr3);
    console.log("*******************");