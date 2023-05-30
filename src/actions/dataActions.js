import axios from "axios";

export const fetchData = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        dispatch({
          type: "FETCH_DATA_SUCCESS",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "FETCH_DATA_FAILURE",
          payload: error.message,
        });
      });
  };
};

export const deleteData = (id) => {
  return (dispatch) => {
    dispatch({
      type: "DELETE_DATA",
      payload: id,
    });
  };
};
