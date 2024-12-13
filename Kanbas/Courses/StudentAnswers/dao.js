
import Database from "../../Database/index.js";
export function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: Date.now().toString() };
    Database.quizzes = [...Database.quizzes, newQuiz];
    return newQuiz;
}

export function findAllQuizzes(){
    return Database.quizzes;
}

export function findStudentAnswersForQuizId(courseId,quizId,studentId) {
    const { studentAnswers } = Database;
    return studentAnswers.filter((answer) => answer.quizId === quizId && answer.studentId === studentId);
}