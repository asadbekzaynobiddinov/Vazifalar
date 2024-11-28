import { assigmentRouter } from "./assigments.routes.js";
import { usersRouter } from "./users.routes.js";
import { courseRouter } from "./courses.routes.js";
import { studentsRouter } from "./students.routes.js";
import { teachersRouter } from "./teachers.routes.js";
import { authRouter } from "./auth.routes.js";
import { homeworkRouter } from "./homework.routes.js";
import { lessonRouter } from "./lesson.routes.js";
import { examRouter } from "./exam.routes.js";

const Routes = {
    assigmentRouter,
    usersRouter,
    courseRouter,
    studentsRouter,
    teachersRouter,
    authRouter,
    lessonRouter,
    homeworkRouter,
    examRouter
}

export default Routes