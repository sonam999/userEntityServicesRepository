angular.module('app')
  .component('multiSelectBox',{
    templateUrl: 'custom-input-component/subCustomComponents/multiSelect/nativeContent.html',
    controller: multiSelectBoxCtrl,
    controllerAs: "multiSelectBoxCtrl",
    bindings: {
      label: '@',
      specificAttr: '<',
      bindData: '<',
      reflectComponent: '&',
      required: '@'
    }
  });

function multiSelectBoxCtrl()
 {
  var multiSelectBoxCtrl = this;
  console.log("Inside controller of multiSelectBoxCtrl");
  console.log("specific attributes are");
  console.log(multiSelectBoxCtrl.specificAttr);
  console.log(this);
  this.reflectValue = function(value) {
    console.log(value);
    this.reflectComponent({value:value});

  };

  multiSelectBoxCtrl.getUniq = function(uniq) {
      console.log("Inside getUniq");
      multiSelectBoxCtrl.uniq = uniq;
      console.log(multiSelectBoxCtrl.uniq);
  }

  multiSelectBoxCtrl.categoryMatch = function(item) {
    // console.log(multiSelectBoxCtrl.uniqM);
    console.log("Inside Catoegory Match");
    console.log(item);
    console.log(multiSelectBoxCtrl.uniqM);
    return (item[multiSelectBoxCtrl.specificAttr.listLabelKey] === multiSelectBoxCtrl.uniqM);
  }
  //
  // multiSelectBoxCtrl.categoryMatch = {};
  // multiSelectBoxCtrl.categoryMatch[multiSelectBoxCtrl.specificAttr.listLabelKey] =  multiSelectBoxCtrl.uniq
  // multiSelectBoxCtrl.uniq;
  console.log("Inside controller of multi select");

  console.log(multiSelectBoxCtrl.specificAttr);
  if(multiSelectBoxCtrl.specificAttr.domainList.length>0) {
    if(multiSelectBoxCtrl.specificAttr.domainList[0].constructor === Object)
      multiSelectBoxCtrl.listDataType="object";
    else {
      multiSelectBoxCtrl.listDataType="element";

    }
  }


 //start of code to get unique categories from list

  function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
  }


  var unique=[];
  for(i=0;i<multiSelectBoxCtrl.specificAttr.domainList.length;i++)
  {
    var temp=multiSelectBoxCtrl.specificAttr.domainList[i][multiSelectBoxCtrl.specificAttr.listLabelKey];
    if(!contains(unique,temp))
    {
      unique.push(temp);
    }
  }
  //end
  console.log("unique contains"+unique)

  multiSelectBoxCtrl.unique=unique;

  console.log("List Data Type");


  console.log(multiSelectBoxCtrl.listDataType);
}
