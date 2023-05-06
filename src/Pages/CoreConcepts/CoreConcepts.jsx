import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";

const CoreConcepts = () => {
  useTitle('Core Concepts');
  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    fetch("https://react-station-server.vercel.app/core-concepts")
      .then((res) => res.json())
      .then((data) => {
        setConcepts(data);
    });
  }, []);

  return (
    <div className="my-6 p-4">
      <div>
        <h1 className="text-2xl text-center font-serif font-bold">React Core Concepts</h1>
        <div className="divider w-full lg:w-1/2 mx-auto"></div> 
      </div>

      <div className="flex lg:flex-row flex-col gap-3 mx-4 justify-around items-center bg-cyan-100 py-8 px-4 shadow-md shadow-cyan-600">
        {concepts.map((concept) => (
          <Link
            to={`/concept-details/${concept.id}`}
            className="p-4 bg-cyan-300 hover:bg-white hover:shadow-xl hover:shadow-cyan-600 w-full lg:w-1/6 rounded-xl text-center font-sans uppercase font-bold"
            key={concept.id}
          >
            <h3>{concept.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CoreConcepts;
