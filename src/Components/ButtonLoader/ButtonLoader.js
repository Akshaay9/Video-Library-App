import React, { useState } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeAnAPICall } from "../../APICalls";
function ButtonLoader({
  url,
  dispatch,
  dispatchtype,
  dataToBeDispatched,
  token,
  toastDIspatch,
  msg,
}) {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {loading ? (
        <div>
          {" "}
          <CircularProgress />
        </div>
      ) : (
        <button
          className="btn btn-secondary btn-secondary-hr-outline-in playlist-btn-cta"
          onClick={() => {
            setLoading(true);
            makeAnAPICall(
              `DELETE`,
              url,
              dispatch,
              dispatchtype,
              dataToBeDispatched,
              token,
              toastDIspatch,
              msg,
              setLoading
            );
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}

export default ButtonLoader;
