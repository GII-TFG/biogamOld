
angular.module('starter.services', [])



/*.factory('DB', function($ionicPlatform, $cordovaSQLite){
  

  console.log("services");
    return {

      
      init: function(){

        window.plugins.sqlDB.copy("biogamdb",0, function(){
    
           db = $cordovaSQLite.openDB("biogamdb");

        }, function(error){
          
            db = $cordovaSQLite.openDB("biogamdb");
     
         });
          return db;
      }
    }
})*/
.factory('Temas', function($cordovaSQLite,$rootScope) {
  
      var temas = [];

  return {
    all: function() {
    
    var query ="SELECT name FROM tema";

    $cordovaSQLite.execute($rootScope.db, query).then(function(res){

        if(res.rows.length > 0){

          for(var i = 0; i<res.rows.length ; i++){
            temas.push({name: res.rows.item(i).name});
          }

        }else{

           console.log("Not found results");
        }

    })


      return temas;
    
    }
  };
})

.factory('TeoriaPorTema', function($cordovaSQLite,$rootScope) {
  
      var capsTeoria = [];

  return {
    getTeoriaDeTema: function(idTema) {
    
    var query ="SELECT titulo, texto FROM  teoria WHERE temaId=?";

    $cordovaSQLite.execute($rootScope.db, query, [idTema]).then(function(res){

        if(res.rows.length > 0){

          for(var i = 0; i<res.rows.length ; i++){
            capsTeoria.push({titulo: res.rows.item(i).titulo , texto:res.rows.item(i).texto});
          }

        }else{

           console.log("Not found results");
        }

    })


      return temas;
    
    }
  };
})

/*en vez de crearme estructuras complejas osea OneLous {id: name: relation_to_game_property:}
voy a crear las categorias de juego aparte, porque estas variables seran sustituidas por vuestras
cargas desde bd que ya de por si daran estructuras complejas

P.D. una estructura compleja es una estructura que tiene como uno de sus campos otra estrcutra */

.factory('Categorias', function($cordovaSQLite,$rootScope) {
 
  var categorias = [];

  return {

  
      
    getCategoriasTema: function(idTema) {

        var query ="SELECT name FROM categoria where idTema = ?";
     
    $cordovaSQLite.execute($rootScope.db, query, [idTema]).then(function(res){

        if(res.rows.length > 0){

          for(var i = 0; i<res.rows.length ; i++){
            categorias.push({titulo: res.rows.item(i).name });
          }

        }else{

           console.log("Not found results");
        }

    })
      return categorias;
    }
  };
});

  