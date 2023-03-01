import useModalDom from "../helpers/hooks/useModalDom";
import useScrollToTop from "../helpers/hooks/useScrollToTop";
import useScrollAnchor from "../helpers/hooks/useScrollAnchor";

function Document({ children }) {
  useModalDom();
  useScrollToTop();
  useScrollAnchor();
  return children;
}

export default Document;
