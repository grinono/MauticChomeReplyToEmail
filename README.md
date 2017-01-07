# Add reply email option to mautic


This chrome extension makes it possible to add reply to email fuction.

Some point to get it work, you will need to change the 
1) in mautic set a costum field with the name :"answeremail", this field need ot be a boolean. (yes/no)
2) in the background.js file change the domain and API access_token to your details.
3) in the manifest.json set instead of bitler.co your domain
4) install the extension in Chrome (drag it to chrome extesions)
5) refresh you gmail.
6) all Inbox emails will be set to 

note:
- autoresponders will also get the read email field status. IMAP integration would be a better solution as then a responsetime of autoresponders can then be detected.
- at Mautic their are setting this features on the roadmap. So a more userfriendly version will come prob. with IMAP/POP intergration. 