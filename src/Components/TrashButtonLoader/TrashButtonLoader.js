import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { makeAnAPICall } from "../../APICalls";
import { useToastContext } from "../../Context/ToastContext/ToastContext";

function TrashButtonLoader({
  url,
  dispatch,
  dispatchtype,
  dataToBeDispatched,
  token,
  msg

}) {
  const [loading, setLoading] = useState(false);
  const { toastDispatch } = useToastContext();

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
              toastDispatch,
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
