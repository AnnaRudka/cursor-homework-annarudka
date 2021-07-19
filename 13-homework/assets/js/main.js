const planets = document.getElementById("planets");
const characters = document.getElementById("characters");
const episode = document.getElementById("episode").value;
const buttons = document.getElementById("scroll-buttons");
let page = 1;
const wookiee = "?format=wookiee";

function createMenu() {
  document.querySelectorAll(".btn__menu").forEach((menuItem) => {
    menuItem.addEventListener("click", (e) => {
      const btn = e.target.dataset.component;
      const language = document.getElementById("language").value;
      switch (btn) {
        case "planets":
          createPlanets(1);
          break;
        case "people":
          language === "english" ? createCharacters() : createCharacters(1);
          break;
      }
    });
  });
}
createMenu();

// Отримання списку планет

const getPlanets = (page) => {
  return fetch(`https://swapi.dev/api/planets/?page=${page}`).then((res) =>
    res.json()
  );
};

const createPlanetsList = () =>
  planetsList
    .map((planet) => `<li class ="content-item">${planet.name}</li>`)
    .join("");

const createPlanets = (page) => {
  characters.innerHTML = "";
  getPlanets(page).then((data) => {
    planetsList = data.results;
    planets.innerHTML = createPlanetsList();
    buttons.innerHTML =
      '<button id="btn-prev" class="btn-scroll">PREVIOUS</button><button id="btn-next" class="btn-scroll">NEXT</button>';
    document.getElementById("btn-prev").addEventListener("click", onPrevClick);
    document.getElementById("btn-next").addEventListener("click", onNextClick);
  });
};

function onPrevClick() {
  page -= 1;
  if (page < 1) {
    page = 1;
  }
  createPlanets(page);
}

function onNextClick() {
  page += 1;
  if (page > 6) {
    page = 6;
  }
  createPlanets(page);
}

// Отримання інформації про героїв фільму при виборі епізоду

const getPeople = (episode) => {
  return fetch(`https://swapi.dev/api/films/${episode}/`).then((res) =>
    res.json()
  );
};

const getCharacter = (url) => {
  return fetch(url).then((res) => res.json());
};

const createCharacterCard = (url) => {
  getCharacter(url).then((data) => {
    const character = {
      name: data.name,
      year: data.birth_year,
      gender: data.gender,
      index: data.url.replace(/\D+/g, ""),
    };
    const photo = `./assets/images/${character.index}.jpg`;
    let genderCode = "";
    switch (character.gender) {
      case "male":
        genderCode = "&#9794";
        break;
      case "female":
        genderCode = "&#9792";
        break;
      default:
        genderCode = "&#10006";
        break;
    }

    return (characters.innerHTML += `<div class="characters-item"><img class="photo" src="${photo}"/><h3> ${character.name}</h3> 
			<p>Date of birth: ${character.year}</p>
			<p>Gender: ${genderCode}</p></div>`);
  });
};

const createCharacterCardWookiee = (url) => {
  getCharacter(url + wookiee).then((data) => {
    const character = {
      name: data.whrascwo,
      year: data.rhahrcaoac_roworarc,
      gender: data.rrwowhwaworc,
      index: data.hurcan.replace(/\D+/g, ""),
    };
    const photo = `./assets/images/${character.index}.jpg`;
    switch (character.gender) {
      case "scraanwo":
        genderCode = "&#9794";
        break;
      case "wwwoscraanwo":
        genderCode = "&#9792";
        break;
      default:
        genderCode = "&#10006";
        break;
    }
    return (characters.innerHTML += `<div class="characters-item"><img class="photo" src="${photo}"/><h3> ${character.name}</h3> 
			<p>Rhahrcaoac roworarc: ${character.year}</p>
			<p>Rrwowhwaworc: ${genderCode}</p></div>`);
  });
};
const createCharacters = (withWookiee) => {
  buttons.innerHTML = "";
  planets.innerHTML = "";
  characters.innerHTML = "Characters list loading...";
  getPeople(episode).then((data) => {
    urlList = data.characters;
    characters.innerHTML = "";
    if (withWookiee) {
      return urlList.map((url) => createCharacterCardWookiee(url));
    } else {
      return urlList.map((url) => createCharacterCard(url));
    }
  });
};
