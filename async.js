function samplePromise(){
    return Promise.resolve("Yoga");
}

async function run (){
    const name = await samplePromise();
    console.log(name); 
}

run();