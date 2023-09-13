import { primary_color } from "@/utils/Colors";
import Link from "next/link";
import React from "react";

interface buttonInfo {
  text: string;
  link: string ;

}

function Button({ text, link }: buttonInfo) {
  return (
    <Link href={link}>
      <button
        className="px-8 py-2 w-fit text-white rounded-lg"
        style={{ background: primary_color ,whiteSpace:'nowrap'}}
      >
        {text}
      </button>
    </Link>
  );
}

export default Button;
