window.onload = function () {
    /*  function printLabel(labelLedObj:{label:string}) {
         alert(labelLedObj.label);
     }
 
     var myObj = {
     size: 10,
     label: "Size 10 Object"
     };
 
     printLabel(myObj); */
    function printLabelWithInterface(labelLedObj) {
        alert(labelLedObj.label);
    }
    var myObjWithInterface = { size: 10, label: "Size 10 Object" };
    printLabelWithInterface(myObjWithInterface);
};
