/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuestion = `mutation CreateQuestion(
  $input: CreateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  createQuestion(input: $input, condition: $condition) {
    id
    question
    optionA
    optionB
    optionC
    optionD
    answer
    explanation
    topic
  }
}
`;
export const updateQuestion = `mutation UpdateQuestion(
  $input: UpdateQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  updateQuestion(input: $input, condition: $condition) {
    id
    question
    optionA
    optionB
    optionC
    optionD
    answer
    explanation
    topic
  }
}
`;
export const deleteQuestion = `mutation DeleteQuestion(
  $input: DeleteQuestionInput!
  $condition: ModelQuestionConditionInput
) {
  deleteQuestion(input: $input, condition: $condition) {
    id
    question
    optionA
    optionB
    optionC
    optionD
    answer
    explanation
    topic
  }
}
`;
export const createStudentresponse = `mutation CreateStudentresponse(
  $input: CreateStudentresponseInput!
  $condition: ModelstudentresponseConditionInput
) {
  createStudentresponse(input: $input, condition: $condition) {
    id
    question
    submitted_answer
    right_wrong
    date
  }
}
`;
export const updateStudentresponse = `mutation UpdateStudentresponse(
  $input: UpdateStudentresponseInput!
  $condition: ModelstudentresponseConditionInput
) {
  updateStudentresponse(input: $input, condition: $condition) {
    id
    question
    submitted_answer
    right_wrong
    date
  }
}
`;
export const deleteStudentresponse = `mutation DeleteStudentresponse(
  $input: DeleteStudentresponseInput!
  $condition: ModelstudentresponseConditionInput
) {
  deleteStudentresponse(input: $input, condition: $condition) {
    id
    question
    submitted_answer
    right_wrong
    date
  }
}
`;
