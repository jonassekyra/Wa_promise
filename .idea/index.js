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

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return response.json();

    })
    .then((data) => {
        //console.log(result);
        console.log(data.name)
    })
    .catch((error) => {
        console.error(error.message);
    });


//*************************************************4********************************************************************
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
    })
    .then((user) => {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`;
        return fetch(url);
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        return response.json();
    })
    .then((posts) => {
        console.log(posts.length);
    })
    .catch((error) => {
        console.error(error.message);
    });





