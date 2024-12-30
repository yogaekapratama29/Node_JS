// Pada javascript module, async function adalah global scope

function samplePromise(){
    return Promise.resolve("Yoga");
}


    const name = await samplePromise();
    console.log(name); 
