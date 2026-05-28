const picOfTheDay = document.querySelector(".picOfTHeDay");
const picTitle = document.querySelector(".picTitle");
const astreoids = document.querySelector(".astreoids");

const apiKey = process.env.NASA_API_KEY;

async function getApod() {
  try {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayApod(data);
  } catch (error) {
    console.error("Something went wrong!", error);
  }
}

function displayApod(data) {
  picTitle.textContent = data.title;
  const image = document.createElement("img");
  image.classList.add("image");
  image.style.width = 500 + "px";
  image.src = `${data.hdurl}`;
  picOfTheDay.appendChild(image);
}

async function getAstroid() {
  try {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=2025-09-07&end_date=2025-09-08&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    displayAstreoids(data);
  } catch (error) {
    console.error("Something went wrong!", error);
  }
}

function displayAstreoids(data) {
  let iterableData = data.near_earth_objects["2025-09-07"];
  for (let astreoid of iterableData) {
    const listItem = document.createElement("li");
    listItem.textContent = astreoid.name;
    astreoids.appendChild(listItem);
  }
}

// getApod();
// data.near_earth_objects['2025-09-07'][0].name
getAstroid();
