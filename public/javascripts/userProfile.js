angular.module("app",['ngMaterial','ngRoute','mdPickers'])
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
            // updateUserEntityData: function(userEntityService){
            //   return userEntityService.updateUserEntityData('b4bc5412e7640090f4946b1417b3fc8792b4ec5d31e0810b9a8cab751e542975',entityData);
            // }
         }
     });
  })
  .controller("userEntityServiceController",function($scope,userEntityData,userEntityCustomData){
    console.log(userEntityCustomData);
    userEntityCustomObject=userEntityCustomData.data;
    console.log(userEntityCustomObject);
    $scope.userEntityCustomObject=userEntityCustomObject;

       setObj = function(obj, keyString,value) {
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

    $scope.reflectValue = function(keyString,value,id) {
          console.log("Inside Reflect Value");
          console.log(keyString);
          console.log(value);
          console.log(id);
          setObj($scope, keyString+"."+id, value);
   };


  $scope.entityData={
    "picture": "http://dummyimage.com/176x127.bmp/cc0000/ffffff",
    "id": "d8b2c57d203581d75fbdbb0786803ccbea3cb0328ae7014e5fe64f6cd1de9032",
    "role": "Administrative Officer",
    "band": "Spinach",
    "gender": "M",
    "first_name": "Arthur",
    "last_name": "Henry",
    "date_of_birth": "11/25/2015",
    "residential_address": "771 Dennis Way",
    "mobile": "466-45-5501",
    "other_contacts": "637-31-6140",
    "date_of_joining": "12/5/2015",
    "work_experience_in_year": 1,
    "language": ["Khmer", "Persian", "Kannada", "Arabic", "Khmer", "Aymara", "Indonesian", "Icelandic", "Icelandic", "Tetum"],
    "work_location": "2454 Muir Avenue",
    "projects": [{
      "project_id": "com.pinterest.Subin",
      "project_name": "NYLOXIN",
      "team_name": "Acnotex acne Treatment",
      "project_role": "Actuary",
      "manager": "Frances Bell"
    }],
    "passport_details": {
      "passport_number": 1,
      "date_of_expiry": "3/6/2016",
      "date_of_issue": "3/19/2016",
      "issuing_authority": "France"
    },
    "preferences": {
      "stay": {
        "rating": [26, 89, 98, 69, 2, 28, 26, 38, 25, 12],
        "location": ["Радовиш", "Baiyang", "Yazykovo", "Santa Catalina", "Bayshint", "Dingzhai", "El Obeid", "Komatsu", "Lagoa", "Mazra‘at Bayt Jinn"],
        "amenities": ["gov", "com", "net", "name", "info", "org", "name", "gov", "info", "info"],
        "price": ["$2.31", "$1.65", "$8.65", "$2.93", "$1.56", "$2.93", "$6.03", "$0.92", "$5.87", "$1.36"]
      },
      "booking": {
        "airlines": ["Dayu", "Radenković", "Fukura", "Zhabagly", "Ramon Magsaysay", "Hele", "Madīnat Lab‘ūs", "Lutomiersk", "Konispol", "Biris Daja"],
        "fare_type": true,
        "departure_time": ["3:20 AM", "10:43 PM", "3:45 PM"],
        "arrival_time": ["2:46 AM", "2:43 AM", "6:38 PM"],
        "no_of_stop": 1,
        "price": ["$2.52", "$9.48", "$4.07", "$0.50", "$0.26"]
      },
      "local_travel": {
        "price": ["$0.88", "$1.15", "$1.89"],
        "local_type": ["DOCUSATE SODIUM", "hydrochlorothiazide", "Trifluoperazine Hydrochloride"]
      }
    },
    "favorite_travel": {
      "travel_plan_id": "com.linkedin.Regrant",
      "comment": "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum."
    },
    "visa_availability": [{
      "from": "Mošorin",
      "to": "Pamoyanan",
      "visa_category": true
    }, {
      "from": "Lapa",
      "to": "Jiyukou",
      "visa_category": false
    }],
    "cost_code": "$74.06",
    "country": "FR"
   }

  //  $scope.update=function(){
  //     var response = userEntityService.updateUserEntityData();
  //  }

    // console.log(userEntityData);
    // var entityData=userEntityData.data[0];
    // console.log(entityData);
    // $scope.entityData=entityData;

    // var personalInfo={};
    // personalInfo.picture=entityData.picture;
    // personalInfo.first_name=entityData.first_name;
    // personalInfo.last_name=entityData.last_name;
    // personalInfo.role=entityData.role;
    // personalInfo.mobile=entityData.mobile;
    // personalInfo.work_location=entityData.work_location;
    //
    // projects=entityData.projects[0];
    // console.log(projects);
    //
    // passport_details=entityData.passport_details;
    // console.log(passport_details);
    //
    // visa_availability=entityData.visa_availability;
    // console.log(visa_availability);
    //
    // preferences=entityData.preferences;
    // console.log(preferences);
    //
    // var profileObject={};
    // profileObject.personalInfo=personalInfo;
    // profileObject.projects=projects;
    // profileObject.passport_details=passport_details;
    // profileObject.visa_availability=visa_availability;
    // profileObject.preferences=preferences;
    // $scope.profileObject=profileObject;
 });
