const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

/* Se arreglan las etiquetas que se estan llamando. Las etiquetas tienen clases, por lo tanto tienen que empezar con punto y no # */
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

/* Para utilizar la expresión await se necesita que la función sea asíncrona, por lo tanto se añade async */
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  /* La variable data no esta definida, por lo tanto se crea como una constante.
  Lo que se le asigna a la variable es para que se cree un json de la respuesta de la api. */
  const data = await response.json();
  console.log(data);
  /* Se cambian las '' por ``, para la sintaxis correcta */
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  /* Se añade el $ a n para definirla correctamente */
  $n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);
