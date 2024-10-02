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

const getDetails = async (userId) => {
    try {
        const user = await getData(`https://jsonplaceholder.typicode.com/users/${userId}`)
        const posts = await getData(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)

        if (user && posts) {
            console.log(`Userning ismi: ${user.name}`)
            console.log(`Yashash manzili: ${user.address.city}`)
            console.log(`Kompaniyasi: ${user.company.name}`)

            console.log(`\nUserning maqolalari:`)
            posts.forEach((post, index) => {
                console.log(`${index + 1}. ${post.title}`)
            })
        }
    } catch (error) {
        console.log('Xatolik yuz berdi: ', error)
    }
}

getDetails(1)
