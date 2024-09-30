let studentsList = new Map()

function createStudent(name, info) {
    if (studentsList.has(name)) {
        console.log(`Xatolik: ${name} allaqachon mavjud.`)
    } else {
        studentsList.set(name, info)
        console.log(`${name} qo'shildi.`)
        console.log("Yangi foydalanuvchilar ro'yxati:", [...studentsList.entries()])
    }
}

function readStudent(name) {
    if (studentsList.has(name)) {
        console.log(`${name} ma'lumotlari:`, studentsList.get(name))
    } else {
        console.log(`Foydalanuvchi ${name} topilmadi.`)
    }
}

function updateStudent(name, newInfo) {
    if (studentsList.has(name)) {
        studentsList.set(name, newInfo)
        console.log(`${name} yangilandi. Yangilangan ma'lumotlar:`, studentsList.get(name))
    } else {
        console.log(`Foydalanuvchi ${name} topilmadi.`)
    }
}

function deleteStudent(name) {
    if (studentsList.has(name)) {
        studentsList.delete(name)
        console.log(`${name} o'chirildi.`)
    } else {
        console.log(`Foydalanuvchi ${name} topilmadi.`)
    }
}

createStudent("Ali", { age: 20, course: "Matematika" })
createStudent("Vali", { age: 22, course: "Fizika" })

readStudent("Ali")

updateStudent("Ali", { age: 21, course: "Kompyuter ilmlari" })

deleteStudent("Vali")
deleteStudent("Hasan")
