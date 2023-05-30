const initialState = {
  data: [],
  loading: true,
  error: null,
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case "DELETE_DATA":
      const updatedData = state.data.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        data: updatedData,
        loading: false,
        error: null,
      };   
    default:
      return state;
  }
};

export default dataReducer;
