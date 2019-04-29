export const FETCH_ANSWER = 'FETCH_ANSWER';
export const FETCH_ANSWER_SUCCESS = 'FETCH_ANSWER_SUCCESS';
export const FETCH_ANSWER_ERROR = 'FETCH_ANSWER_ERROR';
console.log("Function called")
export const fetchAnswer = () => ({
    type: 'FETCH_ANSWER'
  });
  
  export const fetchAnswerSuccess = data => ({
    type: 'FETCH_ANSWER_SUCCESS',
    payload: data
  });
  
  export const fetchAnswerError = error => ({
    type: 'FETCH_ANSWER_ERROR',
    payload: error
  });