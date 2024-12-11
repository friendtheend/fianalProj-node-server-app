export default[
    {
      "_id": "1",
      "quizId": "1",
      "pts":10,
      "name": "Introduction to Rocket Propulsion Question1",
      "description": "Basic principles of rocket propulsion and rocket engines.",
      "course": "RS101",
      "title":"question title",
      "type":"Multiple Choice",
      "answers": [
        {
            id: 1, // 每个答案的唯一标识符（可用 index 或生成的唯一 ID）
            text: "True", // 答案文本
            isCorrect: true, // 是否为正确答案
          },
          {
            id: 2,
            text: "False",
            isCorrect: false,
          }
      ]
    },

    {
        "_id": "2",
        "quizId": "2",
        "pts":10,
        "name": "Introduction to Rocket Propulsion",
        "description": "Basic principles of rocket propulsion and rocket engines.",
        "course": "RS101",
        "title":"question title",
        "type":"Multiple Choice",
        "answers": [
        //   {
        //     "_id": "1",
        //     "answerDescription": "Question1.",
        //     "quizCourse": "M101"
        //   },
        //   {
        //     "_id": "2",
        //     "answerDescription": "Question2.",
        //     "quizCourse": "M101"
        //   },
        //   {
        //     "_id": "3",
        //     "answerDescription": "Question3.",
        //     "quizCourse": "M101"
        //   }
        {
            id: 1, // 每个答案的唯一标识符（可用 index 或生成的唯一 ID）
            text: "True", // 答案文本
            isCorrect: true, // 是否为正确答案
          },
          {
            id: 2,
            text: "False",
            isCorrect: false,
          }
        ]
      },
]