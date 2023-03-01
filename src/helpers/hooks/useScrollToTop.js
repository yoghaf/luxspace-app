import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

function useScrollToTop() {
  const history = useNavigate();
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [history]);
}

export default useScrollToTop;
