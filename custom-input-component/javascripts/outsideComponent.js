angular.module('app')
  .component('outsideComponent',{
    templateUrl: "../views/outsideComponent.html",
    controller: OutsideComponentCtrl
});


var setObj = function(obj, keyString,value) {
		console.log("Before Replace ", keyString)
    keyString = keyString.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    console.log("After first replace", keyString);
    keyString = keyString.replace(/^\./, '');           // strip a leading dot
    console.log("After second replace", keyString);
    var hierarchyWiseKeysArray = keyString.split('.');
    console.log(hierarchyWiseKeysArray);
    while (hierarchyWiseKeysArray.length > 1)
        obj = obj[hierarchyWiseKeysArray.shift()];
    return obj[hierarchyWiseKeysArray.shift()] = value;

}

function OutsideComponentCtrl($scope) {
  console.log('Outside Components');
  var ctrl = this;

  //Since One way binding has been followed in it,
  //hence changes in the children elements will be reflected in the corresponding parents elements using this exposed function.

  ctrl.reflectValue = function(keyString,value) {
    console.log("Inside Reflect Value");
    console.log(keyString);
    console.log(value);
    setObj(ctrl, keyString, value);

  };


  //Text input Data
  ctrl.textInput = {};
  ctrl.textInput.label = "Some Nice Label";
  ctrl.textInput.data = "Some Nice Data";
  ctrl.textInput.specificAttr = {
    "ngPattern": "/^[0-9]{3}-[0-9]{2}-[0-9]{4}$/",
    "ngHint": "###-##-####",
    "ngMessage": "###-##-#### - Please enter a valid SSN."
  }

  //checkBox input Data
  ctrl.checkBoxInput = {};
  ctrl.checkBoxInput.label = "Select your super hero";
  ctrl.checkBoxInput.specificAttr = {
    "domainList": ["Superman", "Batman", "Spiderman", "Ironman"]
  };
  ctrl.checkBoxInput.specificAttr.operateOnSelecteditems = function(currentSelectedItems) {
    console.log("Inside operateOnSelecteditems");
    console.log(currentSelectedItems);
  }

  //singleSelect input data
  ctrl.singleSelectInput = {};
  ctrl.singleSelectInput.label = "Best Food";
  ctrl.singleSelectInput.selectedData;
  ctrl.singleSelectInput.specificAttr = {
    "listLabelKey":'label',
    "listValueKey":'value',
    "domainList": [
             {"label":"Pizza","value":"pizza"},
             {"label":"Burger","value":"burger"},
             {"label":"Salad","value":"salad"}
           ]
           /*, "domainList":["pizza","burger","ice-cream"]*/
          // The consuming component can take array as well as atomic objects as domainList

  };

  //multiSelect Input Data
  ctrl.multiSelectInput = {
                  "required": true,
                  "label": "Food",
                  "specificAttr":{
                    "listLabelKey":'category',
                    "listValueKey":'name',
                   "domainList":["pizza","burger","ice-cream"]


                    // "domainList": [
                    //                 { category: 'meat', name: 'Pepperoni' },
                    //                 { category: 'meat', name: 'Sausage' },
                    //                 { category: 'meat', name: 'Ground Beef' },
                    //                 { category: 'meat', name: 'Bacon' },
                    //                 { category: 'veg', name: 'Mushrooms' },
                    //                 { category: 'veg', name: 'Onion' },
                    //                 { category: 'veg', name: 'Green Pepper' },
                    //                 { category: 'veg', name: 'Green Olives' }
                    //               ]

                }
              };

  // ctrl.multiSelectInput.data;





  //DatePicker Model

  ctrl.datelabel = "Checkin Date";
  //slider
  ctrl.selectedSliderValue=null;
  ctrl.sliderData={

                        "required": true,
                        "label": "Slider",
                        "id": "slider",
                        "type": "slider",
                        "specificAttr":{
                        "min":1,
                        "max":10
                      }

  }


    // ctrl.selectedData = "";



  ctrl.autoCompleteInput={

      "required":true,
      "label": "states",
      "type":"autoComplete",
      "specificAttr":{
             "minLength":2,
             "maxLength":18

      }
  }
  ctrl.selectedAuto=null;
  ctrl.autoCompleteInput.selectedAutocompleteData=null;
        states = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
         Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
         Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
         Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
         North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
         South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
         Wisconsin, Wyoming';
        function createFilterFor(query) {
            var lowercaseQuery = angular.lowercase(query);

            return function filterFn(state) {
              return (state.value.indexOf(lowercaseQuery) === 0);
            };

          }
          ctrl.states= loadAll();
        ctrl.autoCompleteInput.specificAttr.querySearch =  function  (query) {

          var results = query ? ctrl.states.filter( createFilterFor(query) ) : [];
          return results;
        }

    /**
     * Build `states` list of key/value pairs
     */
    function loadAll() {
      console.log("inside loadAll")
      //
      // $http.get("autoComplete/states.json").success(function(response, error){
      //   console.log("inside http get");
      //   console.log(response);
      //   allStates = response;
      //   console.log(error);
      // });
      // console.log(ctrl.specificAttr.domainList)
      // var allStates =ctrl.specificAttr.domainList;
    //   console.log(allStates);
     //
     a=states.split(/, +/g).map( function (state) {
        return {
          value: state.toLowerCase(),
          display: state
        };
      });

     console.log("a is");
     console.log(a);

      return a;
    }


  //CheckBox

  ctrl.selectedCheckBoxData = [];

  ctrl.checkBoxLabel = "Check Box";

  // function exists(item, selected) {
  //   return list.indexOf(item) > -1;
  // }
  //
  // var toggle = function (item, list) {
  //       var idx = list.indexOf(item);
  //       if (idx > -1) list.splice(idx, 1);
  //       else list.push(item);
  //     };
  // ctrl.checkBoxData = {};
  // ctrl.checkBoxData.specificAttr = {
  //   "domainList": ["Pizza", "Burgers", "Sandwich"],
  //
  // }
  // ctrl.checkBoxData.specificAttr.operateOnSelecteditems = function(currentSelectedItems) {
  //   console.log("Inside operateOnSelecteditems");
  //   console.log(currentSelectedItems);
  // }

}
