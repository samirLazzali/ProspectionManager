function Delete()
{
  this.baseDeDonnees.transaction(
      function(operation)
      {
        var SQL_CREATION = "DROP TABLE IF EXISTS prospection";

        operation.executeSql(SQL_CREATION);
      },
      this.reagirErreur,
      this.reagirSucces
    );
}