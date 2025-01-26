import fs from "fs";

const writter = fs.createWriteStream("target.log");

writter.write("Yoga");
writter.write("Eka");
writter.write("Pratama");
writter.close();

const reader = fs.createReadStream("target.log");
reader.on("data",function(data){
    console.info(data.toString());
    reader.close();
})