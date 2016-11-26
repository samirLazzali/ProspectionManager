//http://www.sqlite.org/lang_expr.html#varparam
var ProspectionDAO = function()
{
  this.listeProspections = [];
  
	this.initialiser = function()
	{
		var SQL_CREATION = "CREATE TABLE IF NOT EXISTS prospection(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50),  description TEXT)";
		this.baseDeDonnees = window.openDatabase("ListeDeProspections", "1.0", "Liste De Prospections", 200000);
		
		this.baseDeDonnees.transaction(
			function(operation)
			{
				var SQL_CREATION = "CREATE TABLE IF NOT EXISTS prospection(id INTEGER PRIMARY KEY AUTOINCREMENT, nom VARCHAR(50),  description TEXT)";
        
				operation.executeSql(SQL_CREATION);
			},
			this.reagirErreur,
			this.reagirSucces
		);
	}
  
	this.ajouterProspection = function(prospection)
	{
		this.baseDeDonnees.transaction(
			function(operation)
			{
				//alert("ajouterProspection");
				var SQL_AJOUT = "INSERT INTO prospection (nom, description) VALUES(?,?)";
				var parametres = [prospection.nom, prospection.description];
				operation.executeSql(SQL_AJOUT, parametres);
			},
			this.reagirErreur,
			this.reagirSucces
		);
	}	

  this.modifierProspection = function(prospection)
  {
    this.baseDeDonnees.transaction(
      function(operation)
      {
        //alert("ajouterProspection");
        var SQL_UPDATE = "UPDATE prospection SET nom = ?, description = ? where id=?";
        var parametres = [prospection.nom, prospection.description,prospection.id];
        operation.executeSql(SQL_UPDATE, parametres);
      },
      this.reagirErreur,
      this.reagirSucces
    );
  }


  
	this.listerToutesLesProspection = function(finalisation)
	{
		this.baseDeDonnees.transaction(
      // operation
      $.proxy(
        function(operation)
        {
          var SQL_SELECTION = "SELECT * FROM prospection";
          operation.executeSql(SQL_SELECTION, [], 
          $.proxy(
            function(operation, resultat)
            {					
              this.listeProspections = [];
              for(var position=0; position<resultat.rows.length; position++)
              {
                var enregistrementProspection = resultat.rows.item(position);
                var prospection = 
                  new Prospection(
                    enregistrementProspection.id,
                    enregistrementProspection.nom, 
                    enregistrementProspection.description);
                this.listeProspections[this.listeProspections.length] = prospection;
                        
              }
            },this));
        },
        this),
				
      // erreur
      this.reagirErreur,
      
      // succes
      $.proxy(
        function(){
          finalisation(this.listeProspections);
        },
      this)
    );			
	}
  
    
 	this.reagirErreur = function(erreur)
	{
		console.log("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
		alert("ERREUR:SQL:" + erreur.code + ":" + erreur.message);
	}
	
	this.reagirSucces = function()
	{
		console.log("SUCCES:SQL:");
		alert("SUCCES:SQL:");
	}

  this.initialiser();

  
  this.trouverProspectionParId = function(id_prospection)
  {
    for(var noProspection in this.listeProspections)
    {
      if(this.listeProspections[noProspection].id == id_prospection)
      {
        return this.listeProspections[noProspection];
      }
    }
  }; 
}
