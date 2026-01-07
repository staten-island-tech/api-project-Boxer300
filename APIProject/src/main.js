import './style.css'
const URL = "https://api.disneyapi.dev/character/:id"
async function getAllData(URL){
 try {
    // go get data
    const response = await fetch(URL);
    // handle errors
    if (response.status != 200) {
      throw new Error(response);
    } else {
      // makes the response into json data we can use
      const data = await response.json();
      const response = await fetch(URL);
      document.getElementById("api-response").textContent = data.name;
    }
  } catch (error) {
    console.log(error);
  }
}
getAllData()

/* https://api.disneyapi.dev/character/:id */
/* https://api.disneyapi.dev/character */