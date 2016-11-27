/**********************************************************
** Fichier de gestion des formulaires d'Espira de l'Agly **
**********************************************************/

//Classe du formulaire de la station Espira
var EspiraForm = {
  //Initialisation du formulaire
  init : function(input){
    //Elements composant chaque input
    this.label = input.label; //Label de l'input
    this.name = input.name; //Name et Id de l'input
    this.div = input.div; //Div qui contient l'input
  },

  //Affichage du formulaire
  affichage : function(){
    //Recherche si la balise 'div' avec l'id this.div existe
    if(!document.getElementById(this.div)){
      //Création du div s'il n'existe pas et définition de son identifiant
      var divElt = document.createElement("div");
      divElt.id = this.div;
    }
    else{
      //Récupération du div s'il existe
      var divElt = document.getElementById(this.div);
    }
    //Ajout des champs au div puis affichage
    divElt.innerHTML += "<label for=\"" + this.name + "\">" + this.label + "</label>";
    divElt.innerHTML += "<input type=\"text\" name=\"" + this.name + "\" id=\"" + this.name + "\" required/><br>";
    document.getElementById("gestion").appendChild(divElt);
  },

  //Vérifcation que le champ contient un nombre et seulement un nombre
  numVerif : function(inputElt){
    //Expression régulière d'une chaîne ne contenant que des chiffres
    var regexInput = /^[0-9]+/;
    //Retourne la valeur booleenne du test de l'expression régulière
    return regexInput.test(inputElt.value);
  },
};
