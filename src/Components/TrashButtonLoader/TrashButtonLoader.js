import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
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
        <ClipLoader color={"blue"}  size={30} />
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
