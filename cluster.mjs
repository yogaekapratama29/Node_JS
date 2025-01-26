import cluster from "cluster";
import os, { cpus } from "os";
import http, { request } from "http";
import process from "process";

if(cluster.isPrimary){
    for(let i = 0; i < os.cpus().length;i++){
        // fork untuk menjalakan worker untuk cpu nya 
        cluster.fork();
    }
    cluster.addListener("exit",function(worker){
        console.info(`Worker ${worker.id} is exited`);
        // jika worker ada yang mati tetap menyala dan worker nya akan membuat worker baru(high efesiensi)
        cluster.fork();
    })
}

if(cluster.isWorker){
    const server = http.createServer((request,response)=>{
        response.write(`Response from process ${process.pid}`);
        response.end();
        response.exit();
    })
    server.listen(3000);
    console.info(`Start cluster worker ${process.pid}`);
}