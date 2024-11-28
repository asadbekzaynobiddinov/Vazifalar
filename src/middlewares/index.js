import {validateAssigment} from './assigment.middleware.js'
import {validateCourse} from './course.middleware.js'
import {validateStudent} from './students.middleware.js'
import {validateTeacher} from './teachers.middleware.js'
import {validateUser} from './user.middleware.js'
import { validateLesson } from './lesson.mmiddleware.js'
import { validateHomework } from './homework.middleware.js'
import { validateExam } from './exam.middleware.js'

const Validators = {
    validateAssigment,
    validateCourse,
    validateStudent,
    validateTeacher,
    validateUser,
    validateLesson,
    validateHomework,
    validateExam
}

export default Validators