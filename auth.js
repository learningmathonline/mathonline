import dict from "./applicationKeys.js";
var key = window.localStorage.getItem('appkeys');
if (dict[md5(key)] == 1) {
    
} else {
    var x = prompt("Enter Application key");
    var f = md5(x);
    if (dict[f] == 1) {
        window.localStorage.setItem('appkeys', x);
    } else {
        body = document.getElementsByTagName('body')[0].innerHTML = `
            <h1>That Was Eatheir A Wrong Or Expired Code, To Gain Access To This Website Please Gain A Access Code</p>
        `;
    }
}
