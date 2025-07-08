const form = document.getElementById("libform");
const storyElement = document.getElementById("story");

const stories = [
  (noun, adjective, person, verb, place) =>
    `${person} était une personne très ${adjective} qui adorait ${verb} au/à la ${place}. Un jour, il/elle découvrit un(e) ${noun} magique !`,
  (noun, adjective, person, verb, place) =>
    `Dans un monde ${adjective}, ${person} décida de ${verb} avec un(e) ${noun} à ${place}. L’aventure de sa vie commença !`,
  (noun, adjective, person, verb, place) =>
    `${person} rêvait d’un(e) ${noun} ${adjective} qui l’emmènerait à ${place} et ferait de lui/elle le/la meilleur(e) ${verb} du pays.`,
];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const noun = document.getElementById("noun").value.trim();
  const adjective = document.getElementById("adjective").value.trim();
  const person = document.getElementById("person").value.trim();
  const verb = document.getElementById("verb").value.trim();
  const place = document.getElementById("place").value.trim();

  if (!noun || !adjective || !person || !verb || !place) {
    console.error("Veuillez remplir tous les champs !");
    return;
  }

  const story = stories[Math.floor(Math.random() * stories.length)](
    noun,
    adjective,
    person,
    verb,
    place
  );
  storyElement.textContent = story;
});
