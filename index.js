const picOfTheDay = document.querySelector(".picOfTHeDay");
const apiKey = process.env.NASA_API_KEY;

async function getApod() {
  try {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    displayApod(data)
  } catch (error) {
    console.error("Something went wrong!", error);
  }
}

function displayApod(data) {
  const image = document.createElement("img");
  image.src = `${data.hdurl}`;
  picOfTheDay.appendChild(image);
}

getApod();
