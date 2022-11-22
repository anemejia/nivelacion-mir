function join(cadena){
    temp=cadena[0];
    if(cadena.length==0)
        temp=" ";
    for(i=1;i<cadena.length;i++){
    temp=temp+" "+cadena[i];    
    }

    return temp;
}
console.log(join(["hola","todo"]));
console.log(join(["Make","it","Real"]));
console.log(join([]));