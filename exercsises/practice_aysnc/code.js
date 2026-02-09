//John Forte

//part 1
Promise.resolve('done').then(console.log);

console.log("me first");

//part 2

let start=Date.now()
setTimeout(()=>{
    console.log("Timeout ran at",
        Date.now()-start);
    },20);

while (Date.now() < start + 50) {}
console.log("Wasted time until",
     Date.now() - start);

    
