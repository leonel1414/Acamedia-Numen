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



//Callback
let profesores = ['Leonel','Belen','Rocio','Milena'];
let saludosProfesores = [];

profesores.forEach(function(elemento, indice){
    saludosProfesores.push(`Posicion ${indice} - Docente ${elemento}`)
});

console.log(saludosProfesores);
*/



const profesores =[{
nombre:'Leonel',
edad: 30,
profesion: 'Profesor'
},
{
nombre:'Cinthia',
edad: 31,
profesion:'Coordinadora'
},
{
nombre:'Andres',
edad: 27,
profesion: 'Profesor'
},
{
nombre:'Guillermo',
edad: 25,
profesion:'Tutor'
}]

profesores.map(elemento =>{
return(`<h2>Bienvenidos a Academia Numen<h2>
<p> En esta ocasion quiero presentarles a ${elemento.nombre} quien
sera su ${elemento.profesion} a lo largo de este curso.</p>`)
});