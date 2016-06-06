angular.module('app').
  component('datePickerBox',{
    templateUrl: 'custom-input-component/subCustomComponents/date/nativeContent.html',
    controller: DatePickerBoxCtrl,
    controllerAs: "DatePickerBoxCtrl"
    ,
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function DatePickerBoxCtrl($timeout, $scope)
{
    var ctrl = this;
    console.log("Inside controller of datePickerBoxCtrl");
    console.log(this);
    this.reflectValue = function(value) {
      console.log(value);
      this.reflectComponent({value:value});

    };


}
