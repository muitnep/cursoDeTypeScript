//Generic Type
function identify<T>(arg: T): T {
    return arg;
}

//Generic Interface
interface GenericEchoFn {
    <T>(arg: T): T;
}

function echo<T>(arg: T): T {
    return arg;
}

window.onload = () => {

    //Generic Type
    var myIdentify: <T>(arg: T) => T = identify;
    document.getElementById('content').innerHTML = myIdentify<string>("Hello World type 1!");

    //Generic Interface
    var myEcho: GenericEchoFn = echo;
    document.getElementById('content').innerHTML = myEcho<string>("Hello World Generic Interface!");
};