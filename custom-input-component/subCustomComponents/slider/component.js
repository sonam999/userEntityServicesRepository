angular.module('app').
  component('sliderBox',{
    templateUrl: 'custom-input-component/subCustomComponents/slider/nativeContent.html',
    controller: SliderBoxCtrl,
    controllerAs:"ctrl",
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function SliderBoxCtrl()
{
  console.log("Inside controller of sliderCtrl");
    var ctrl = this;
    console.log("Inside controller of sliderCtrl");
    console.log(ctrl);
  
    console.log(ctrl.bindData);
    ctrl.reflectValue = function(value) {
      console.log("hello");
      console.log(value);
      ctrl.bindData=value;
      ctrl.reflectComponent({value:value});
    };
}
