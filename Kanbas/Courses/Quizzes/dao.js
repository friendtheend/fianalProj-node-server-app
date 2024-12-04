// dao.js 文件负责数据访问层（Data Access Object, DAO），用于处理与数据库的交互。
// import Database from "../Database/index.js";
import Database from "../../Database/index.js";
export function createQuiz(quiz) {
    const newQuiz = { ...quiz, _id: Date.now().toString() };
    Database.quizzes = [...Database.quizzes, newQuiz];
    return newQuiz;
}

export function findAllQuizzes(){
    return Database.quizzes;
}

export function findQuizzesForCourse(courseId) {
    const { quizzes } = Database;
    return quizzes.filter((quiz) => quiz.course === courseId);
}

export function deleteQuiz(quizId) {
    const { quizzes } = Database;
    Database.quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
}

export function updateQuiz(quizId, quizUpdates) {
    const { quizzes } = Database;
    const quiz = quizzes.find((quiz) => quiz._id === quizId);

    if (!quiz) {
        throw new Error(`Quiz with ID ${quizId} not found.`);
    }
    Object.assign(quiz, quizUpdates);
    return quiz;
  }
