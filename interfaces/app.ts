interface labelLedValue {
    label: string;
    size: number;
}

window.onload = () => {

   /*  function printLabel(labelLedObj:{label:string}) {
        alert(labelLedObj.label);
    }

    var myObj = {
    size: 10,
    label: "Size 10 Object"
    };

    printLabel(myObj); */

    function printLabelWithInterface(labelLedObj: labelLedValue) {
        alert(labelLedObj.label);
    }

    var myObjWithInterface = {size: 10, label: "Size 10 Object"};
    printLabelWithInterface(myObjWithInterface);


};