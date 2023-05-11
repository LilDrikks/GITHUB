import Link from "next/link";
import React, { ReactNode } from "react";

type Props = {
  url: string;
  icone: any;
  children: ReactNode;
  className?: string;
};

function MenuItem({ url, icone, children, className }: Props) {
  return (
    <Link href={url}>
      <div className="flex flex-col items-center gap-1 cursor-pointer w-24">
        <div
          className={`
            flex justify-center items-center
            w-20 h-20 rounded-2xl border
          border-zinc-800 
          ${className ?? ""}`}
        >
          {icone && React.cloneElement(icone, {
            size: 62,
            strokeWidth:1,
          })}
        </div>
        <div className="text-xs text-center">{children}</div>
      </div>
    </Link>
  );
}

export default MenuItem;
