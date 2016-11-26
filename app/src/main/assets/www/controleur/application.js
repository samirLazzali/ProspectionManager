var applicationProspectionManager = {
  lancer:function()
  {
    this.ProspectionDAO = new ProspectionDAO();

    
    $(window).on('hashchange', $.proxy(this.naviguer, this));
    
    this.naviguer();
  },
  naviguer:function()
  {
    //alert("Naviguer selon : "+window.location.hash);
    var ancre = window.location.hash;
    if(!ancre)
    {
      this.ProspectionDAO.listerToutesLesProspection($.proxy(this.afficherTousLesProspection, this)); 
    }
    else if(ancre.match(/^#ajouter-Prospection/)) 
    {
      this.ajouterProspectionVue = new ajouterProspectionVue();
      this.ajouterProspectionVue.afficher($.proxy(this.sauvegarderNouveauProspection, this)); 
    }
    else if(ancre.match(/^#modifier-Prospection\/([0-9]+)/)) 
    {
      var trouvailles = ancre.match(/^#modifier-Prospection\/([0-9]+)/);
      var id_Prospection = trouvailles[1];
      var Prospection = this.ProspectionDAO.trouverProspectionParId(id_Prospection);
      this.modifierProspectionVue = new ModifierProspectionVue(Prospection);
      this.modifierProspectionVue.afficher($.proxy(this.modifierProspection, this)); 
    }
    else
    {
      var trouvailles = ancre.match(/^#Prospection\/([0-9]+)/);
      var id_Prospection = trouvailles[1];
      var Prospection = this.ProspectionDAO.trouverProspectionParId(id_Prospection);
      this.ProspectionVue = new ProspectionVue(Prospection);
      this.ProspectionVue.afficher();    
    }
  },
  
  sauvegarderNouveauProspection:function(Prospection)
  {
    this.ProspectionDAO.ajouterProspection(Prospection);
  },

  modifierProspection:function(Prospection)
  {
    this.ProspectionDAO.modifierProspection(Prospection);
  },

  
  afficherTousLesProspection:function(listeProspections)
  {
    this.listeProspectionxVue = new ListeProspectionxVue(listeProspections);
    this.listeProspectionxVue.afficher();      
  }
  
};

applicationProspectionManager.lancer();




















