import React from "react";
import { useInput } from "./hook";
import { useColors } from "./color-hook.js";

export default function AddColorForm() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");
  const { addColor } = useColors();
  const submit = (e) => {
    e.preventDefault();
    addColor(titleProps.value, colorProps.value);
    resetColor();
    resetTitle();
  };
  return ( ... );
}
