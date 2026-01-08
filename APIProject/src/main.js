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
     data.data
      document.getElementById("api-response").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
  }
}
getAllData()
/* https://api.disneyapi.dev/character/:id */
/* https://api.disneyapi.dev/character */

/* import './style.css';

async function getAllData() {
  const response = await fetch('https://api.disneyapi.dev/character');
  const data = await response.json();

  const container = document.getElementById("api-response");

  data.data.forEach(character => {
    const p = document.createElement("p");
    p.textContent = character.name;
    container.appendChild(p);
  });
}

getAllData(); */
