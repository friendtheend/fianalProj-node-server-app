import Database from "../Database/index.js";
import * as dao from "./dao.js";
import * as modulesDao from "../Modules/dao.js";
import * as quizzesDao from "./Quizzes/dao.js"
import * as questionsDao from "./Questions/dao.js"
import * as enrollmentsDao from "../Enrollments/dao.js";
export default function CourseRoutes(app) {
  // 得到特定的课的 modules
  app.post("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const module = {
      ...req.body,
      course: courseId,
    };
    const newModule = modulesDao.createModule(module);
    res.send(newModule);
  });

  //   所有的课程
  app.get("/api/courses", (req, res) => {
    const courses = dao.findAllCourses();
    res.send(courses);
  });

  // 得到这门课的modules
  app.get("/api/courses/:courseId/modules", (req, res) => {
    const { courseId } = req.params;
    const modules = modulesDao.findModulesForCourse(courseId);
    res.json(modules);
  });



    // 得到所有的的questions
    app.get("/api/courses/:courseId/questions", (req, res) => {
      const { courseId } = req.params;
      console.log(courseId)
      const questions = questionsDao.findAllQuestions();
      res.json(questions);
    });
  

      // 得到这门课的quizzes
  app.get("/api/courses/:courseId/quizzes", (req, res) => {
    const { courseId } = req.params;
    const quizzes = quizzesDao.findQuizzesForCourse(courseId);
    res.json(quizzes);
  });

    // 得到这门课的questions
    app.get("/api/courses/:courseId/quizzes/:quizId", (req, res) => {
      const { courseId , quizId} = req.params;
      // console.log(courseId,quizId)
      const questions = questionsDao.findQuestionsForQuiz(quizId);
      res.json(questions);
    });
  
  app.delete("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const status = dao.deleteCourse(courseId);
    res.send(status);
  });

  // 修改这个course id的课的内容
  app.put("/api/courses/:courseId", (req, res) => {
    const { courseId } = req.params;
    const courseUpdates = req.body;
    const status = dao.updateCourse(courseId, courseUpdates);
    res.send(status);
  });

  app.get("/api/enrollments", (req, res) => {
    const enrollments = enrollmentsDao.findAllEnrollments();
    res.send(enrollments);
  });
}
