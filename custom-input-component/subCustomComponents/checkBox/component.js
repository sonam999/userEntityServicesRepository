angular.module('app')
  .component('checkBox',{
    templateUrl: 'custom-input-component/subCustomComponents/checkBox/nativeContent.html',
    controller: CheckBoxBoxCtrl,
    controllerAs: "CheckBoxBoxCtrl"
    ,
    bindings: {
      label: '@',
      domainList: '<',
      required: '@',
      bindData: '<',
      reflectComponent: '&'
    }
  });

function CheckBoxBoxCtrl($scope) {
  var ctrl = this;
  console.log("Inside CheckBoxBoxCtrl");
  console.log(ctrl);
  ctrl.selectedData = [];
  if(ctrl.domainList.constructor === Object)
    ctrl.listType = "object";
  else
    if (ctrl.domainList.constructor === Array) {
      ctrl.listType = "array";
    }
  this.reflectValue = function(value) {
    console.log(value);

    console.log("Inside Toggle");
    var status = false;
    var idx = ctrl.selectedData.indexOf(value);
    console.log("Index ", idx);
    if (idx > -1 )
    {
      ctrl.selectedData.splice(idx,1);
    }
    else {
      status = true;
      ctrl.selectedData.push(value);
    }

    console.log("Status ", status);
    // ctrl.ngChecked({currentSelectedItems: ctrl.selectedData});


    this.reflectComponent({value:ctrl.selectedData});


  };


  // ctrl.toggle = function(item){
  //   console.log("Inside Toggle");
  //   var status = false;
  //   var idx = ctrl.selectedData.indexOf(item);
  //   console.log("Index ", idx);
  //   if (idx > -1 )
  //   {
  //     ctrl.selectedData.splice(idx,1);
  //   }
  //   else {
  //     status = true;
  //     ctrl.selectedData.push(item);
  //   }
  //
  //   console.log("Status ", status);
  //   // ctrl.ngChecked({currentSelectedItems: ctrl.selectedData});
  //
  //   return status;
  // };

  console.log("Inside CheckBoxBoxCtrl");
  console.log(CheckBoxBoxCtrl.domainList);
}
