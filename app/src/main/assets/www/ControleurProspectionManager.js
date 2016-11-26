var ControleurProspectionManager = {
	lancer:function(){
		this.prospectionManagerDAO = new ProspectionManagerDAO();
		this.listeProscpection = this.prospectionManagerDAO.getListeProspection();
		$(window).on('hashchange', $.proxy(this.naviguer, this));
		this.naviguer();

	},
	naviguer:function(){
		var ancre = window.location.hash;
		//si rien n'est specifier dans l'URL => on charge page index
		if(!ancre){
			//charger la page d'index
			this.IndexVue = new IndexVue(this.listeProscpection)
			this.IndexVue.afficher();

		}else if(ancre.match(/^#page-ajout/)){
			//charger la page d'ajout
			this.ajouterProspection = new AjouterProspection();
			this.ajouterProspection.afficher();	
		}else{
			var trouvailles = ancre.match(/^#prospection\/([0-9]+)/);
			var idProspection = trouvailles[1];
			var prospection = this.prospectionManagerDAO.idVersObjet(idProspection);		
			//this.cadeauVue = new CadeauVue(this.liste_cadeaux[idCadeau]);
			this.prospectionVue = new ProspectionVue(prospection);
			this.prospectionVue.afficher();
		}
	}
}
ControleurProspectionManager.lancer();