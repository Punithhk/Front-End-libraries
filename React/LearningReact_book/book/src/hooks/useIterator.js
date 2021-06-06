import React, { useState, useCallback, useMemo } from "react";
export const useIterator = (items = [], initialValue = 0) => {
  const [i, setIndex] = useState(initialValue);
  const prev = useCallback(() => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);
  }, [i]);

  const next = useCallback(() => {
    if (i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
  }, [i]);
  const item = useMemo(() => items[i], [i]);
  return [item || items[0], prev, next];
};

/*
export const useIterator = (items = [], initialIndex = 0) => {
  const [i, setIndex] = useState(initialIndex);
  const prev = () => {
    if (i === 0) return setIndex(items.length - 1);
    setIndex(i - 1);
  };
  const next = () => {
    if (i === items.length - 1) return setIndex(0);
    setIndex(i + 1);
  };
  return [items[i], prev, next];
};
*/
