//Quitar espacios en blanco
function quitarEspaciosEnBlanco(str) {
    var newStr = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            newStr += str[i];
        }
    }
    return newStr;
}
console.log("quitarEspaciosEnBlanco> Pl   ayTha   tF   u  nkyM  usi    c >>>>>" + quitarEspaciosEnBlanco(" Pl ayTha tF u nkyM usi c "));


//Obtener dígitos
function obtenerDigitos(str) {
    var nums = ('0123456789').split("");
    var digits = "";
    for (var i = 0; i < str.length; i++) {
        if (nums.includes(str[i])) {
            digits += str[i];
        }
    }
    return digits;
}

console.log("obtenerDigitos de >> 0s1a3y5w7h9a2t4?6!8?0 >>>>"+obtenerDigitos("0s1a3y5w7h9a2t4?6!8?0"));

//Acrónimos
function acronimos(str) {
    var acronym = "";
    var arr = str.split(" ");
    for (var i = 0; i < arr.length; i++) {
        acronym += arr[i].substr(0, 1).toUpperCase();
    }

    return acronym;
}

console.log("acronimos de> no hay almuerzo gratis. Debes pagar por tu comida>>>>", acronimos("no hay almuerzo gratis. Debes pagar por tu comida"));
console.log("acronimos de> En vivo desde Nueva York, es sábado por la noche!>>>", acronimos("En vivo desde Nueva York, es sábado por la noche!"));


//Contar no espacios
function contarNoEspacios(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
      if (str[i] == ' ') {
        count++;
      }
    }
    return count;
  }
  
  
  console.log("contarNoEspacios>Amor, me estás volviendo loca>>", contarNoEspacios('Amor, me estás volviendo loca"'));


  //Quitar cadenas más cortas
function quitarCadenasMasCortas(array, len) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i].length >= len) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

console.log("quitarCadenasMasCortas que 3 > Hola mi nombre es Maria>>",quitarCadenasMasCortas(['Hola', 'mi', 'nombre', 'es', "Maria"], 3));