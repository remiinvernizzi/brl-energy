//Récupération de la liste de champs à afficher
ajaxGet("http://127.0.0.1/edsa-brl-energy/json/struct_espira.json", function(reponse){
  listeInputs = JSON.parse(reponse);
  listeInputs.forEach(function(inputElt){
    var inputForm = Object.create(EspiraForm);
    inputForm.init(inputElt);
    inputForm.affichage();
  })
})
