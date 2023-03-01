import React from "react";
import Header from "../parts/Header";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/Footer";
import PageErrorMessage from "../parts/PageErrorMessage";
import useScrollToTop from "../helpers/hooks/useScrollToTop";
function NotFound() {
  useScrollToTop();
  return (
    <>
      <Header theme={"black"} />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </>
  );
}

export default NotFound;
