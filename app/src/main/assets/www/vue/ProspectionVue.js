var ProspectionVue = function(Prospection)
{
  this.afficher = function()
  {
    var htmlEnConstruction = 
      ProspectionVue.html
      .replace("{ID}",Prospection.id)
      .replace("{NOM}",Prospection.nom)
      .replace("{DESCRIPTION}",Prospection.description);
    
    $("body").html(htmlEnConstruction);
  }



}
ProspectionVue.html = $("#page-Prospection").html();

// TODO : revenir à la liste