angular.module('app').
  component('timePickerBox',{
    templateUrl: 'custom-input-component/subCustomComponents/time/nativeContent.html',
    controller: TimePickerBoxCtrl,
    controllerAs: "TimePickerBoxCtrl"
    ,
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function TimePickerBoxCtrl($timeout, $scope)
{
    var ctrl = this;
    console.log("Inside controller of timePickerBoxCtrl");
    console.log(this);
    this.reflectValue = function(value) {
      console.log(value);
      this.reflectComponent({value:value});

    };


}
