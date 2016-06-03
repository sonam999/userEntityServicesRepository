angular.module('app').
  component('singleSlider',{
    templateUrl: 'custom-input-component/subCustomComponents/singleSlider/nativeContent.html',
    controller: singleSliderCtrl,
    controllerAs: "singleSliderCtrl",
    bindings: {
      label: '@',
      specificAttr: '<',
      required: '@',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function singleSliderCtrl() {
  var singleSliderCtrl = this;
  if(singleSliderCtrl.bindData == undefined)
    singleSliderCtrl.bindData = singleSliderCtrl.specificAttr.floor;
  console.log("Inside single Slider Ctrl");
  console.log(singleSliderCtrl);
  singleSliderCtrl.options = {
    floor: singleSliderCtrl.specificAttr.floor,
    ceil: singleSliderCtrl.specificAttr.ceil,
    step: singleSliderCtrl.specificAttr.step,
    noSwitching: singleSliderCtrl.specificAttr.noSwitching
  };


  singleSliderCtrl.options.onEnd = function(id, value) {

      console.log("I am inside on end of customInputBox");
      console.log(id);
      console.log(value);
      singleSliderCtrl.reflectComponent({value:value});
  }

  singleSliderCtrl.options.translate = function(value, sliderId, label) {
    switch (label) {
        case 'model':
          return singleSliderCtrl.specificAttr.sliderHandleTranslate.prefix + value +singleSliderCtrl.specificAttr.sliderHandleTranslate.postfix;
        default:
          return singleSliderCtrl.specificAttr.endPointsTranslate.prefix + value + singleSliderCtrl.specificAttr.endPointsTranslate.postfix;
      }
  }


}
