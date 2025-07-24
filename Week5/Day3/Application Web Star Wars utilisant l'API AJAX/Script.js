const container = document.getElementById("container");
const message = document.getElementById("mesg");
const btnAffiche = document.getElementById("btnAffiche");
btnAffiche.addEventListener("click", async function () {
  container.innerHTML = "";
  message.innerHTML = `<i class="fas fa-spinner fa-spin>"></i> <strong>Loading...</strong>`;
  const randomId = Math.floor(Math.random() * 83) + 1; // Assuming there are 83 characters in the API
  const url = `https://www.swapi.tech/api/people/${randomId}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Oh No! That person isn't available");
    }

    const worldResponse = await fetch(person.homeworld);
    const worldData = await worldResponse.json();
    const worldName = worldData.result.properties.name;
    message.innerHTML = "";

    container.innerHTML = `
      <h2>${person.name}</h2>
      <p><strong>Height</strong>: ${person.height}</p>
      <p><Strong>gender</Strong>: ${person.gender}</p>
      <p><strong>Birth Year </strong> ${person.birth_year}</p>
      <p><strong>Home World</p>${worldName}</p>`;
  } catch (error) {
    message.innerHTML = `<i class="fas fa-exclamation-triangle"></i> <strong>${error.message}</strong>`;
    console.error("Error fetching data:", error);
  }
});
