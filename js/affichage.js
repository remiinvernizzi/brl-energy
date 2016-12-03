//Récupération de la liste des champs du formulaire à afficher
ajaxGet("http://127.0.0.1/edsa-brl-energy/json/struct_espira.json", function(reponse){
  listeInputs = JSON.parse(reponse);
  var inputForm = Object.create(EspiraForm);
  //Creation du squelette du nouveau formulaire
  inputForm.creationForm();
  //Affichage des champs
  listeInputs.forEach(function(inputElt){
    inputForm.init(inputElt);
    inputForm.affichageChamp();
  })
  //Affichage du bouton de validation
  inputForm.affichageSubmit();
})
