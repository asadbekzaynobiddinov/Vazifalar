// const todoList = {
//     tasks: [],
    
//     addTask(task) {
//         this.tasks.push(task)
//     },
    
//     removeTask(index) {
//         if (index > -1 && index < this.tasks.length) {
//             this.tasks.splice(index, 1)
//         }
//     },
    
//     displayTasks() {
//         console.log("Todo List:");
//         this.tasks.forEach((task, index) => {
//             console.log(`${index}: ${task}`)
//         })
//     }
// }

// todoList.addTask('Breakfast at 8:00 AM')
// todoList.addTask('Meeting at 12:00 PM')
// todoList.displayTasks()
// todoList.removeTask(0)
// todoList.displayTasks()



class TodoList {
    constructor() {
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task)
    }

    removeTask(index) {
        if (index > -1 && index < this.tasks.length) {
            this.tasks.splice(index, 1)
        }
    }

    displayTasks() {
        console.log("Todo List:")
        this.tasks.forEach((task, index) => {
            console.log(`${index}: ${task}`)
        })
    }
}

const myTodoList = new TodoList()
myTodoList.addTask('Breakfast at 8:00 AM')
myTodoList.addTask('Meeting at 12:00 PM')
myTodoList.displayTasks()
myTodoList.removeTask(0)
myTodoList.displayTasks()
