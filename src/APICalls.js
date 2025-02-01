import axios from "axios";
import { setAlert } from "./Context/ToastContext/ToastAction";
export const makeAnAPICall = async (
  request,
  url,
  dispatch,
  dispatchType,
  dataToBeDispatched,
  token,
  dispatch1,
  msg,
  setCircleLoader,
  setProgressLoader
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      "auth-token": token,
    },
  };

  switch (request) {
    // delete request

    case "DELETE":
      try {
        const data = await axios.delete(url, config);

        if (setCircleLoader) {
          setCircleLoader(false);
        }
        if (dispatch1 != null && msg != null) {
          setAlert(msg, "danger", dispatch1);
        }
        if (!dispatch || !dispatchType) {
          return data.data;
        }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        if (setCircleLoader) {
          setCircleLoader(false);
        }
        console.log(error.response);
        if (dispatch1 != null) {
          setAlert(error.response.data.error, "danger", dispatch1);
        }
      }
      return;

    // get

    case "GET":
      try {
        const data = await axios.get(url, config);

        if (dispatch1 != null && msg != null) {
          setAlert(msg, "success", dispatch1);
        }
        if (!dispatch) {
          return data;
        }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        console.log(error.response);

        if (dispatch1 != null) {
          setAlert(error.response.data.error, "danger", dispatch1);
        }
      }
      return;

    //   post
    case "POST":
      try {
        const data = await axios.post(url, dataToBeDispatched || {}, config);
        if (setCircleLoader) {
          setCircleLoader(false);
        }
        if (setProgressLoader) {
          setProgressLoader(false);
        }
        if (dispatch1 != null && msg != null) {
          setAlert(msg, "success", dispatch1);
        }

        if (!dispatch || !dispatchType) {
          return data.data;
        }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        console.log(error.response);
        if (setCircleLoader) {
          setCircleLoader(false);
        }
        if (setProgressLoader) {
          setProgressLoader(false);
        }
        if (dispatch1 != null) {
          setAlert(error.response.data.error, "danger", dispatch1);
        }
      }
      return;
    default:
      return;
  }
};
