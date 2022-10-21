import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../Sheard/NewsSummaryCard';

const Home = () => {
    const allnews = useLoaderData()
    return (
        <div>
            <h4>This is Home page : {allnews.length}</h4>
            {
                allnews.map(news=><NewsSummaryCard
                key={news._id}
                news={news}
                />)
            }
        </div>
    );
};

export default Home;