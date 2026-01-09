/*  import './style.css'
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
      
     };
      document.getElementById("api-response").textContent = data.name;
    }
   catch (error) {
    console.log(error);
  }
getAllData() */

 import './style.css'
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
getAllData();