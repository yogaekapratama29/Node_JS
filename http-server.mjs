import http from 'http';

const server = http.createServer((request,response)=>{
console.info(request.method,request.url);
// bisa menggunakan logic juga 
if(request.method === "POST"){
    request.addListener("data",function(data){
        response.setHeader("Content-Type","application/json");
        response.write(data);
        response.end();
    })
}else{
    response.write("Hello World");
    response.end(); 
}


// response.write("Hello World");
});

server.listen(3000);