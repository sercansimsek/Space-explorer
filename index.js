const picOfTheDay = document.querySelector(".picOfTHeDay");
const picTitle = document.querySelector(".picTitle");

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
  image.classList.add('image');
  image.style.width = 500 + "px";
  image.src = `${data.hdurl}`;
  picOfTheDay.appendChild(image);
}

getApod();
