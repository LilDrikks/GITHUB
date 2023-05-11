import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Pagina = ({ children }: Props) => {
  return (
    <div
      className={`
      flex flex-col justify-center
      items-center bg-black w-screen
      h-screen text-white
      bg-[url('https://source.unsplash.com/random/1920x1080/?universe')]
      bg-no-repeat bg-cover
      `}
    >
      <div
        className={`
          flex flex-col w-full h-full
          justify-center items-center
          bg-black bg-opacity-80
          `}
      >
        {children}
      </div>
    </div>
  );
};
export default Pagina;
