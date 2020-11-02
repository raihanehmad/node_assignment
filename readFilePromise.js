let fs = require('fs');

// function to read file/files and return a promise.
function readJsonFile(file, encoding){
    return new Promise((resolve,reject)=>{
        fs.readFile(file, encoding, (err, data)=>{
            if(data){
                resolve(data)
            }
            else{
                reject(err)
            }
        })
    })
}

// To handle the returned promise using then and catch
readJsonFile('./test_file/user.json', 'utf8')
    .then(result => {
        let data = JSON.parse(result);
        let time = 1000;
        data.forEach((d,i)=>{
            setTimeout(()=>{
                console.log(`${i+1}) Name: ${d.name}, Username: ${d.username}, Email: ${d.email}`)
            }, time);
            time += 1000;
        })
    })
    .catch(error=>{
        console.log(error);
    })


// using async and await to handle promise.
let readJsonFileAsync =  async (file,encoding) => {
    try {
        let readJsonFileResult = await readJsonFile(file, encoding);
        let data = JSON.parse(readJsonFileResult);
        let time = 1000;
        console.log('Using async and await');
        data.forEach((d,i)=>{
            setTimeout(()=>{
                console.log(`${i+1}) Name: ${d.name}, Username: ${d.username}, Email: ${d.email}`)
            }, time);
            time += 1000;
        })
    } catch (error) {
      console.log(error)   
    }  
}

readJsonFileAsync('./test_file/user.json', 'utf8');


//Read multiple file using Promise.all()

Promise.all([readJsonFile('./test_file/user.json', 'utf8'), readJsonFile('./test_file/file2.txt', 'utf8')])
    .then(result=>{
        let data = JSON.parse(result[0]);
        console.log(data)
    }).catch(error=>{
        console.log(error);
    })

let async_await = async () => {

    let readFiles = await Promise.all([readJsonFile('./test_file/user.json', 'utf8'), readJsonFile('./test_file/file2.txt', 'utf8')]);
    console.log(readFiles)
}

async_await();