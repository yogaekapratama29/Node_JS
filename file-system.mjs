import fs from 'fs/promises';

const bufffer = await fs.readFile('file-system.mjs'); //Non - Blocking karena menggunakan promise

console.info(bufffer.toString()); 

await fs.writeFile("temp.txt", 'Hello, World!');