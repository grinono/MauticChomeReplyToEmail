chrome.runtime.onMessageExternal.addListener(function(response){
 console.log(response.email)
 sendEmailToMautic(response.email)
});
// sendEmailToMautic()


function sendEmailToMautic (email) {
    var xhr = new XMLHttpRequest();
    var url = "http://marketing.bitler.co/api/contacts/";
    var access_token = "&access_token=dhf3489dsjfow45ndlfu82034dj"
    var params = "?search=" + email 
    var combo = url + params + access_token;
      console.log(combo);
   
    xhr.open("GET", combo, true);
    xhr.onreadystatechange = function() {
      var responseDing = xhr.response;
      var parse = JSON.parse(responseDing);
      console.log(parse.contacts[0].id);
      UpdateContactToRead(parse.contacts[0].id)
    }
    xhr.send();
}

function UpdateContactToRead(id) {
    var xhr = new XMLHttpRequest();
    var url = "http://marketing.bitler.co/api/contacts/";
    var access_token = "?access_token=dsfjk4d893j4580udsfiwl5djf8923dn"
    var params ={"answeremail":true}
    var combo = url + id + '/edit' + access_token
      console.log(combo);
   
    xhr.open("PATCH", combo , true);
    xhr.setRequestHeader("Content-type","application/json");
    // xhr.onreadystatechange = function() {
    //   var response = xhr.response;
    //    var parse = JSON.parse(response);
    //   console.log(parse);
    // }
    // xhr.send(params);
    xhr.send('{"answeremail": true}');
}
