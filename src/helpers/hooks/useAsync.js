import { useRef, useReducer, useCallback } from "react";
import useSafeDispatch from "./useSafeDispatch";

const defaultState = {
  data: null,
  status: "idle",
  error: null,
};
function useAsync(initialState) {
  const initialStateRef = useRef({ ...defaultState, ...initialState });

  const [{ data, status, error }, setState] = useReducer((state, action) => {
    return { ...state, ...action };
  }, initialStateRef.current);

  const safeSetState = useSafeDispatch(setState);

  const run = useCallback(
    (promise) => {
      if (!promise || !promise.then) throw new Error(`Argumen yang melewati useAsync().run harus promise`);
      safeSetState({ status: "pending" });
      return promise.then(
        (data) => {
          safeSetState({ data, status: "resolved" });
          return data;
        },
        (error) => {
          safeSetState({ status: "rejected", error: JSON.parse(error.message) });
        }
      );
    },
    [safeSetState]
  );

  const setData = useCallback(
    (data) => {
      safeSetState({ data });
    },
    [safeSetState]
  );
  const setError = useCallback(
    (error) => {
      safeSetState({ error });
    },
    [safeSetState]
  );
  const reset = useCallback(() => {
    safeSetState(initialStateRef.current);
  }, [safeSetState]);
  return {
    data,
    status,
    error,
    run,
    setData,
    setError,
    reset,
    isIdle: status === "idle",
    isLoading: status === "idle" || status === "pending",
    isError: status === "rejected",
    isSucces: status === "resolved",
  };
}

export default useAsync;
