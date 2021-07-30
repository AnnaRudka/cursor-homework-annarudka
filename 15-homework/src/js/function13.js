const planets = document.getElementById("planets");
let page = 1;

export const getPlanets = (page) => {
  return fetch(`https://swapi.dev/api/planets/?page=${page}`).then((res) =>
    res.json()
  );
};

export const createPlanetsList = (planetsList) =>
  planetsList
    .map((planet) => `<li class ="planet">${planet.name}</li>`)
    .join("");

export function createPlanets(page) {
  getPlanets(page)
    .then((data) => {
      let planetsList = data.results;
      planets.innerHTML = createPlanetsList(planetsList);
    })
    .catch(console.log());
}

export function onPrevClick() {
  page -= 1;
  if (page < 1) {
    page = 1;
  }
  createPlanets(page);
}

export function onNextClick() {
  page += 1;
  if (page > 6) {
    page = 6;
  }
  createPlanets(page);
}
