//import fetch from 'node-fetch';
//globalThis.fetch = fetch;

function getAuthCode() {    
    window.location.replace("https://cunning-fox-2chvvj-dev-ed.my.salesforce.com/services/oauth2/authorize?client_id=3MVG9riCAn8HHkYUvpxb2KieHak3WbYV1mLuu7Ye6m6ztSWhcuJfOssAGrfy9anoOzbutLarfaiEc.U09zO8S&redirect_uri=https://anandhk47.github.io/Add-Salesforce-Contact/MyCustomApp.html&response_type=code")

}

function getAccessToken() {
    const headers = new Headers();
    headers.append('Content-type','application/x-www-form-urlencoded');
    headers.append('grant_type','authorization_code');    
    headers.append('client_id','3MVG9riCAn8HHkYUvpxb2KieHak3WbYV1mLuu7Ye6m6ztSWhcuJfOssAGrfy9anoOzbutLarfaiEc.U09zO8S');
    headers.append('client_secret','5B312EC1EC9524C082BF5CA34F750B3C39B447BAD3B1A09F14149DA5D7999BED');
    headers.append('code',this.authCode);
    headers.append('redirect_uri','https://anandhk47.github.io/Add-Salesforce-Contact/MyCustomApp.html');
    const init = {
        method: 'POST',
        mode: 'no-cors',
        headers
    }

    fetch('https://cunning-fox-2chvvj-dev-ed.my.salesforce.com/services/oauth2/token', init)
    .then(response => response.json())
    .then(data => document.getElementsByTagName('p')[1].innerHTML = data.access_token  )
    .catch(error => document.getElementsByTagName('p')[1].innerHTML = error);
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
if (authCode != null) {    
    document.getElementsByTagName('p')[0].innerHTML = authCode ;
}
