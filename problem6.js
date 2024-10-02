const bool = true

const promise = new Promise((resolve, reject) => {
    if (bool) {
        resolve('Promise is working')
    }else {
        reject("Promise isn't working")
    }
})

promise.then((res) => console.log(res)).catch((res) => console.log(res))
