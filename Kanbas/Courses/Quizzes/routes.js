import * as dao from "./dao.js";
import * as quizzesDao from "../Quizzes/dao.js";
export default function QuizRoutes(app) {


  app.delete("/api/quizzes/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const status = await quizzesDao.deleteQuiz(quizId);
    res.send(status);
  });

  
  app.put("/api/quizzes/:quizId", async(req, res) => {
    const { quizId } = req.params;
    const quizUpdates = req.body;
    
    const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
    res.send(status);
  });

  app.post("/api/courses/:courseId/quizzes", (req, res) => {
    const { courseId } = req.params;
    const quiz = {
      ...req.body,
      course: courseId,
    };
    const newQuiz = quizzesDao.createQuiz(quiz);
    res.send(newQuiz);
  });


}