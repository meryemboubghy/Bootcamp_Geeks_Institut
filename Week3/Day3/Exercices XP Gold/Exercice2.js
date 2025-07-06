function Abbrev_name(full_name) {
  let parts = full_name.trim().split(" ");
  if (parts.length < 2) {
    return full_name;
  }
  let firstName = parts[0];
  let lastName = parts.slice(1).join(" ");
  let abbreviated = firstName.charAt(0).toUpperCase() + ". " + lastName;
  return abbreviated;
}

console.log(Abbrev_name("Meryem Boubghy"));
