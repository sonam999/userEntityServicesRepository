angular.module("app").factory("userEntityService",function($http){
  return {
    getUserEntityData: function(id) {
      return $http.get("http://localhost:3040/api/userEntity/"+id);
    },
    getUserEntityCustomData: function(){
      console.log("hey");
      return $http.get("data/userEntityCustomJson.json");
    }
  }
});
