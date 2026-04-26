import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
  {
    id: "1",
    title: "Breaking News: Major Event Unfolds in the City",
  },
  {
    id: "2",
    title: "Breaking News: New Policy Announced by the Government",
  },
  {
    id: "3",
    title: "Breaking News: Sports Team Wins Championship",
  },
];

const BreakingNews = () => {
    return (
        <div className='flex justify-between items-center gap-4 py-2 px-2 bg-gray-200 container mx-auto'>
            <button className='btn btn-info'>Latest News</button>
            <Marquee pauseOnHover>
           {news.map(n =><div key={n.id} className='mx-6 whitespace-nowrap'>
            {n.title}
           </div>)}
            </Marquee>
        </div>
    );
};

export default BreakingNews;