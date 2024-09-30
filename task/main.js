const users = []

let forWhile = true

while (forWhile) {
    let command = prompt(`1: Kirish\n2: Ro'yxatdan o'tish\n3: Chiqish`)

    switch (command) {
        case '1':
            kirish()
            break;
        case '2':
            royxatdanOtish()
            break;
        case '3':
            forWhile = false
            break;
        default:
            alert('Notogri buyruq kiritildi!')
            break;
    }
}

function royxatdanOtish(){
    let name = prompt('Ismingizni kiriting: ')
    let cardNumber = prompt('Karta raqamingizni kiriting: ')
    let cardName = prompt('Karta nomini kiriting: ')
    let balance = +prompt('Balansingizni kiriting: ')
    let mavjudFoydalanuvchi = users.find(u => u.cardNumber === cardNumber);
    if (mavjudFoydalanuvchi) {
        alert('Bu karta raqami bilan foydalanuvchi allaqachon mavjud!')
        return
    }
    
    const user = {
        name: name,
        cardNumber: cardNumber,
        cardName: cardName,
        balance: balance,
        history: []
    }
    users.push(user)
    alert('Royxatdan otdingiz!')
}

function pulOtkazish(user){
    let qabulQiluvchiCard = prompt("Qabul qiluvchi karta raqamini kiriting: ")
    let qiymat = +prompt('Summani kiriting: ')

    let qabulQiluvchi = users.find(u => u.cardNumber === qabulQiluvchiCard)
    
    if(!qabulQiluvchi) {
        alert('Qabul qiluvchi topilmadi!')
        return
    }

    if(user.balance < qiymat) {
        alert('Sizda yetarli balans mavjud emas!')
        return
    }

    user.balance -= qiymat
    qabulQiluvchi.balance += qiymat

    user.history.push(`Sizdan ${qabulQiluvchi.name} ga ${qiymat} som o'tkazildi.`)
    qabulQiluvchi.history.push(`${user.name} sizga ${qiymat} som yubordi.`)

    alert('Pul otkazildi!')
}

function hisobniKorish(user) {
    let info = `Ism: ${user.name}\nKarta raqami: ${user.cardNumber}\nKarta nomi: ${user.cardName}\nBalansi: ${user.balance} so'm`
    alert(info)
}

function tarixniKorish(user) {
    if (user.history.length === 0) {
        alert('Hech qanday tarix yoq')
        return
    }
    let info = 'Tranzaksiya tarixi:\n' + user.history.join('\n')
    alert(info)
}

function kirish(){
    let name = prompt('Ismingizni kiriting: ')
    let user = users.find(u => u.name === name)
    
    if (!user) {
        alert('Foydalanuvchi topilmadi!')
        return
    }

    alert('Tizimga kirdingiz!')

    let forWhile = true
    
    while(forWhile){
        let command = prompt(`1: Pul o'tkazish\n2: Hisobni ko'rish\n3: Tarixni ko'rish\n4: Chiqish`)
        switch (command) {
            case '1':
                pulOtkazish(user)
                break;
            case '2':
                hisobniKorish(user)
                break;
            case '3':
                tarixniKorish(user)
                break;
            case '4':
                forWhile = false
                break;
            default:
                alert('Notogri buyruq kiritildi!')
                break;
        }
    }
}
