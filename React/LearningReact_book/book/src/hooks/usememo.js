import React, { useEffect, useMemo } from "react";

const words = useMemo(() => {
  const words = children.split(" ");
  return words;
}, []);

useEffect(() => {
  console.log("Fresh render");
}, [words]);
