import React from "react";
import {AiOutlineLoading3Quarters} from "@react-icons/all-files/ai/AiOutlineLoading3Quarters"

const Loader = () => {
  return (
    <div className="my-40">
        <h5><AiOutlineLoading3Quarters className="animate-spin text-cyan-500 h-32 text-xl font-mono rounded-full flex items-center justify-center w-32 mx-auto p-10 my-20"></AiOutlineLoading3Quarters></h5>
    </div>
  );
};

export default Loader;
