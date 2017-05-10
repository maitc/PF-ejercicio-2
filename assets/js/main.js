var productos = [
{
	nombre: "pijama",
	tipo: "ropa"
}, 
{
	nombre: "nevera",
	tipo: "electrodoméstico"
}, 
{
	nombre: "asus", 
	tipo: "computador"
}, 
{
	nombre: "macbook", 
	tipo: "computador"
},
{
	nombre: "pijama",
	tipo: "ropa"
}, 
{
	nombre: "toshiba", tipo: "computador"
}
];


var computadores = productos.filter(function(cv){
	return cv.tipo === "computador";
});

console.log(computadores);

/*Versión PP.
var computadores = [];
for(var i = 0; i < productos.length; i++){
	if(productos[i].tipo == "computador"){
		computadores.push(productos[i]);
	}
}*/

//Versión PF.