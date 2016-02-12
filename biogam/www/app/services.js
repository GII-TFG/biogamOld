
angular.module('starter.services', [])

.factory('Games', function() {
  // Might use a resource here that returns a JSON array

  // Para mis chicas preciosas:
  /*Voy a poner unos datos estaticos para ir tirando de ellos y hacer las cosas bien en las vistas evitando hard-code,
    en esta variable games guardare los juegos, que tendran un id que nunca sera el nombre del juego, lo mismo en la bd,
    el name (locus, loci....), y por ultimo una descripcion, se que en la bd habra mas campos pero de momento con eso me sirve,
    esta variable games representara los datos que se cargan desde la bd , ojo cuando lo consigais tendreis que meter todo en la
    misma varibale asi no habra repercusiones posteriores 	*/
  var games = [{
    id: 0,
    name: 'One Locus',
    description: ''
  
  }, {
    id: 1,
    name: 'Two loci',
    description: ''
    
  }, {
    id: 2,
    name: 'Mitosis',
    description: ''
  
  }, {
    id: 3,
    name: 'Meiosis',
    description: ''
 
  }];

  return {
    all: function() {
      return games;
    },
   
    get: function(gameId) {
      for (var i = 0; i < games.length; i++) {
        if (games[i].id === parseInt(gameId)) {
          return games[i];
        }
      }
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

