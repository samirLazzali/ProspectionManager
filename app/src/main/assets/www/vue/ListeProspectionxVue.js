var ListeProspectionxVue = function(listeProspections)
{
  this.afficher = function()
  {
    $("body").html(ListeProspectionxVue.html);
    var html_listeProspections = $("#liste-Prospection");
    var htmlEnConstruction = "";
    
    for(var no_Prospection in listeProspections)
    {
        htmlEnConstruction += 
          ListeProspectionxVue.html_item
          .replace("{ID}",listeProspections[no_Prospection].id)
          .replace("{NOM}",listeProspections[no_Prospection].nom);
    }
    html_listeProspections.html(htmlEnConstruction);
  }
}
ListeProspectionxVue.html = $("#page-liste-Prospection").html();
ListeProspectionxVue.html_item = $("#item-liste-Prospection").html();