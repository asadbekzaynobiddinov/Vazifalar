const bool = true

const promise = new Promise((resolve, reject) => {
    if (bool) {
        setTimeout(() => {
            resolve('Hello Promise!')
        }, 2000)
    }else{
        reject('Promise is not work')
    }
})


promise.then((res) => {console.log(res)}).catch((res) => console.log(res))