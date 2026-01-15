import React from "react";
import { LuHexagon } from "react-icons/lu";

const Loader = () => {
  return (
    <div className="w-full overflow-y-hidden dark:bg-[#0A192F] bg-white h-screen flex justify-center items-center text-[#64FFDA]">
      <div className="flex justify-center items-center animate-[ping_2s_linear_1_2s]">
        <LuHexagon className="animate-[spin_4s_linear_infinite] " size={100} />
        <span className="font-mono text-3xl absolute font-semibold">AK</span>
      </div>
    </div>
  );
};

export default Loader;
