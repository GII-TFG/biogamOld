
var db;
angular.module('starter.services', [])



.factory('DB', function($ionicPlatform, $cordovaSQLite){
  

  console.log("services");
    return {

      
      init: function(){

        window.plugins.sqlDB.copy("biogamdb",0, function(){
    
         db = $cordovaSQLite.openDB("biogamdb");

        }, function(error){
          
          console.log("estoy abriendo la bd");
         db = $cordovaSQLite.openDB("biogamdb");
     
         });
          return db;
      }
    }
})
.factory('Temas', function($cordovaSQLite) {
  

  var games;

  return {
    all: function() {
    
    var query ="SELECT tema FROM tema";

    $cordovaSQLite.execute(db, query).then(function(resultado){

        if(resultado.rows.length > 0){

          console.log(resultado.rows.item(0).tema);
        }else{

           console.log("Not found results");
        }

    })


      return null;
    
    }
  };
})

/*en vez de crearme estructuras complejas osea OneLous {id: name: relation_to_game_property:}
voy a crear las categorias de juego aparte, porque estas variables seran sustituidas por vuestras
cargas desde bd que ya de por si daran estructuras complejas

P.D. una estructura compleja es una estructura que tiene como uno de sus campos otra estrcutra */

.factory('TypeGame', function() {
 
  var typeGames = [{
    id: 0,
    name: 'Theory',
     
  }, {
    id: 1,
    name: 'Exercises',
      
  }, {
    id: 2,
    name: 'Test',
     
  }];

  return {
    all: function() {
      return typeGames;
    },
   
    get: function(typeGameId) {
      for (var i = 0; i < typeGames.length; i++) {
        if (typeGames[i].id === parseInt(typeGameId)) {
          return typeGames[i];
        }
      }
      return null;
    }
  };
});

  