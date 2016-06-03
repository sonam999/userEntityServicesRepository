angular.module("app",['ngMaterial','ngRoute'])
  .config(function($routeProvider){
     $routeProvider.when('/userProfile',{
       templateUrl:"userProfile.html",
       controller:"userEntityServiceController",
       resolve:{
            userEntityData: function(userEntityService){
              return userEntityService.getUserEntityData('b4bc5412e7640090f4946b1417b3fc8792b4ec5d31e0810b9a8cab751e542975');
            },
            userEntityCustomData: function(userEntityService){
              return userEntityService.getUserEntityCustomData();
            }
         }
     });
  })
  .controller("userEntityServiceController",function($scope,userEntityData,userEntityCustomData){
    console.log(userEntityCustomData);
    userEntityCustomObject=userEntityCustomData.data;
    console.log(userEntityCustomObject);
    $scope.userEntityCustomObject=userEntityCustomObject;
    $scope.selecledValue;
    var setObj = function(obj, keyString,value) {
      		console.log("Before Replace ", keyString)
          keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
          console.log("After first replace", keyString);
          keyString = keyString.replace(/^\./, '');           // strip a leading dot
          console.log("After second replace", keyString);
          var hierarchyWiseKeysArray = keyString.split('.');

          while (hierarchyWiseKeysArray.length > 1)
              obj = obj[hierarchyWiseKeysArray.shift()];
          return obj[hierarchyWiseKeysArray.shift()] = value;
   };

    $scope.reflectValue = function(keyString,value) {
          console.log("Inside Reflect Value");
          console.log(keyString);
          console.log(value);
          setObj(ctrl, keyString, value);
   };
    console.log(userEntityData);
    var entityData=userEntityData.data[0];
    console.log(entityData);

    var personalInfo={};
    personalInfo.picture=entityData.picture;
    personalInfo.first_name=entityData.first_name;
    personalInfo.last_name=entityData.last_name;
    personalInfo.role=entityData.role;
    personalInfo.mobile=entityData.mobile;
    personalInfo.work_location=entityData.work_location;

    projects=entityData.projects[0];
    console.log(projects);

    passport_details=entityData.passport_details;
    console.log(passport_details);

    visa_availability=entityData.visa_availability;
    console.log(visa_availability);

    preferences=entityData.preferences;
    console.log(preferences);

    var profileObject={};
    profileObject.personalInfo=personalInfo;
    profileObject.projects=projects;
    profileObject.passport_details=passport_details;
    profileObject.visa_availability=visa_availability;
    profileObject.preferences=preferences;

    $scope.profileObject=profileObject;
 });
