/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuestion = `query GetQuestion($id: ID!) {
  getQuestion(id: $id) {
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
export const listQuestions = `query ListQuestions(
  $filter: ModelQuestionFilterInput
  $limit: Int
  $nextToken: String
) {
  listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getStudentresponse = `query GetStudentresponse($id: ID!) {
  getStudentresponse(id: $id) {
    id
    question
    submitted_answer
    right_wrong
    date
    owner
  }
}
`;
export const listStudentresponses = `query ListStudentresponses(
  $filter: ModelstudentresponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudentresponses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      question
      submitted_answer
      right_wrong
      date
      owner
    }
    nextToken
  }
}
`;
