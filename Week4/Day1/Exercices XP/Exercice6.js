function auto_invoquante(
  nbr_enfants,
  nom_parents,
  situation_geo,
  intitulePost
) {
  const message = `you will a ${intitulePost} in ${situation_geo} ,
  and married to ${nom_parents}
  with ${nbr_enfants} kids.`;

  // creer elemnt HTML
  const p = document.createElement("p");
  p.textContent = message;
  //ajouter element
  document.body.appendChild(p);
}
auto_invoquante(4, "Meryem", "casa", "fullStack");
