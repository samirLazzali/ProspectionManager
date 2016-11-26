var ProspectionManagerDAO = function(){
	//Constructeur 
	//Nom
	//Description
	this.listeProspection = [

	{"idProspection":1, "nomProspection":"LinkedIn", "descriptionProspection":"Prendre un photo pour le profil"},
	{"idProspection":2, "nomProspection":"Rechercher","descriptionProspection":"Rechercher d'éventelle entreprise"},
	{"idProspection":3, "nomProspection":"CV","descriptionProspection":"Commencer a envoyer des cv"}
	];
	this.getListeProspection = function(){
		return this.listeProspection;
	}

	this.idVersObjet = function(idProspection){
		for(var noProspection in this.listeProspection){
			if(this.listeProspection[noProspection].id == idProspection){
				return this.listeProspection[noProspection];
			}
		}
	};

}