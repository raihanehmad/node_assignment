let userName = {
    'name': 'Raihan',
    'age': 21,
    'address': 'Kathmandu'
}

function object(userName){
    return new Promise((resolve, reject)=>{
        if(userName){
            resolve(userName)
        }
        else{
            reject("user not found");
        }
    })
}

object(userName)
    .then(result=>console.log(result))
    .catch(error=>console.log(error));