function delay(ms) {
    return new Promise(resolve => setTimeout(() => resolve(ms), ms));
}

async function myfunc() {
    console.log("begin");

    const p1 = delay(200);
    const p2 = delay(100);
    console.log("after starting delazys");
    const r2 = await p2;
    console.log('got r2 =',r2);    
    const r1 = await p1;
    console.log('got r1 =',r1);
    console.log("end");
    
}

myfunc().then(() => {
    console.log("after calling myfunc");
});[]