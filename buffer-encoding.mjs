const buffer = Buffer.from("Yoga Eka Pratama","utf8");

console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const buffer2 = Buffer.from("RwtvIEt1cm5pYXdhbiBlaGFubmVkeQ==","base64url");
console.info(buffer2.toString("utf8"))