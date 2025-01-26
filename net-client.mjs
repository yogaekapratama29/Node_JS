import net from "net";

const connection = net.createConnection({port:3000,host:"localhost"});

// setInterval(function(){
//     connection.write("Eko\r\n")
// },2000);

setInterval(function(){
    connection.write(`${process.argv[2]}\r\n`)
},2000);



connection.addListener("data",function(data){
    console.info(`Receive data from server ${data.toString()}`);
})