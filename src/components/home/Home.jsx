import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData();
    console.log(tshirt)
    return (
        <div>
            <p>T shirt total : {tshirt.length}</p>
        </div>
    );
};

export default Home;