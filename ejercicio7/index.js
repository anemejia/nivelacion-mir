var receta={};
receta.nombre="sandwich";
receta.ingredientes=[];
var ingre={
    nombre: "pan",
    cantidad:2,
};
receta.ingredientes=[ingre];
var ingre2={
    nombre: "Queso",
    cantidad:1,
};
receta.ingredientes=[ingre,ingre2];

//console.log(receta.ingredientes[0].nombre);
//console.log(receta.ingredientes[0].cantidad+receta.ingredientes[1].cantidad);
//
function cantidad(num){
let resultado=0;
for(i=0;i<num;i++){
    resultado=receta.ingredientes[i].cantidad+resultado;
}
return resultado;
}
console.log(cantidad(2));