import React from "react";
import Color from "./Color";
import { useColors } from "./color-hook.js";

export default function ColorList() {
  const { colors } = useColors();

  return ( ... );
}
