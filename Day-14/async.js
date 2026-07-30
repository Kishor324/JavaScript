const pm = new Promise((resolve, reject) => {
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10);

        if (num > 5) {
            resolve("This is resolved: " + num);
        } else {
            reject("This is rejected: " + num);
        }
    }, 2000);
});

async function checkPromise() {
    try {
        const result = await pm;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
 

checkPromise();