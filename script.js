const fs = require('fs');


// //file system operation

 // 1)WriteFile
 fs.writeFile("hey.txt","I Love you",function(err){ // we create a file name hey,txt and we write the Ilove you in the file and callback function
     if(err) console.error(err);                    // syntax: fs.writeFile("Filename", "Data",Callback(err))
     else console.log("Done");
 })

 // 2)append
 fs.appendFile("hey.txt","I Love you",function(err){ // append means the adding some content on the exting file 
     if(err) console.error(err);                    // syntax: fs.appendFile("Filename", "Data to be add ",Callback(err))
     else console.log("Done");
 })

 // 3)rename
 fs.rename("hey.txt","learn.txt",function(err){ // rename is used to rename the already exsiting file
     if(err) console.error(err);                    // syntax: fs.rename("oldpath(file)", "Newpath ",Callback(err))
     else console.log("Done");
 }) 

 fs.copyFile("learn.txt","./copy/copy.txt",function(err){  // It is used to copy the exsiting file to the new path or destination or folder
     if(err) console.error(err);                            // syntax: fs.copyFile("sorce","destination",callback )
     else console.log("Done");
})

fs.unlink("learn.txt",function(err){
    if(err) console.error(err);
    else console.log("Done");
})



