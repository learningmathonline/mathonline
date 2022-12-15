const dict = {
    'e60fbd7445b7a1d87605c5afba117e8f': 1
}
var x = prompt("Enter Application key");
var f = md5(x);
if (dict[f] == 1) {
    alert('All Access Codes Expire After A Month Of Use');
} else {
    body = document.getElementsByTagName('body')[0].innerHTML = `
        <h1>That Was Eatheir A Wrong Or Expired Code, To Gain Access To This Website Please Gain A Access Code</p>
    `;
}
