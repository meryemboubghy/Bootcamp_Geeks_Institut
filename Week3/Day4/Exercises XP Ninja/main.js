// 1 :
function calculateTip() {
  const billAmount = parseFloat(document.getElementById("billamt").value);
  const serviceQuality = parseFloat(
    document.getElementById("serviceQual").value
  );
  const numberOfPeople = parseInt(document.getElementById("peopleamt").value);

  // console.log("Montant de la facture :", billAmount);
  // 2 :
  // console.log("Qualite du service :", serviceQuality);
  // 3 :
  // console.log("LE NOMBRE DE PERSONNES ASSISES a la table :", numberOfPeople);
  // 4 :
  if (isNaN(billAmount)) {
    alert("Please enter bill amount");
    return;
  }

  if (serviceQuality === 0) {
    alert("Please select service quality");
    return;
  }
  // 5 : si numberOfPeople est vide ou inferieur a 1
  if (Number(numberOfPeople) < 1 && numberOfPeople === "") {
    numberOfPeople = 1;
    const each = document.getElementById("each");
    each.style.display = "none";
  } else {
    each.style.display = "inline";
  }
  // console.log("Nombre de personnes :", numberOfPeople);

  // 7 :
  const total = (billAmount * serviceQuality) / numberOfPeople;
  total.toFixed(2);
  console.log("Total est :", total);
  // 8 :
  const totalTip = document.getElementById("totalTip");
  totalTip.style.display = "block";
  document.getElementById("tip").innerText = total;

  // console.log("Total Tip est :", totalTip);
}
calculateTip();
