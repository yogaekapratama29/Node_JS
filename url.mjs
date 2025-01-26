import { URL } from "url";

const pzn = new URL ("https://www.programmerzamannow.com/belajar?kelas=nodejs");

// console.info(pzn.toString());
// console.info(pzn.protocol);
// console.info(pzn.host);
// console.info(pzn.pathname);
// console.info(pzn.searchParams);

// Mengubah URL
pzn.host = "www.yogaekapratama.com";
const searchParams = pzn.searchParams;
searchParams.append("status","premium");

console.info(pzn.toString());