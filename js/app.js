/*
function saludarUsuario(usuario){
    return `Hola ${usuario}`
}

function despedirUsuario(usuario){
    return `Hola ${usuario}`
}

function crearUsuario(usuario,callback){
    return callback(usuario);
}

console.log(crearUsuario('Leonel', saludarUsuario));

*/

//callback
let profesores = ['Leonel','Belen','Rocio','Milena'];
let saludosProfesores = [];

profesores.forEach(function(elemento, indice){
    saludosProfesores.push(`Posicion ${indice} - Docente ${elemento}`)
});

console.log(saludosProfesores);