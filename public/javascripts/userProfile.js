angular.module("app",['ngMaterial','ngRoute','mdPickers'])
  .config(function($routeProvider){
     $routeProvider.when('/userProfile',{
       templateUrl:"userProfile.html",
       controller:"userEntityServiceController",
       resolve:{
            userEntityData: function(userEntityService){
              return userEntityService.getUserEntityData('tydalogger');
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

  .controller("userEntityServiceController",function($scope,userEntityService,userEntityData,userEntityCustomData){

    console.log(userEntityCustomData);
    userEntityCustomObject=userEntityCustomData.data;
    console.log(userEntityCustomObject);
    $scope.userEntityCustomObject=userEntityCustomObject;
    console.log(userEntityData);

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

   console.log(userEntityData);
   var entityData=userEntityData.data;
   console.log(entityData);
   entityData.picture="public/images/avatar-female.png"
   $scope.entityData=entityData;

   $scope.save=function(){
      console.log("inside save function");
      userEntityService.updateUserEntityData('tydalogger',entityData).then(function(err,data){
        if(err) console.log(err);
        console.log(data);
      });
   };

   var stayCustomData={
        "serviceDisplayName": "Stay",
        "serviceObject": {
          "location": {
            "specificAttr": {
              "url": "autoComplete.json"
            },
            "inputType": "autoComplete",
            "id": "location",
            "displayName": "City",
            "mandatory": true
          },
          "area": {
            "specificAttr": {
              "url": "autoComplete.json"
            },
            "inputType": "autoComplete",
            "id": "area",
            "displayName": "Area",
            "mandatory": true
          },
          "checkinDate": {
            "inputType": "date",
            "id": "checkoutDate",
            "displayName": "Check-out Date",
            "mandatory": true
          },
          "checkinTime": {
            "inputType": "time",
            "id": "checkinTime",
            "displayName": "Check-in Time",
            "mandatory": true
          },
          "checkoutTime": {
            "inputType": "time",
            "id": "checkoutTime",
            "displayName": "Check-out Time",
            "mandatory": true
          },
          "preferences": {
            "specificAttr": {
              "domainList": {
                "nonAc": "Non-Ac",
                "ac": "AC"
              }
            },
            "inputType": "singleSelect",
            "id": "preferences",
            "displayName": "Preferences",
            "mandatory": false
          },
          "rating": {
            "specificAttr": {
              "domainList": {
                "fourStar": "4-star",
                "threeStar":"3-star",
                "twoStar": "2-star",
                "oneStar": "1-star"
              }
            },
            "inputType": "singleSelect",
            "id": "rating",
            "displayName": "Rating",
            "mandatory": false
          },
          "typeOfProperty": {
            "specificAttr": {
              "domainList": {
                "hotels": "Hotels",
                "guestHouse": "Guest House"
              }
            },
            "inputType": "singleSelect",
            "id": "typeOfProperty",
            "displayName": "Type Of Property",
            "mandatory": true
          },
          "nearBy": {
            "specificAttr": {
              "endPointsTranslate": {
                "postfix": "miles",
                "prefix": ""
              },
              "sliderHandleTranslate": {
                "postfix": "mi",
                "prefix": ""
              },
              "noSwitching": true,
              "step": 1,
              "ceil": 100,
              "floor": 0
            },
            "inputType": "singleSlider",
            "id": "nearBy",
            "displayName": "Near By",
            "mandatory": false
          },
          "stars": {
            "specificAttr": {
              "domainList": {
                "fourStar": "4-star",
                "threeStar": "3-star",
                "twoStar": "2-star",
                "oneStar": "1-star"
              }
            },
            "inputType": "singleSelect",
            "id": "stars",
            "displayName": "Stars",
            "mandatory": false
          },
          "amenities": {
            "specificAttr": {
              "domainList": {
                "restaurants": "Restraunts",
                "fitness": "Fitness",
                "swimmingPools": "Swimming Pool",
                "meetingRooms": "Meeting Rooms"
              }
            },
            "inputType": "multiSelect",
            "id": "amenities",
            "displayName": "Amenities",
            "mandatory": false
          },
          "proximity": {
            "specificAttr": {
              "domainList": {
                "railwayStations": "Railway Stations",
                "airports": "Airports",
                "taxiStands": "Taxi Stands",
                "metroStation": "Metro Station"
              }
            },
            "inputType": "singleSelect",
            "id": "proximity",
            "displayName": "Proximity",
            "mandatory": false
          }
        }
};

var flightCustomData={
        "serviceDisplayName": "Flight",
        "serviceObject": {
          "travelStartDate": {
            "dataReference": "essential.travelStartDate",
            "inputType": "date",
            "id": "travelStartDate",
            "displayName": "Travel Start Date",
            "mandatory": true
          },
          "class": {
            "specificAttr": {
              "domainList": {
                "economy": "Economy",
                "bussiness": "Bussiness"
              }
            },
            "inputType": "singleSelect",
            "id": "class",
            "displayName": "Class",
            "mandatory": true
          },
          "numberOfHops": {
            "specificAttr": {
              "endPointsTranslate": {
                "postfix": "miles",
                "prefix": ""
              },
              "sliderHandleTranslate": {
                "prefix": "mi"
              },
              "noSwitching": true,
              "step": 1,
              "ceil": 100,
              "floor": 0
            },
            "inputType": "singleSlider",
            "id": "numberOfHops",
            "displayName": "Number of Hops",
            "mandatory": true
          },
          "departureTime": {
            "inputType": "time",
            "id": "departureTime",
            "displayName": "Departure Time",
            "mandatory": false
          },
          "airlines": {
            "specificAttr": {
              "domainList": {
                "jet": "Jet",
                "airCosta": "Air Costa",
                "airAisa": "Air Asia"
              }
            },
            "inputType": "singleSelect",
            "id": "airlines",
            "displayName": "Airlines",
            "mandatory": false
          }
        }
   };
   var trainCustomData={
        "serviceDisplayName": "Train",
        "serviceObject": {
          "travelStartDate": {
            "dataReference": "essential.travelStartDate",
            "inputType": "date",
            "id": "travelStartDate",
            "displayName": "Travel Start Date",
            "mandatory": true
          },
          "class": {
            "specificAttr": {
              "domainList": {
                "3AC": "third Ac",
                "sleeper": "Sleeper"
              }
            },
            "inputType": "singleSelect",
            "id": "class",
            "displayName": "Class",
            "mandatory": true
          },
          "departureTime": {
            "inputType": "time",
            "id": "departureTime",
            "displayName": "Departure Time",
            "mandatory": false
          }
        }
      };
      var busCustomData={
        "serviceDisplayName": "Bus",
        "serviceObject": {
          "travelStartDate": {
            "dataReference": "essential.travelStartDate",
            "inputType": "date",
            "id": "travelStartDate",
            "displayName": "Travel Start Date",
            "mandatory": true
          },
          "class": {
            "specificAttr": {
              "domainList": {
                "SemiSleeper": "Semi-Sleeper",
                "sleeper": "Sleeper"
              }
            },
            "inputType": "singleSelect",
            "id": "class",
            "displayName": "Class",
            "mandatory": true
          },
          "departureTime": {
            "inputType": "time",
            "id": "departureTime",
            "displayName": "Departure Time",
            "mandatory": false
          }
        }
      };

  var localTravelCustomData={
          "serviceDisplayName": "Local Travel",
          "serviceObject": {
            "pickupPoint": {
              "specificAttr": {
                "url": "autoComplete.json"
              },
              "inputType": "autoComplete",
              "id": "pickupPoint",
              "displayName": "Pick-up Point",
              "mandatory": true
            },
            "dropPoint": {
              "specificAttr": {
                "url": "autoComplete.json"
              },
              "inputType": "autoComplete",
              "id": "dropPoint",
              "displayName": "Drop Point",
              "mandatory": true
            },
            "typeOfLocalTransport": {
              "specificAttr": {
                "domainList": {
                  "bus": "Bus",
                  "cab": "Cab"
                }
              },
              "inputType": "singleSelect",
              "displayName": "Type",
              "id": "typeOfLocalTransport",
              "mandatory": true
            },
            "pickupDate": {
              "inputType": "date",
              "id": "pickupDate",
              "displayName": "Pick up Date",
              "mandatory": true
            },
            "pickupTime": {
              "inputType": "time",
              "id": "pickupTime",
              "displayName": "Pick up Time",
              "mandatory": true
            }
          }
        };

    var preferencesArray=[];
    preferencesArray.push(stayCustomData);
    preferencesArray.push(flightCustomData);
    preferencesArray.push(trainCustomData);
    preferencesArray.push(busCustomData);
    preferencesArray.push(localTravelCustomData);
    $scope.preferencesArray=preferencesArray;
 });
