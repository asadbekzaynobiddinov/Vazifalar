const form = document.getElementById('form')

function getData() {
    let currentUser = new Object()
    currentUser.username = document.getElementById('username').value
    currentUser.password = document.getElementById('password').value
    return currentUser
}

function sendDataToServer(data) {
    fetch ('http://127.0.0.1:5000/login', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(res => res.text())
    .then(data => {
        console.log(`Malumot jo'natildi: ${data}`)
    })
    .catch(err => {
        console.log(`Error: ${err}`)
    })
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    let usersData = getData()
    if (usersData) {
        sendDataToServer(usersData)
    }
})