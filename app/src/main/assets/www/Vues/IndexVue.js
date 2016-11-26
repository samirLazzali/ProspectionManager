var IndexVue = function(listeProspection){
	this.afficher = function(){
		$("body").html(IndexVue.html);
		var htmlListeProspection = $("#listeProspection");
		var htmlEnContruction = "";
		alert(listeProspection[0].nom);
		for(var noProspection in listeProspection){
			htmlEnContruction += IndexVue.html_item
			.replace("{ID}", listeProspection[noProspection].idProspection)
			.replace("{NOM}", listeProspection[noProspection].nomProspection)
		}
		htmlListeProspection.html(htmlEnContruction);
	}
}
IndexVue.html = $("#page-index").html();

IndexVue.html_item = $("#itemListeProspection").html();
