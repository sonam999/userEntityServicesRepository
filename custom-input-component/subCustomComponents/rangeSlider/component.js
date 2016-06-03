angular.module('app').
  component('rangeSlider',{
    templateUrl: 'custom-input-component/subCustomComponents/rangeSlider/nativeContent.html',
    controller: rangeSliderCtrl,
    controllerAs: "rangeSliderCtrl",
    bindings: {
      label: '@',
      specificAttr: '<',
      required: '@',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function rangeSliderCtrl() {

  var rangeSliderCtrl = this;

  if(rangeSliderCtrl.bindData == undefined)
    rangeSliderCtrl.bindData = [rangeSliderCtrl.specificAttr.floor, rangeSliderCtrl.specificAttr.ceil];
  console.log("bind data", rangeSliderCtrl.bindData);  
  console.log("Inside single Slider Ctrl");
  console.log(rangeSliderCtrl);
  rangeSliderCtrl.options = {
    floor: rangeSliderCtrl.specificAttr.floor,
    ceil: rangeSliderCtrl.specificAttr.ceil,
    step: rangeSliderCtrl.specificAttr.step,
    noSwitching: rangeSliderCtrl.specificAttr.noSwitching
  };
  rangeSliderCtrl.options.onEnd = function(id, minValue, maxValue) {

      console.log("I am inside on end of customInputBox");
      console.log(minValue);
      console.log(maxValue);
      // console.log(id);
      // console.log(value);
      rangeSliderCtrl.reflectComponent({value:[minValue, maxValue]});
  }

  rangeSliderCtrl.options.translate = function(value, sliderId, label) {
    switch (label) {
        case 'model':
          return rangeSliderCtrl.specificAttr.leftSliderHandleTranslate.prefix + value +rangeSliderCtrl.specificAttr.leftSliderHandleTranslate.postfix;
        case 'high':
          return rangeSliderCtrl.specificAttr.rightSliderHandleTranslate.prefix + value +rangeSliderCtrl.specificAttr.rightSliderHandleTranslate.postfix;
        default:
          return rangeSliderCtrl.specificAttr.endPointsTranslate.prefix + value + rangeSliderCtrl.specificAttr.endPointsTranslate.postfix;
      }
  }



  console.log("Inside rangeSliderCtrl");
  console.log(rangeSliderCtrl.specificAttr.options);

  // rangeSliderCtrl.specificAttr.options.onEnd= rangeSliderCtrl.reflectComponent;
  // rangeSliderCtrl.selectedData = [];
  //
  // rangeSliderCtrl.reflectValue = function(value) {
  //   console.log(value);
  //
  //   console.log("Inside range Toggle");
  //   var status = false;
  //   var idx = rangeSliderCtrl.selectedData.indexOf(value);
  //   console.log("Index ", idx);
  //   if (idx > -1 )
  //   {
  //     rangeSliderCtrl.selectedData.splice(idx,1);
  //   }
  //   else {
  //     status = true;
  //     rangeSliderCtrl.selectedData.push(value);
  //   }
  //
  //   console.log("Status ", status);
  //   // rangeSliderCtrl.ngChecked({currentSelectedItems: rangeSliderCtrl.selectedData});
  //
  //
  //   rangeSliderCtrl.reflectComponent({value:rangeSliderCtrl.selectedData});
  //
  //
  // };
  //

  // rangeSliderCtrl.toggle = function(item){
  //   console.log("Inside Toggle");
  //   var status = false;
  //   var idx = rangeSliderCtrl.selectedData.indexOf(item);
  //   console.log("Index ", idx);
  //   if (idx > -1 )
  //   {
  //     rangeSliderCtrl.selectedData.splice(idx,1);
  //   }
  //   else {
  //     status = true;
  //     rangeSliderCtrl.selectedData.push(item);
  //   }
  //
  //   console.log("Status ", status);
  //   // rangeSliderCtrl.ngChecked({currentSelectedItems: rangeSliderCtrl.selectedData});
  //
  //   return status;
  // };

  console.log("Inside Range Slider Ctrl");
}
