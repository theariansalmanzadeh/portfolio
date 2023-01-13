import React from "react";
import { useLocation } from "react-router";
import {AnimatePresence }from "framer-motion";

function PageAnimation({children}) {
  const location = useLocation();
  return <React.Fragment>{children}</React.Fragment>;
}

export default PageAnimation;
