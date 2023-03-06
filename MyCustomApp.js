//import fetch from 'node-fetch';
//globalThis.fetch = fetch;

function getAuthCode() {    
    window.location.replace("https://cunning-fox-2chvvj-dev-ed.my.salesforce.com/services/oauth2/authorize?client_id=3MVG9riCAn8HHkYUvpxb2KieHak3WbYV1mLuu7Ye6m6ztSWhcuJfOssAGrfy9anoOzbutLarfaiEc.U09zO8S&redirect_uri=https://anandhk47.github.io/Add-Salesforce-Contact/MyCustomApp.html&response_type=code")

}

const query = window.location.search;
console.log('Query: '+query)
var params = null
var authCode = null
if (query != null) {
    params = new URLSearchParams(query)
    authCode = params.get("code")
}

//document.getElementsByTagName('p')[0].innerHTML = 'Test ' ;
if (authCode == null) {
    getAuthCode();
}
else {
    document.getElementsByTagName('p')[0].innerHTML = authCode ;
}
