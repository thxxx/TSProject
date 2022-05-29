import { useState, useCallback } from "react";

export default (initialValue = false) => {
  const [toggle, setToggle] = useState(initialValue);
  const onToggle = useCallback((e) => {
    e.preventDefault();
    setToggle((prev) => !prev);
  }, []);

  return [toggle, onToggle];
};
