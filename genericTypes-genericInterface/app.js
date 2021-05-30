//Generic Type
function identify(arg) {
    return arg;
}
function echo(arg) {
    return arg;
}
window.onload = function () {
    //Generic Type
    var myIdentify = identify;
    document.getElementById('content').innerHTML = myIdentify("Hello World type 1!");
    //Generic Interface
    var myEcho = echo;
    document.getElementById('content').innerHTML = myEcho("Hello World Generic Interface!");
};
