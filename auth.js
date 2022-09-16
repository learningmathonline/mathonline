import dict from "./applicationKeys.js";
import CLIENT_ID from "./clientid.js";
var x = prompt("Enter Application key")
if (dict[x]) {
    dict[x] = 0;
} else {
    body = document.getElementsByTagName('body')[0].innerHTML = `
        <h1>Please Gain Access Code For Amazing Website</p>
    `;
}