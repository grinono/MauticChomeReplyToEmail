var gmail;

function refresh(f) {
  if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
    setTimeout('refresh(' + f + ')', 10);
  } else {
    f();
  }
}


var main = function(){
  // NOTE: Always use the latest version of gmail.js from
  // https://github.com/KartikTalwar/gmail.js
  gmail = new Gmail();
  console.log('Hello,', gmail.get.user_email())

  function getEmail () {

  	var CurrentEmailsInInbox = gmail.get.visible_emails()
  	console.log(CurrentEmailsInInbox[0].sender)
      	var emailList = CurrentEmailsInInbox.map(function(content){
    	   console.log(content.sender)
        // chrome.storage.local.storage.set({myTestVar:'my test varrrrrr'});
          var editorExtensionId = "ahjabadggnpjhfgkhbmokjgfnmmmpfam"

          chrome.runtime.sendMessage(editorExtensionId, {email: content.sender},
            function(response) {
              if (!response.success)
                handleError(url);
            });
      })
    }
  
  gmail.observe.on('load', function(){
    getEmail()

   });
}

refresh(main);

