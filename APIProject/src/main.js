import './style.css'
async function getAllData(Disney){
 try {
    // go get data
    const response = await fetch(`https://api.disneyapi.dev/character`);
    // handle errors
    if (response.status != 200) {
      throw new Error(response);
    } else {
      // makes the response into json data we can use
      const data = await response.json();
      console.log(data);
      document.getElementById("api-response").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
  }
}
getAllData()
const info = `https://api.disneyapi.dev/character`
 info.forEach((data) => inject(data))
 function inject(info) {
    document.querySelector(".main").insertAdjacentHTML(
    "afterbegin",
     `<div class="display-card">
       <img class="display-image" src="${info.imageUrl}" />
        <input class="caption" placeholder="meme text" />
        <h2 class="display-category">${info.name} </h2>
      <h3 class="display-title">${info.category} </h3>
      <button class="add text">Add text</button>
   </div>`
    );
   }  

/* https://api.disneyapi.dev/character/:id */