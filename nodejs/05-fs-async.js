const { readFile, writeFile } = require("fs");

readFile("./assets/data.txt", "utf8", (err, readResult) => {
  if (err) {
    console.log(err);
    return
  }
  console.log("read result:", readResult);

  writeFile("./assets/result.txt", `async processed data:\n${readResult}\n`, (err, writeResult) => {
    if (err) {
      console.log(err);
      return
    }
    console.log("write result:", writeResult);
  })
});
