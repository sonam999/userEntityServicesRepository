angular.module('app')
  .component('customInputBox', {
    bindings: {
      type: '@',
      label: '@',
      specificAttr: '<',
      bindData: '<',
      bindDataKey:'@',
      reflectCustomInput: '&',
      required: '@',
      id: '@'
    },

    templateUrl: 'custom-input-component/customInputBox/customInputBox.html',
    controller: CustomInputBoxCtrl,
    controllerAs: "CustomInputBoxCtrl"
  });

function CustomInputBoxCtrl($scope) {
  var ctrl = this;
console.log("inside cib");
  if(ctrl.specificAttr == undefined) {
    ctrl.specificAttr = {};
  }


  ctrl.a = 0;
  console.log("Inside CustomInputBoxCtrl");
  console.log($scope);
//  console.log($scope.$parent.$ctrl.label);
  // $scope.$parent.$ctrl.label = "Some HAHAH Label";
  // console.log($scope.$parent.$ctrl.label);
  // ctrl.reflectCustomBox = ctrl.reflectCustomInput;
  ctrl.reflectCustomBox = function(newValue) {

    console.log("In reflect Custom Box");
    console.log(ctrl);
    console.log(newValue);
    ctrl.reflectCustomInput({'keyString':ctrl.bindDataKey,'value':newValue, 'id':ctrl.id});
    console.log(ctrl.bindDataKey);
  }
}
