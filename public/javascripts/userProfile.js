angular.module("app",['ngMaterial','ngRoute','mdPickers'])
  .factory('_',function() {
    return window._;
  })
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
            // stayCustomData: function(userEntityService){
            //     return userEntityService.getStayCustomData();
            // },
            // flightCustomData: function(userEntityService){
            //     return userEntityService.getFlightCustomData();
            // },
            // trainCustomData: function(userEntityService){
            //     return userEntityService.getTrainCustomData();
            // },
            // busCustomData:function(userEntityService){
            //     return userEntityService.getBusCustomData();
            // },
            // localTravelCustomData:function(userEntityService){
            //     return userEntityService.getLocalTravelCustomData();
            // }
         }
     });
  })

  .controller("userEntityServiceController",function($scope,userEntityService,userEntityData,userEntityCustomData,_){
    var obj = {name:'sonam',age:'23'};
    console.log(_.pick(obj,'name'));
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
      console.log(entityData);
      userEntityService.updateUserEntityData('tydalogger',entityData).then(function(response){
        console.log(response.data);
      });
   };

      var pickDeep=function(collection, identity, thisArg) {
      var picked = _.pick(collection, identity, thisArg);
      var collections = _.pick(collection, _.isObject, thisArg);

      _.each(collections, function(item, key, collection) {
          var object;
          if (_.isArray(item)) {
              object = _.reduce(item, function(result, value) {
                  var picked = pickDeep(value, identity, thisArg);
                  if (!_.isEmpty(picked)) {
                      result.push(picked);
                  }
                  return result;
              }, []);
          } else {
              object = pickDeep(item, identity, thisArg);
          }

          if (!_.isEmpty(object)) {
              picked[key] = object;
          }

      });
    return picked;
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
var stayData=pickDeep(stayCustomData,['serviceDisplayName','preferences','rating','typeOfProperty','stars','amenities']);
console.log("pickDeep method result");
console.log(stayData);
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

   var flightData=pickDeep(flightCustomData,['serviceDisplayName','airlines','class']);
   console.log(flightData);
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
    var trainData=pickDeep(trainCustomData,['serviceDisplayName','class']);
    console.log(trainData);
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
  var busData=pickDeep(busCustomData,['serviceDisplayName','class']);
  console.log(busData);
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
    var localTravelData=pickDeep(localTravelCustomData,['serviceDisplayName','typeOfLocalTransport']);
    console.log(localTravelData);
    var preferencesArray=[];
    preferencesArray.push(stayData);
    preferencesArray.push(flightData);
    preferencesArray.push(trainData);
    preferencesArray.push(busData);
    preferencesArray.push(localTravelData);
    $scope.preferencesArray=preferencesArray;
 });
