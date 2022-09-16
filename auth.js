import dict from "./applicationKeys.js";
import CLIENT_ID from "./clientid.js";
var x = prompt("Enter Application key")
if (dict[x]) {
    dict[x] = 0;
    alert('All Access Codes Expire After A Month Of Use')
} else {
    body = document.getElementsByTagName('body')[0].innerHTML = `
        <h1>That Was Eatheir A Wrong Or Expired Code, To Gain Access To This Website Please Gain A Access Code</p>
    `;
}
