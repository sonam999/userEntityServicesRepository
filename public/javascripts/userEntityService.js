angular.module("app").factory("userEntityService",function($http){
   return {
    getUserEntityData: function(id) {
      return $http.get("http://localhost:3040/api/userEntity/"+id);
    },
    getUserEntityCustomData: function(){
      console.log("hey");
      return $http.get("data/userEntityCustomJson.json");
    },
    updateUserEntityData:function(id,entityData){
      console.log("inside service.....");
      console.log(entityData);
      return $http.put("http://localhost:3040/api/userEntity/"+id,entityData);
    }
    // getStayCustomData: function(){
    //   return $http.get("http://172.23.238.178:8080/node/wipro/en/service/stay");
    // },
    // getFlightCustomData: function(){
    //   return $http.get("http://172.23.238.178:8080/edge/wipro/en/service/flight");
    // },
    // getTrainCustomData: function(){
    //   return $http.get("http://172.23.238.178:8080/edge/wipro/en/service/train");
    // },
    // getBusCustomData:function(){
    //  return $http.get("http://172.23.238.178:8080/edge/wipro/en/service/bus");
    // },
    // getLocalTravelCustomData:function(){
    //  return $http.get("http://172.23.238.178:8080/node/wipro/en/service/localTravel");
    // }
  }
});
