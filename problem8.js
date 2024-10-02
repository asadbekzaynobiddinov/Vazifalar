const bool = true

async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        if (bool) {
            console.log('5 soniyadan keyin salom beraman !')
            setTimeout(() => {
                resolve('Hello Promise!')
            }, 5000)
        }else{
            reject('Promise is not work')
        }
    })
    let data = await promise
    return data
}

myFunc().then((res) => console.log(res)).catch((res) => console.log(res))
