// nmp init -y   - створить файл package.json
// npm install --save-dev nodemon  (урок 1, 1:45)

// // ------------file index.js-------------------

// const fs = require("fs");

// async function main() {
//   // read file with callback
//   // fs.readFile("./movies.txt", "utf8", (error, data) => {
//   //   if (error) {
//   //     console.log(error);
//   //   }
//   //   console.log("Got movies", data);
//   // });

//   // sync variant - не бажаний для використання
//   const movies = fs.readFileSync("./movies.txt", { encoding: "utf8" });
//   console.log("movies:", movies);
// }
// main();

// *******************************************************************

// -----------------file index.mjs----------------

// import fs from "fs/promises";

// create file
// await fs.writeFile("./movies.txt", "The Godfather\n");

// append text to file
// await fs.appendFile("./movies.txt", "Inception\n");

// delete file
// await fs.unlink("./movies.txt");
// delete 'The Godfather'
// const movies = await fs.readFile("./movies.txt");
// console.log("movies:", movies.toString());

// or delete 'The Godfather':
// const movies = await fs.readFile("./movies.txt", "utf8");
// const newMovies = movies.split("\n").slice(1).join("\n");
// await fs.writeFile("./movies.txt", newMovies);
