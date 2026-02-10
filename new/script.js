const fs = require("fs");
fs.writeFileSync("myfile.txt", "ai- class");
function(err) {
    if(err) console.error(err);
    else console.log("no error");
}