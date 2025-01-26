import https from "https";

const url = "https://eoqhfuu2w8la3j5.m.pipedream.net/";
const request = https.request(url,{
    method : "POST",
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
},
    function (response){
        response.addListener("data",function(data){
            console.info(`Receive : ${data.toString()}`)
        })
    }
);

const body = JSON.stringify({firsName : "Yoga",lastName : "Pratama"});

request.write(body);
request.end();