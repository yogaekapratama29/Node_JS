import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("zlib.mjs");
// Zlib untuk Kompresi
const result = zlib.gzipSync(source);

// Compres
fs.writeFileSync("zlib.mjs.text",result);