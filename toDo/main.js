let toDos = [];
let forWhile = true;

while (forWhile) {
    let command = prompt('Biror bir komandani tanlang:\n1:add\n2:list\n3:delete\n4:exit');

    switch (command) {
        case '1':
            let toDo = prompt('Ishni kiriting: ');
            toDos.push(toDo);
            break;
        case '2':
            let todolar = ''
            for (let i = 0; i < toDos.length; i++) {
                todolar += `${i}: ${toDos[i]}\n`
            }
            alert(todolar);
            break;
        case '3':
            let edited = ''
            for (let i = 0; i < toDos.length; i++) {
                edited += `${i}: ${toDos[i]}\n`
            }
            alert(edited);
            let index = prompt('Ishning tartib raqamini kiriting: ')
            toDos.splice(index, index + 1);
            break;
        case '4':
            forWhile = false;
            alert('Dastur tugatildi')
            break;
        default:
            alert('Bunaqa komanda yoq !')
            break;
    }
}