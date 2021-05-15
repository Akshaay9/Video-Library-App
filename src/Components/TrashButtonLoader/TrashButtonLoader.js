import React, { useState } from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeAnAPICall } from "../../APICalls";
function TrashButtonLoader({
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
        <CircularProgress />
      ) : (
        <i
          className="fas fa-trash"
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
        />
      )}
    </div>
  );
}

export default TrashButtonLoader;
