function getAccessToken() {
    document.getElementsByTagName('p')[0].innerHTML = 'Test';
    fetch('https://cunning-fox-2chvvj-dev-ed.my.salesforce.com/services/oauth2/token?grant_type=client_credentials&client_id=3MVG9riCAn8HHkYUvpxb2KieHak3WbYV1mLuu7Ye6m6ztSWhcuJfOssAGrfy9anoOzbutLarfaiEc.U09zO8S&client_secret=5B312EC1EC9524C082BF5CA34F750B3C39B447BAD3B1A09F14149DA5D7999BED', {
        method: 'POST',
        mode: 'no-cors',
        credentials: 'include'
    })
    .then((response) =>    response.json().then(data => console.log('Response: '+JSON.stringify(data))))
    .catch((error) =>    console.log('Response: '+JSON.stringify(error.json())));

}

//getAccessToken();
