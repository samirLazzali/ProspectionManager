var ajouterProspectionVue = function()
{
  
  this.afficher = function(actionajouterProspection)
  {
    $("body").html(ajouterProspectionVue.html);
    
    $("#formulaire-ajouter").on("submit", $.proxy(this.ajouterProspection, this));
    
    this.actionajouterProspection = actionajouterProspection;
    
  }
  
  this.ajouterProspection = function()
  {
			var nom = $("#Prospection-nom").val();
			var description = $("#Prospection-description").val();
      var prospection = new Prospection(id=null,nom,description);
      this.actionajouterProspection(prospection);
      
			window.location.hash = "";
			event.preventDefault();		
    
  }
}
ajouterProspectionVue.html = $("#page-ajouter-Prospection").html();

