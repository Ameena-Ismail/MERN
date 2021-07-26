function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    let headsCount = 0;
    let attempts = 0;
    return new Promise( (resolve, reject) => {
        while(headsCount < 5){
            attempts++;
            if(tossCoin() == "heads"){
                headsCount++;
            }
            if(attempts >= 100){
                reject("Attempts exceed 100.")
            }
        }
        resolve("Heads count reached 5! OOPs!! Game over.")
        });
    }
    fiveHeads()
        .then( res => console.log(res) )
        .catch( err => console.log(err) );