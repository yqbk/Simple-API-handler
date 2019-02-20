export function fetchAPI(address, mode) {
  return dispatch => {
    // we replace any address with path to file
    const mockedAddress = "/service/response." + mode;

    dispatch(getAPIRequest(mockedAddress));

    // Mock real address and get data from static files provided for the task
    return fetch(mockedAddress)
      .then(handleErrors)
      .then(response => (mode === "json" ? response.json() : response.text()))
      .then(data => dispatch(getAPIRequestSuccess(data)))
      .catch(error => dispatch(getAPIRequestFailure(error)));
  };
}

// Handle HTTP errors
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const GET_API_REQUEST = "GET_API_REQUEST";
export const GET_API_REQUEST_SUCCESS = "GET_API_REQUEST_SUCCESS";
export const GET_API_REQUEST_FAILURE = "GET_API_REQUEST_FAILURE";

export const getAPIRequest = address => ({
  type: "GET_API_REQUEST",
  payload: { address }
});

export const getAPIRequestSuccess = response => {
  return {
    type: "GET_API_REQUEST_SUCCESS",
    payload: { response }
  };
};

export const getAPIRequestFailure = error => ({
  type: "GET_API_REQUEST_FAILURE",
  payload: { error }
});
