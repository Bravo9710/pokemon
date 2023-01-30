import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10';

  const ul = document.querySelector("ul");

  return new Promise((resolve, reject) => {
    fetch(pokemonApiUrl)
    .then((res) => {
      res.json().then((res) => {
        res.results.forEach((pokemon) => {
          const li = document.createElement('li');
          li.innerText = pokemon.name;
          ul.appendChild(li);
        })
      });
    })
  })
});
