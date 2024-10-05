const submitButton = document.querySelector('#next-btn');

function getInfo() {
    let user = {};
    user.username = document.querySelector('#username').value;
    user.password = document.querySelector('#password').value;
    user.inputText = document.querySelector('#input-text').value;
    user.rememberMe = document.querySelector('#remember-me').checked;
    user.onOff = document.querySelector('input[name="onOff"]:checked')?.id || null;
    user.selectedCheckBox = document.querySelector('input[name="checkbox"]:checked')?.id || null;
    user.dropdown = document.querySelector('#dropdown').value;
    return user;
}

function validateData(user) {
    if (!user.username) {
        alert('Iltimos, foydalanuvchi nomini kiriting.');
        return false;
    }
    if (!user.password) {
        alert('Iltimos, parolni kiriting.');
        return false;
    }
    if (user.password.length < 4 || user.password.length > 12) {
        alert('Parol 4 dan 12 gacha belgidan iborat bo\'lishi kerak.');
        return false;
    }
    if (!user.inputText) {
        alert('Iltimos, matn maydonini to\'ldiring.');
        return false;
    }
    if (!user.onOff) {
        alert('Iltimos, "On" yoki "Off" radio tugmasidan birini tanlang.');
        return false;
    }
    if (!user.selectedCheckBox) {
        alert('Iltimos, radio variantini tanlang.');
        return false;
    }
    if (user.dropdown === "") {
        alert('Iltimos, dropdown menyusidan biror variant tanlang.');
        return false;
    }
    return true;
}

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    let data = getInfo();
    if (validateData(data)) {
        console.log(data)
        fetch('https://html-form.deno.dev/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((res) => {
            if (!res.ok) {
                throw new Error('Xato yuz berdi');
            }
            return res.json();
        })
        .then((data) => {
            console.log(data);
            alert('Malumotlar yuborildi');
        })
        .catch((err) => {
            alert(`Malumotlarni yuborish xatosi: ${err}`);
        });
    }
});
