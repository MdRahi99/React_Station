import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const ConceptDetails = () => {
  const conceptInfo = useLoaderData();
  const { name, description } = conceptInfo;
  useTitle(`${name} Details`);

  return (
    <div className="bg-cyan-50 p-4">
      <div>
        <h1 className="text-2xl uppercase font-serif font-bold text-center p-4">
          {name}
        </h1>
        <h1 className="text-xl bg-cyan-100 p-8 font-serif">{description}</h1>
      </div>
      <Link className="text-2xl font-serif bg-cyan-300 hover:bg-cyan-600 hover:text-white flex items-center justify-center w-20 mx-auto mt-6 px-3 py-1 rounded" to="/">Back</Link>
    </div>
  );
};

export default ConceptDetails;
