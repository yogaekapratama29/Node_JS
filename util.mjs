import util from "util";

console.info(util.format("Nama : %s", "Eko"));

const person = {firstName: "Eko", lastName: "Khannedy"};
console.info(util.format("Person : %j",person));