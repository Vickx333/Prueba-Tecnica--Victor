function todosLosPersonajes() {
     let allCharacters = []; // Arreglo para almacenar todos los personajes

     let url = 'https://rickandmortyapi.com/api/character';
     fetch(url)
          .then(respuesta => respuesta.json())
          .then(imag => {
               const logotipo = document.querySelector('.logo a img');
               logotipo.src = imag.results[18].image;
               const icono = document.querySelector('.icono')
               icono.href = imag.results[18].image;
               document.querySelector('#imagen').src = imag.results[18].image

          }).catch(errorLogo => console.log('error en el logo'));



     //cargar todos los personajes en un arreglo
     function fetchCharacters(url) {
          fetch(url)
               .then(response => response.json())
               .then(data => {
                    let nextPage = data.info.next;
                    let characters = data.results;

                    allCharacters = allCharacters.concat(characters); // Concatenar los personajes al arreglo

                    if (nextPage) {
                         fetchCharacters(nextPage); // Llamar recursivamente para la siguiente página
                    } else {
                         console.log(allCharacters); // Mostrar todos los personajes una vez obtenidos



                         // Lógica para el cambio de personaje 
                         const btnCambio = document.querySelector('#cambio');
                         btnCambio.addEventListener('click', cambiarPersonaje);
                    }

                    // locations

               })
               .catch(error => console.log('Error en la búsqueda'));
     }


     fetchCharacters(url); // Llamada inicial para obtener los personajes

     function cambiarPersonaje() {
          //tomar de forma aleatoria un numero entre el primero y el iltimo personaje
          const randomIndex = Math.floor(Math.random() * allCharacters.length);

          //se asigna ese numero a esta variable
          const randomCharacter = allCharacters[randomIndex];

          //manipulacion de los elementos de la tarjeta DOM
          document.querySelector('#imagen').src = randomCharacter.image;
          document.querySelector('#name').textContent = randomCharacter.name;
          document.querySelector('#name').style.fontFamily = "--var( 'Protest Strike', sans-serif;)";
          //status
          let status = document.querySelector('.circlestatus');
          status.style.backgroundColor = '';

          if (randomCharacter.status == 'Alive') {

               status.style.backgroundColor = 'greenyellow'
               document.querySelector('#card').style.boxShadow = '0px 0px 20px 1px rgba(172, 255, 47, 0.683), inset 0px 0px 10px 1px rgba(172, 255, 47, 0.671)'
               document.querySelector('.imagen img').style.filter = 'grayScale(0)';

          } else {
               status.style.backgroundColor = 'red';
               document.querySelector('#card').style.boxShadow = '0px 0px 20px 1px red, inset 0px 0px 10px 1px red';
               document.querySelector('.imagen img').style.filter = 'grayScale(3)';


          }
          //planeta
          let planet = document.querySelector('.planet');
          planet.innerText = randomCharacter.location.name;

          //especia
          let especie = document.querySelector('.especie');
          especie.innerText = randomCharacter.species;

          //genero
          let gender = document.querySelector('.gender');
          gender.innerText = randomCharacter.gender;

          let estadoText = document.querySelector('.statusText');
          estadoText.innerText = ` ${randomCharacter.status} - `;
          if (randomCharacter.gender == 'Female') {
               gender.style.color = 'pink'
          } else if (randomCharacter.gender == 'Male') {
               gender.style.color = 'aqua'

          } else {
               gender.style.color = '#fff';
          }

          //universo
          let universe = document.querySelector('#universe');
          universe.innerText = randomCharacter.created;


     }

}

// Llamar a la función todosLosPersonajes para iniciar el proceso de obtención de personajes
todosLosPersonajes();




// function todosLosPersonajes() {
//      let allCharacters = []; // Arreglo para almacenar todos los personajes

//      let url = 'https://rickandmortyapi.com/api/character';

//      function fetchCharacters(url) {
//           fetch(url)
//                .then(response => response.json())
//                .then(data => {
//                     let nextPage = data.info.next;
//                     let characters = data.results;
//                     allCharacters = allCharacters.concat(characters); // Concatenar los personajes al arreglo

//                     if (nextPage) {
//                          fetchCharacters(nextPage); // Llamar recursivamente para la siguiente página
//                     } else {
//                          console.log(allCharacters); // Mostrar todos los personajes una vez obtenidos
//                     }
//                })
//                .catch(error => console.log('Error en la búsqueda'));
//      }

//      fetchCharacters(url); // Llamada inicial para obtener los personajes

//      function mostrarPersonajeAleatorio() {
//           let randomIndex = Math.floor(Math.random() * allCharacters.length);
//           let randomCharacter = allCharacters[randomIndex];
//           console.log(randomCharacter); // Mostrar el personaje aleatorio
//      }

// }

// // Llamar a la función todosLosPersonajes para iniciar el proceso de obtención de personajes
// todosLosPersonajes();









// // logica boton aleatorio






// let imagen = document.querySelector('#imagen');
// let nombre = document.querySelector('#nombre');
// let icono = document.querySelector('.logo img');
// console.log(icono)




// let url = 'https://rickandmortyapi.com/api/character';

// fetch(url)
//      .then(response => response.json())
//      .then(data => {
//           console.log(data);
//           let personajes = data.results;
//           let randomised = 18;
//           let btnCambio = document.querySelector('#cambio');
//           btnCambio.addEventListener('click', () => {
//                cambiarPersonaje();
//                console.log(randomised)
//           })
//           function cambiarPersonaje() {
//                randomised = Math.floor(Math.random(allCharacters.length) * 826)
//                imagen.src = personajes[randomised].image
//           }
//           console.log(randomised)

//           icono.src = personajes[18].image;


//           let pagina = data.info.pages;
//           console.log(pagina)
//           icono.src = personajes[18].image
//           console.log(personajes);

//           //imagen
//           // imagen.src = personajes[randomised].image
//      })
//      .catch(error => console.log('error en la busqueda'))