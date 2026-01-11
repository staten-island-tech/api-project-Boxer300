
 /* import './style.css'
async function getAllData(){
 try {
    // go get data
    const response = await fetch('https://api.disneyapi.dev/character');
    // handle errors
    if (response.status != 200) {
      throw new Error(response);
    } else {
      // makes the response into json data we can use
      const data = await response.json();
     data.data.forEach(character => inject(character));
   } 
    }
   catch (error) {
    console.log(error);
  }
     }
 function inject(character) {
  document.querySelector(".main").insertAdjacentHTML(
    "afterbegin",
    `
    <div class="display-card">
      <img class="display-image" src="${character.imageUrl}" alt="${character.name}" />
      <input class="caption" placeholder="character text" />
      <h2 class="display-category">${character.name}</h2>
      <h3 class="display-title">${character.films?.[0] || "No film listed"}</h3>
      <button class="add-text">Add text</button>
    </div>
    `
  );
}
getAllData(); */

import './style.css';

// Store shared values in an object (minimizes globals)
const state = {
  container: document.querySelector(".main"),
  baseURL: "https://api.disneyapi.dev/character"
};

// Reusable fetch function
async function fetchCharacters(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch character data.");
    }

    const data = await response.json();
    displayCharacters(data.data);
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
}

// Display character cards
function displayCharacters(characters) {
  state.container.innerHTML = "";

  characters.forEach(character => {
    inject(character);
  });
}

// Inject individual card into the DOM
function inject(character) {
  state.container.insertAdjacentHTML(
    "beforeend",
    `
    <article class="bg-white rounded shadow p-4 flex flex-col items-center">
      <img
        src="${character.imageUrl || ""}"
        alt="${character.name}"
        class="w-40 h-40 object-cover rounded mb-2"
      />
      <h2 class="text-lg font-semibold">${character.name}</h2>
      <p class="text-sm text-gray-600">
        ${character.films?.[0] || "No film listed"}
      </p>
    </article>
    `
  );
}

// Initial API call on page load
fetchCharacters(state.baseURL);

// Handle search form submission (second API call)
document.getElementById("searchForm").addEventListener("submit", event => {
  event.preventDefault();

  const query = document.getElementById("searchInput").value.trim();

  if (!query) {
    alert("Please enter a character name.");
    return;
  }

  fetchCharacters(`${state.baseURL}?name=${query}`);
});