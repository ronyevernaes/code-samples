const { readFileSync, writeFileSync } = require("fs");

const data = readFileSync("./assets/data.txt", "utf8");
console.log(data);

// Creates a new file with the content
writeFileSync("./assets/result.txt", `processed data:\n${data}\n`);

// Creates a new file with the content. If the file exists, appends the datas
writeFileSync("./assets/result.txt", `processed data:\n${data}\n`, { flag: "a" });
