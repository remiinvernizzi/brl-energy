var form = document.getElementById('form_espira');

//Fonction d'ajout de relevés
function ajoutReleve(donnees){

}

//Gestion de la soumission du formulaire
form.addEventListener("submit", function(e){
  e.preventDefault();

  var validForm = true;

  //Récupération du lien vers tous les 'input'
  var inputElts = document.getElementsByTagName("input");
  //Expression régulière d'une chaine ne contenant que des chiffres
  var regexInput = /^[0-9]+/;

  //Vérification de chaque valeur de 'input'
  for(var i = 0; i < inputElts.length-1; i++){
    if(!regexInput.test(inputElts[i].value)){
      console.log("Mauvaise Saisie");
      inputElts[i].style.backgroundColor = "#ED9D4C";
      validForm = false;
      break;
    }
    else{
      inputElts[i].style.backgroundColor = "";
    };
  };

  if(validForm === true)
  {
    console.log("OK");
  }
});
