let displayCommands = `Mavjud komandalar:
1: add -- Yangi kontakt qo'shish
2: search -- Kontaktni qidirish
3: delete -- Kontaktni o'chirish
4: list -- Barcha kontaktlarni ko'rsatish
5: help -- Mavjud komandalarni ko'rsatish
6: exit -- Dasturdan chiqish`

let forWhile = true
let users = []

while (forWhile) {
    
    let command = prompt(displayCommands)

    switch (command) {
        
        case '1':
           
            let name = prompt("Kontakt ismini kiriting: ")
            if (!name) {
                alert("Ism kiritilmadi!")
                break;
            }

            let number = prompt('Kontakt raqamini kiriting (+998 bilan boshlanishi kerak): ')
            if (!number.startsWith("+998")) {
                alert("Raqam +998 bilan boshlanishi kerak!")
                break;
            }

            let user = {
                name: name,
                number: number
            }
            users.push(user)
            alert("Kontakt qo'shildi!")
            break;

        case "2":
            
            let findUser = ''
            let searchName = prompt('Qidirish uchun ism kiriting:')
            for (let i = 0; i < users.length; i++) {
                if (users[i]['name'].toLowerCase().includes(searchName)) {
                    findUser += `Ism: ${users[i]["name"]}\nRaqam: ${users[i]['number']}\n---------------------------\n\n`
                }
            }

            if (findUser.length == 0) {
                findUser += 'Kontakt topilmadi!'
            }
            alert(findUser)
            break;

        case "3":
            
            let deleteName = prompt("O'chirilishi kerak bo'lgan kontakt ismini kiriting: ")
            let index = -1;
            for (let i = 0; i < users.length; i++){
                if (users[i]['name'] == deleteName) {
                    index = i;
                }
            }

            if (index != -1) {
                users.splice(index, 1);
                alert("Kontakt o'chirildi!")
            } else {
                alert("Bunday ism topilmadi!")
            }
            break;
        
        case '4':
            
            let usersList = ''
            for (let i = 0; i < users.length; i++){
                usersList += `Ism: ${users[i]["name"]}\nRaqam: ${users[i]['number']}\n----------------------------\n\n`
            }
            if (usersList.length == 0) {
                usersList = "Kontaktlar mavjud emas!"
            }
            alert(usersList)
            break;

        case '5':
            
            alert(displayCommands)
            break;
        
        case "6":
            alert('Dastur tugatildi !')
            forWhile = false;
            break;
        default:
            alert('Bunday komanda mavjud emas !!!')
            break;
    }
}
