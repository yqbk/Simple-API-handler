import {
  GET_API_REQUEST,
  GET_API_REQUEST_SUCCESS,
  GET_API_REQUEST_FAILURE
} from "../actions/requestActions";

const initialState = {
  address: "",
  response: "",
  loading: false,
  error: null
};

export default function responsesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_API_REQUEST: {
      return {
        ...state,
        address: action.payload.address,
        loading: true
      };
    }

    case GET_API_REQUEST_SUCCESS: {
      return {
        ...state,
        loading: false,
        response: action.payload.response
      };
    }

    case GET_API_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      };

    default:
      return state;
  }
}
