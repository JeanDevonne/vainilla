// console.log('hola mundo!');
// const noCambia = "Jean";

// let cambia = "@JeanLeon"

// function cambiarNombre(nuevoNombre) {
//   cambia = nuevoNombre
// }

// const getUserAll = new Promise(function(todoBien, todoMal) {

//   // Llamada a un API

//   setTimeout(function(){
//     todoBien('Se acabó el tiempo 2');
//   }, 2000)
// })

// const getUser = new Promise(function(todoBien, todoMal) {
//   setTimeout(function(){
//     todoBien('Se acabó el tiempo 1');
//   }, 1000)
// })

// getUser
//   .then(function(msg){
//     console.log(msg)
//   })
//   .catch(function(msg){
//     console.log(msg)
//   })

// Promise.race([
//   getUser,
//   getUserAll
// ])
// .then(function(msg){
//   console.log(msg)
// })
// .catch(function(msg){
//   console.log(msg)
// })


//Ajax con JQuery (XML HTTP REQUEST)
// $.ajax('https://randomuser.me/api', {
//   method: 'GET',
//   success: function(data) {
//     console.log(data)
//   },
//   error: function(error){
//     console.log(error)
//   }
// })

//Ajax en JavaScript (fetch devuelve una promesa)
fetch('https://randomuser.me/api')
  .then(function(response){
    // console.log(response)
    return response.json()
  })
  .then(function (user){
    console.log('user:', user.results[0].name.first)
  })
  .catch(function() {
    console.log('algo salio mal')
  });

//Funciones Asincronas
(async function load() {
  //await
  //action
  //terror
  //animation
  async function getData(url) {
    const response = await fetch(url)
    const data = await response.json()
    if (data.data.movie_count > 0) {
      return data
    }
    // Si no hay pelis se crea un Error
    throw new Error('No se encontró ningun resultado')
  }
  
  const $form = document.getElementById('form')
  const $home = document.getElementById('home')
  const $featuringContainer = document.getElementById('featuring')

  function setAttributes($element, attributes) {
    for (const key in attributes) {
      $element.setAttribute(key,attributes[key]);
      //Asina un atributo (atributo, valor)
    }
  }

  const BASE_URL = 'https://yts.lt/api/v2/';

  function featuringTemplate(peli) {
    return (`
    <div class="featuring">
    <div class="featuring-image">
      <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
    </div>
    <div class="featuring-content">
      <p class="featuring-title">Pelicula encontrada</p>
      <p class="featuring-album">${peli.title}</p>
    </div>
    `)
  }

  $form.addEventListener('submit', async function(event) {
    event.preventDefault();
    $home.classList.add('search-active');
    const $loader = document.createElement('img');
    setAttributes($loader,{
      src: 'src/images/loader.gif',
      height: 50,
      width: 50
    });
    $featuringContainer.append($loader);
    const data = new FormData($form);

    //Manejo de Errores con Try Catch
    try {
      //Asignación por destrucutación
      const {
        data: {
          movies: pelis
        }
      } = await getData(`${BASE_URL}list_movies.json?limit=1&query_term=${data.get('name')}`);
      const HTMLString = featuringTemplate(pelis[0]);
      $featuringContainer.innerHTML = HTMLString;
    } catch (error) {
      alert(error.message)
      $loader.remove()
      $home.classList.remove('search-active')
    }
  })

  async function cacheExist(category) {
    const listName = `${category}List`
    const cacheList = window.localStorage.getItem(listName)
    if (cacheList) {
      return JSON.parse(cacheList)
    }
    const {data: {movies: data}} = await getData(`${BASE_URL}list_movies.json?genre=${category}`)
    localStorage.setItem(listName, JSON.stringify(data))
    return data
  }

  // Con Async Await
  // const {data: {movies: actionList}} = await getData(`${BASE_URL}list_movies.json?genre=action`)
  const actionList = await cacheExist('action')
  const $actionContainer = document.querySelector('#action')
  renderMovieList(actionList , $actionContainer, 'action')

  const dramaList = await cacheExist('drama')
  const $dramaContainer = document.getElementById('drama')
  renderMovieList(dramaList , $dramaContainer, 'drama')

  const animationList = await cacheExist('animation')
  const $animationContainer = document.getElementById('animation')
  renderMovieList(animationList , $animationContainer, 'animation')
  
  // Con Promesas
  // let animationList
  // getData('https://yts.lt/api/v2/list_movies.json?genre=animation')
  //   .then(function(data){
  //     console.log('animationList: ', data)
  //     animationList = data
  //   })

  console.log(actionList, dramaList, animationList)

  function videoItemTemplate(movie,category) {
    return (
      `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category="${category}">
      <div class="primaryPlaylistItem-image">
      <img src="${movie.medium_cover_image}">
      </div>
      <h4 class="primaryPlaylistItem-title"> ${movie.title} </h4>
      </div>
      `
      )
  };
  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();//Crea un Documento html en memoria (JS)
    html.body.innerHTML = HTMLString;//Agrega el HTMLString en el DOM en memoria
    return html.body.children[0];
  };
    
  function addEventClick($element) {
    $element.addEventListener('click', () => {
      showModal($element);
    })
  }
  function renderMovieList(list,$container, category) {
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie, category);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      const image = movieElement.querySelector('img');
      image.addEventListener('load', function(event) {
        event.srcElement.classList.add('fadeIn');
      })
      addEventClick(movieElement);
    });
  }
  
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay')
  const $hideModal = document.getElementById('hide-modal')
  
  const $modalTitle = $modal.querySelector('h1')
  const $modalImage = $modal.querySelector('img')
  const $modalDescription = $modal.querySelector('p')

  function findById(list, id) {
    return list.find(movie => movie.id === parseInt(id, 10))
  }

  function findMovie(id, category) {
    //Encontrando elementos en una lista
    switch (category) {
      case 'action': {
        return findById(actionList, id)
      }
      case 'drama': {
        return findById(dramaList, id)
      }
      default: {
        return findById(animationList, id)
      }
    }
  }

  function showModal($element) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    //DataSet
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    const data = findMovie(id, category);
    $modalTitle.textContent = data.title;
    $modalImage.setAttribute('src',data.medium_cover_image);
    $modalDescription.textContent = data.description_full;
  }
  $hideModal.addEventListener('click', hideModal);
  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';
  }
})()