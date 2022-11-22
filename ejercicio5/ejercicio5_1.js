function suma(num) {
    //var num=[10,4];
    var resultado=0;
    for (i=0; i<num.length; i++){
        resultado=num[i]+resultado;
    }
    return resultado;
}
console.log(suma([1,2,3]));

console.log(suma([10,8,12,5]));

console.log(suma([]));