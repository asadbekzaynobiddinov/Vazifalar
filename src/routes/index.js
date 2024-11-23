import { assigmentRouter } from "./assigments.routes.js";
import { usersRouter } from "./users.routes.js";
import { courseRouter } from "./courses.routes.js";
import { studentsRouter } from "./students.routes.js";
import { teachersRouter } from "./teachers.routes.js";
import { authRouter } from "./auth.routes.js";

const Routes = {
    assigmentRouter,
    usersRouter,
    courseRouter,
    studentsRouter,
    teachersRouter,
    authRouter
}

export default Routes