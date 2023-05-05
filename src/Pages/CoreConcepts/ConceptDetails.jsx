import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ConceptDetails = () => {
    const conceptInfo = useLoaderData();
    console.log(conceptInfo)
    return (
        <div>
            <h1>{conceptInfo.name}</h1>
        </div>
    );
};

export default ConceptDetails;