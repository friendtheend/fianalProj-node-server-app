import * as dao from "./dao.js";
import * as questionsDao from "../Questions/dao.js";
export default function QuestionRoutes(app) {


//   app.delete("/api/quizzes/:quizId", async (req, res) => {
//     const { quizId } = req.params;
//     const status = await quizzesDao.deleteQuiz(quizId);
//     res.send(status);
//   });

  
//   app.put("/api/quizzes/:quizId", async(req, res) => {
//     const { quizId } = req.params;
//     const quizUpdates = req.body;
    
//     const status = await quizzesDao.updateQuiz(quizId, quizUpdates);
//     res.send(status);
//   });

  app.post("/api/courses/:courseId/quizzes/:quizId/questions", (req, res) => {
    const { courseId,quizId} = req.params;
    const question = {
      ...req.body,
      quizId: quizId,
    };
    const newQuestion = questionsDao.createQuestion(question);
    res.send(newQuestion);
  });


  app.put("/api/quizzes/:quizId/questionEditor/:questionId", async(req, res) => {
    const { quizId , questionId} = req.params;
    const questionUpdates = req.body;
    console.log(questionUpdates)
    const status = await questionsDao.updateQuestion(questionId, questionUpdates);
    res.send(status);
  });



}