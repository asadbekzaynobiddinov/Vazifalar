const getData = async (URI) => {
    try {
        const res = await fetch(URI)
        if (!res.ok) {
            throw new Error('Xatolik')
        }
        let data = await res.json()
        return data
    } catch (error) {
        console.log('Xatolik bor: ', error)
    }
}

const getNames = async () => {
    const data = await getData('https://handlers.education.launchcode.org/static/planets.json')
    const names = []
    for(let obj of data){
        let name = obj.name
        names.push(name)
    }
    return names
}

getNames().then((res) => console.log(res)).catch((res) => console.log(res))