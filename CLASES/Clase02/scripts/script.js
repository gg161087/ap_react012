//metodos basicos
/* let numeros = [4, 58, 96, 78, 222]
let resultado = numeros.unshift(85)
console.log(numeros);

//metodos avanzados
let resultadoDos = numeros.map(numero=>numero+100)
console.log(resultadoDos);

let resultadoTres = numeros.filter(numero=>numero>100)
console.log(resultadoTres); */

//let resultadoCuatro = numeros.forEach((numero, i ) => {console.log(`Posicion es ${i} y el numero es ${numero%2===0 ? 'par':' impar'}`)})

// ()=>{} funcion flecha anonima
// variable ? '' : ''; operador ternario

//Operador circuito
/* let booleano = true
booleano && console.log('hola');

const edad = 18;
switch (edad) {
  case 18:
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${edad}.`);
} */

const divMostrar = document.querySelector('#mostrar')

const getPersonajesRicky = () => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(response2 =>mostrarPersonajes(response2.results))
}

const mostrarPersonajes = (personajes) => {
    for (const personaje of personajes) {
        divMostrar.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${personaje.image}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                        <h5 class="card-title">${personaje.name}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
                </div>
            </div>
        `
    }
    console.log(personajes);
}

getPersonajesRicky()