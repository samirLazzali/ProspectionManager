
var ModifierProspectionVue = function(prospection)
{  
  this.afficher = function(actionModifierProspection)
  {
    $("body").html(ModifierProspectionVue.html);
	document.getElementById("Prospection-nom").value = prospection.nom;
	document.getElementById("Prospection-description").value = prospection.description;

    $("#formulaire-modifier").on("submit", $.proxy(this.modifierProspection, this));
    this.actionModifierProspection = actionModifierProspection;
    
  }
  
  this.modifierProspection = function()
  {

	var nom = $("#Prospection-nom").val();
	var description = $("#Prospection-description").val();
	var nouvelleProspection = new Prospection(prospection.id,nom,description);
	

    this.actionModifierProspection(nouvelleProspection);

	window.location.hash = "";
	event.preventDefault();	
    
  }
}
ModifierProspectionVue.html = $("#page-modifier-Prospection").html();

