import React, { useEffect, useRef } from "react";

const ClickOutsideDivHandler = ({ children, onClickOutsideDiv }) => {
  const ref = useRef(null);
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  }, [ref]);

  const handleClickOutside = () => {
    console.log(!ref.current && !ref.current.contains(event.target));
    if (!ref.current && !ref.current.contains(event.target)) {
      onClickOutsideDiv();
    }
  };
  return <div ref={ref}>{children}</div>;
};

export default ClickOutsideDivHandler;
