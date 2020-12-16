const fs = require('fs');  

console.log("Contents of file before append:"); 
 
fs.appendFileSync("mttextfile.txt", "Hello,"); 
fs.appendFileSync("mttextfile.txt", "Welcome to my first file operation program."); 
fs.appendFileSync("mttextfile.txt", "\nThanks."); 
