var pedro={
nombre:"pedro perez",
edad:30,
activo:true,
hobbies:["programar","squash","piano"],
};
console.log(pedro.edad);
pedro.estatura=1.8;
delete pedro.activo;
console.log(pedro);
for (let key in pedro)  
    console.log(key,":",pedro[key]);
pedro.saluda=function(){
return "hola, me  llamo "+this.nombre;
}
console.log(pedro.saluda());
