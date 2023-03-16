//Min al comienzo
/*Dada una matriz de valores comparables, mueve el elemento más bajo al comienzo de la matriz, 
desplazando hacia atrás los elementos que estaban antes. De lo contrario, no cambies el orden de la matriz. 
Dado [4,2,1,3,5], cámbialo a [1,4,2,3,5] y devuélvelo. Como siempre, haz esto sin usar funciones integradas. */

function removeAt(array, ind) {
    var temp = array[ind];
  
    for (var i = ind; i < array.length; i++) {
        array[i] = array[i + 1];
    }
  
    array[array.length - 1] = temp;
    return array.pop();
  }
  
  function insertAt(array, ind, val) {
  
    for (var i = array.length; i >= ind; i--) {
        array[i] = array[i - 1];
    }
  
    array[ind] = val;
  }
  
  function minAlComienzo(array) {
    var min = array[0];
    var minIndex;
  
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i]
        minIndex = i;
      }
    }
  
    removeAt(array, minIndex);
    insertAt(array, 0, min);
    console.log("resultado>", array);
  }
  
  //Test Cases
  var array = [4, 2, 1, 3, 5];
  console.log("minAlComienzo> array>>" + array)
  minAlComienzo(array);
    console.log("---------------------");