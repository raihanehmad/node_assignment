let user = ["Raihan", "Sajen", "Aashir"];

function promiseReadArray(user){
    return new Promise((resolve, reject)=>{
        if (user.length > 0){
            resolve(user)
        }
        else{
            reject("data not found")
        }
    })
}

promiseReadArray(user).then(result => {
    console.log(`Users are:`);
}).catch(error=>{
    console.log(error);
})

let read_array = async (user) => {
    try {
        let readArray = await promiseReadArray(user);
        console.log(`The result of async and await is:`)  
    } catch (error) {
        console.log("Error is: ");
        console.log(error);
    }
    
}
read_array(user);

