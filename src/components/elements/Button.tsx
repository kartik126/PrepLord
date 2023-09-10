import { primary_color } from "@/utils/Colors";
import React from "react";

interface buttonInfo {
  text: string;
}

function Button({ text }: buttonInfo) {
  return (
    <button className="px-8 py-2 w-fit text-white rounded-lg" style={{ background: primary_color }}>
      {text}
    </button>
  );
}

export default Button;
