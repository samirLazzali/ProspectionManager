var ProspectionVue = function (prospection){
	this.afficher = function(){
		var htmlEnConstruction = ProspectionVue.html
		.replace("{NOM}", prospection.nomProspection)
		.replace("{DESCRIPTION}", prospection.descriptionProspection);
		
		$("body").html(htmlEnConstruction);
		//$("#cadeau-nom").html(cadeau.nom);
		//$("#cadeau-marque").html(cadeau.marque);
		//$("#cadeau-description").html(cadeau.description);
	}
}

ProspectionVue.html = $("#page-details").html();
