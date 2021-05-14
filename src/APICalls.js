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
  setLoader,
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
      console.log("delete");

      try {
        const data = await axios.delete(url, config);

        if (setLoader) {
          setLoader(false);
        }
        if (dispatch1 != null && msg != null) {
          setAlert(msg, "danger", dispatch1);
        }
        // if (!dispatch || !dispatchType) {
        //   return data.data;
        // }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        if (setLoader) {
          setLoader(false);
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
        // if (!dispatch) {
        //   return data;
        // }
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
      console.log("post");

      try {
        const data = await axios.post(url, dataToBeDispatched, config);
        if (setLoader) {
          setLoader(false);
        }
        if (setProgressLoader) {
          setProgressLoader(false);
        }
        if (dispatch1 != null && msg != null) {
          setAlert(msg, "success", dispatch1);
        }

        // if (!dispatch || !dispatchType) {
        //   return data.data;
        // }
        dispatch({ type: dispatchType, payload: data.data });
      } catch (error) {
        console.log(error.response);
        if (setLoader) {
          setLoader(false);
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
