let input = true;
const myPromise = new Promise((resolve, reject) => {

    setTimeout(() => {

        if (input){
            resolve("OK");
        }else{
            reject("ko")
        }



    }, 1000);


});

myPromise.then((result) => {
    console.log("Výsledek:", result);
});

myPromise.catch((error) => {
    console.error("Chyba:", error);
});

const yourpromise = new Promise((resolve,reject)=>{
    resolve(3)
});


yourpromise.then((result) => {
    console.log(result * 5);
});

yourpromise.then((result) => {
    console.log(result + 1);
});

yourpromise.then((result) => {
    console.log("Výsledek:", result);

});


yourpromise
    .then((result) => {
        return result * 5;
    })
    .then((result) => {
        return result + 1;
    })
    .then((result)=>{
        console.log("vysledek" + result)
});