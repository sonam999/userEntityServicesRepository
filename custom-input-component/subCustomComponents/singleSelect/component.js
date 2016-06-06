angular.module('app')
  .component('singleSelectBox',{
    templateUrl: 'custom-input-component/subCustomComponents/singleSelect/nativeContent.html',
    controller:singleSelectBoxCtrl,
    controllerAs: 'singleSelectBoxCtrl',
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&',
      required: '@'
    }
  });

function singleSelectBoxCtrl()
 {
  var singleSelectBoxCtrl = this;
  console.log("Inside controller of singleSelectBoxCtrl");
  console.log("specific attributes are");
  console.log(singleSelectBoxCtrl.specificAttr);
  console.log(this);
  this.reflectValue = function(value) {
    console.log("#############");
    console.log(value);

    this.reflectComponent({value:value});

  };
  console.log("Inside controller of single select");

  console.log(singleSelectBoxCtrl.specificAttr);
  if (singleSelectBoxCtrl.specificAttr.domainList.constructor === Object) {
    singleSelectBoxCtrl.listType = "object"
  }
  else {
    singleSelectBoxCtrl.listType = "array"
    if(singleSelectBoxCtrl.specificAttr.domainList.length>0) {
      if(singleSelectBoxCtrl.specificAttr.domainList[0].constructor === Object)
        singleSelectBoxCtrl.listDataType="objectWithCustomKeys";
      else {
        singleSelectBoxCtrl.listDataType="element";

      }
    }
  }

  console.log("List Data Type");


  console.log(singleSelectBoxCtrl.listDataType);
}
