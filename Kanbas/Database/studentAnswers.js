export default[
    {
        _id: 1,
        course: 2,
        quizId:studentAnswer.quizId,
        studentId:studentAnswer.studentId,
        attemptTime:studentAnswer.attempTime,

        answers: {

         _id: new Date().getTime().toString(),
         questionId:studentAnswer.questionId,
         studentAnswerText:studentAnswer.text,
 
        },
    }
]