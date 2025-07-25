const selectDevise = document.getElementById("deviseId");
const selectDevise2 = document.getElementById("deviseId2");
const amountInput = document.getElementById("amountId");
const convertBtn = document.getElementById("convertBtn");
const resultDiv = document.getElementById("resultat");
const changeBtn = document.getElementById("changerBtn");
const apiKey = "7dc0d2e39e574885d8aaf639"; // Remplacez par votre clé API
// const apiUrl = "https://v6.exchangerate-api.com/v6/7dc0d2e39e574885d8aaf639/latest/USD"; // URL de l'API pour obtenir les taux de change
const apiUrl = "7dc0d2e39e574885d8aaf639";

// Charger l'API pour obtenir les taux de change
async function chargerdevises() {
  const response = await fetch(
    `https://v6.exchangerate-api.com/v6/${apiUrl}/latest/USD`
  );
  const data = await response.json();
  const devises = Object.keys(data.conversion_rates);
  devises.forEach((devise) => {
    const option = document.createElement("option");
    option.value = devise;
    option.textContent = devise;
    const option2 = option.cloneNode(true);
    selectDevise.appendChild(option);
    selectDevise2.appendChild(option2);
  });
  selectDevise2.value = "EUR"; // Valeur par défaut
  selectDevise.value = "USD"; // Valeur par défaut
}
// Fonction pour convertir les devises
async function convertirDevise() {
  const device1 = selectDevise.value;
  const device2 = selectDevise2.value;
  const amount = parseFloat(amountInput.value);
  if (!amount || amount <= 0) {
    resultDiv.textContent = "Please enter a valid amount.";
    return;
  }
  const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${device1}/${device2}/${amount}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.result === "success") {
    resultDiv.textContent = `${amount} ${device1} = ${data.conversion_result.toFixed(
      2
    )} ${device2}`;
  } else {
    resultDiv.textContent = "Error converting currency. Please try again.";
  }
}

// fonction pour changer les devises
function changeDevise() {
  const temp = selectDevise.value;
  selectDevise.value = selectDevise2.value;
  selectDevise2.value = temp;
  convertirDevise();
}

// Événements
convertBtn.addEventListener("click", convertirDevise);
changeBtn.addEventListener("click", changeDevise);
chargerdevises();
