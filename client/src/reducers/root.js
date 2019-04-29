import {
    // CONSTANTS FOR PRIZES
    FETCH_ANSWER,
    FETCH_ANSWER_SUCCESS,
    FETCH_ANSWER_ERROR
} from '../actions/actions';
  
console.log("action.payload.response");
  const initialState = {
    answers:[],
    input: "Enter your question here",
    loading: false,
    text: "Fetch Data",
    showAnswer:"",
    fetching: false,
    error: null
  };
  
  export default function rootReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_ANSWER:
        return {
          ...state,
          fetching: true,
          error: null
        };
  
      case FETCH_ANSWER_SUCCESS:
        return {
          ...state,
          fetching: false,
          answers: this.state.answers[Math.floor(Math.random() * this.state.answers.length)]
        };
  
      case FETCH_ANSWER_ERROR:
        return {
          ...state,
          fetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  }
  