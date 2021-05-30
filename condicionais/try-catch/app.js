window.onload = function () {
    /*try {
        console.log("Hurru parceiro, eu tô funfando!!!")
    } catch (error) {
        document.getElementById('content').innerHTML = error.message;
    }*/
    function myCheck(myVar) {
        if (myVar == "")
            throw new Error("Empty");
        if (myVar > 100)
            throw new Error("Too High");
        if (myVar < 10)
            throw new Error("Too Low");
    }
    try {
        myCheck("Oieee!!!");
        alert("Tá certim!!!");
    }
    catch (error) {
        document.getElementById('content').innerHTML = "<span style='color:#FF0000'>" + error.message + "</span>";
    }
    finally {
        var varContent = document.getElementById('content').innerHTML;
        document.getElementById('content').innerHTML = varContent + "<br> This is the End... Finally!!!";
    }
};
