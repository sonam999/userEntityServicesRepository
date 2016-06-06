angular.module('app')
  .component('autocompleteBox',{
    templateUrl: 'custom-input-component/subCustomComponents/autoComplete/nativeContent.html',
    controller:autocompleteBoxCtrl,
    controllerAs:"autocompleteBoxCtrl",
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function autocompleteBoxCtrl($http)
{
    var autocompleteBoxCtrl = this;
    console.log("Inside controller of autoCompleteBoxCtrl");
    console.log("specific attributes are");
    console.log(autocompleteBoxCtrl.specificAttr);
    console.log(this);
    autocompleteBoxCtrl.reflectValue = function(value) {
      console.log(value);
      autocompleteBoxCtrl.reflectComponent({value:value});

    };

    // autocompleteBoxCtrl.states= loadAll($http);
    autocompleteBoxCtrl.selectedItem;
    autocompleteBoxCtrl.searchText;
    // autocompleteBoxCtrl.querySearch= querySearch;



    console.log("states is ..............");
    // console.log(autocompleteBoxCtrl.states);

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for states... use $timeout to simulate
     * remote dataservice call.
     */

    /**
     * Create filter function for a query string
     */

}
