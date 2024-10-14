const form = document.getElementById('form');

function checkPasswords(password1, password2) {
    if (password1 === password2 && password1.length >= 6) {
        return true;
    } else if (password1.length < 6) {
        alert('Parol kamida 6 ta belgidan iborat bo\'lishi kerak');
        return false;
    } else {
        alert('Parollar mos emas');
        return false;
    }
}

function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function isValidPhoneNumber(number) {
    const phonePattern = /^\d+$/;
    return phonePattern.test(number);
}

function getData() {
    let usersData = {};
   
    usersData.name = document.getElementById('name').value;
    usersData.username = document.getElementById('username').value;
    usersData.email = document.getElementById('email').value;
    usersData.number = document.getElementById('number').value;
    usersData.password = document.getElementById('password').value;
    usersData.gender = document.querySelector('.radio-btn:checked') ? document.querySelector('.radio-btn:checked').value : null;
    let confirmPassword = document.getElementById('c_password').value;
   
    if (!usersData.name || !usersData.username) {
        alert('Ism va username bo\'sh bo\'lishi mumkin emas');
        return false;
    }
    
    if (!isValidEmail(usersData.email)) {
        alert(`Email noto\'g\'ri formatda`);
        return false;
    }
    
    if (!isValidPhoneNumber(usersData.number)) {
        alert('Telefon raqami faqat raqamlardan iborat bo\'lishi kerak');
        return false;
    }

    if (!usersData.gender) {
        alert('Jinsni tanlang');
        return false;
    }

    if (!checkPasswords(usersData.password, confirmPassword)) {
        return false;
    }

    return usersData;
}

function sendDataToServer(data) {
    fetch ('http://127.0.0.1:5000/register', {
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
    e.preventDefault();
    const usersData = getData();
    if (usersData) {
        sendDataToServer(usersData)
    }
});