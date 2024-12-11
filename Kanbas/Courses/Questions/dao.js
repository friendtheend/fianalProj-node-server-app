

import Database from "../../Database/index.js";

export function createQuestion(question) {
    const newQuestion = { ...question, _id: Date.now().toString() };
    Database.questions = [...Database.questions, newQuestion];
    return newQuestion;
}

export function findAllQuestions() {
    return Database.questions;
}

export function findQuestionsForQuiz(quizId) {
    const { questions } = Database;
    // console.log("questions quizid",quizId)

    return questions.filter((question) => question.quizId == quizId);

}


export function updateQuestion(questionId, questionUpdates) {
    const { questions } = Database;
    const question = questions.find((question) => question._id === questionId);
    console.log("update question", question)
    if (!question) {
        throw new Error(`Question with ID ${questionId} not found.`);
    }
    Object.assign(question, questionUpdates);
    return question;
}
