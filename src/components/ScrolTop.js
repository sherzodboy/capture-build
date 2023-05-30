import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrolTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrolTop;
