const path = require("path");

const separator = path.sep;
console.log("separator:", separator);

const joinedPath = path.join("/assets", "data.txt");
console.log("joined path:", joinedPath);

const basename = path.basename(joinedPath);
console.log("basename:", basename);

const absolute = path.resolve(__dirname, "assets", "data.txt");
console.log("absolute:", absolute);
