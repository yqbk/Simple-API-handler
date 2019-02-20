import reducer from "../../reducers/responsesReducer";
import * as actions from "../../actions/requestActions";

describe("requests reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      address: "",
      error: null,
      loading: false,
      response: ""
    });
  });

  it("should handle GET_API_REQUEST", () => {
    const startAction = {
      type: actions.GET_API_REQUEST,
      payload: { address: "/api/address" }
    };

    expect(reducer({}, startAction)).toEqual({
      address: "/api/address",
      loading: true
    });
  });

  it("should handle GET_API_REQUEST_SUCCESS", () => {
    const startAction = {
      type: actions.GET_API_REQUEST_SUCCESS,
      payload: {
        response: {
          menu: {
            id: "file"
          }
        }
      }
    };

    expect(reducer({}, startAction)).toEqual({
      response: {
        menu: {
          id: "file"
        }
      },
      loading: false
    });
  });
});
