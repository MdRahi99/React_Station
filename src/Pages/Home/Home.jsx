import React from 'react';
import CoreConcepts from '../CoreConcepts/CoreConcepts';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home');
    return (
        <div className='bg-cyan-50'>
            <CoreConcepts></CoreConcepts>
        </div>
    );
};

export default Home;