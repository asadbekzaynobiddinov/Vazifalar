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

const getTodos = async () => {
    const todos = await getData('https://jsonplaceholder.typicode.com/todos')
    if (todos) {
        const ids = todos.map(todo => todo.id)
        console.log(ids)
    }
}

getTodos()
