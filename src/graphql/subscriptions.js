/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuestion = `subscription OnCreateQuestion {
  onCreateQuestion {
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
export const onUpdateQuestion = `subscription OnUpdateQuestion {
  onUpdateQuestion {
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
export const onDeleteQuestion = `subscription OnDeleteQuestion {
  onDeleteQuestion {
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
export const onCreateStudentresponse = `subscription OnCreateStudentresponse($owner: String!) {
  onCreateStudentresponse(owner: $owner) {
    id
    question
    submitted_answer
    right_wrong
    date
    owner
  }
}
`;
export const onUpdateStudentresponse = `subscription OnUpdateStudentresponse($owner: String!) {
  onUpdateStudentresponse(owner: $owner) {
    id
    question
    submitted_answer
    right_wrong
    date
    owner
  }
}
`;
export const onDeleteStudentresponse = `subscription OnDeleteStudentresponse($owner: String!) {
  onDeleteStudentresponse(owner: $owner) {
    id
    question
    submitted_answer
    right_wrong
    date
    owner
  }
}
`;
