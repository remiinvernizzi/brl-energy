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

  //Affichage des champs du formulaire
  affichageChamp : function(){
    //Récupération du div s'il existe
    var divElt = document.getElementById(this.div);

    //Détection de l'identifiant du div 'energie'
    if(this.div == "energie"){
      //Ajout du champ au fielset
      var fieldsetElt = this.fieldsetAdd();
      //Ajout des champs au fieldset puis au div
      fieldsetElt.innerHTML += "<label for=\"" + this.name + "\">" + this.label + "</label>";
      fieldsetElt.innerHTML += "<input type=\"text\" name=\"" + this.name + "\" id=\"" + this.name + "\" size=\"10\" required/>";
      //Mise à jour du fielset
      divElt.appendChild(fieldsetElt);
    }
    else{
      //Ajout des champs au div
      divElt.innerHTML += "<label for=\"" + this.name + "\">" + this.label + "</label>";
      divElt.innerHTML += "<input type=\"text\" name=\"" + this.name + "\" id=\"" + this.name + "\" size=\"10\" required/>";
      //Mise à jour du div
      document.getElementById("formStation").appendChild(divElt);
    }
  },

  //Affichage du bouton de validationdu formulaire
  affichageSubmit : function(){
    //Creation du div du bouton de validation
    var divSubmit = document.getElementById("submit");
    //Ajout du bouton au div puis affichage
    divSubmit.innerHTML += "<input type=\"submit\" value=\"Ajouter les relevés\">";
    document.getElementById("formStation").appendChild(divSubmit);
  },

  //Creation du squellette de base du formulaire
  creationForm : function(){
    var divForm = document.createElement("form");
    var divDateElt = document.createElement("div");
    var divDonneesElt = document.createElement("div");
    var divEnergieElt = document.createElement("div");
    var divSubmit = document.createElement("div");

    divForm.id = "formStation";
    divDateElt.id = "date";
    divDonneesElt.id = "donnees";
    divEnergieElt.id = "energie";
    divSubmit.id = "submit";

    divForm.appendChild(divDateElt);
    divForm.appendChild(divDonneesElt);
    divForm.appendChild(divEnergieElt);
    divForm.appendChild(divSubmit);

    document.getElementById("gestion").appendChild(divForm);
  },

  //Ajout du champ dans un fieldset
  fieldsetAdd : function(){
    var splitted = this.name.split('_');
    //Recherche si la balise 'fielset' avec l'id splitted[1] existe
    if(!document.getElementById(splitted[1])){
      //Création du div s'il n'existe pas et définition de son identifiant
      var fieldsetElt = document.createElement("fieldset");
      fieldsetElt.id = splitted[1];
      fieldsetElt.innerHTML = "<legend>" + splitted[1].toUpperCase() + "</legend>";
    }
    else{
      //Récupération du div s'il existe
      var fieldsetElt = document.getElementById(splitted[1]);
    }
    return fieldsetElt;
  },

  //Vérifcation que le champ contient un nombre et seulement un nombre
  numVerif : function(inputElt){
    //Expression régulière d'une chaîne ne contenant que des chiffres
    var regexInput = /^[0-9]+/;
    //Retourne la valeur booleenne du test de l'expression régulière
    return regexInput.test(inputElt.value);
  },
};
