import LeftSideBar from '@/components/Homepage/News/LeftSideBar';
import Newscard from '@/components/Homepage/News/Newscard';
import RightSideBar from '@/components/Homepage/News/RightSideBar';
import { getCategories, getNewsCategoryId } from '@/lib/data';
import React from 'react';

const NewsCategory = async({ params }) => {
    const { id } =await params;
    console.log(id);
    




 const categories = await getCategories()
  const news = await getNewsCategoryId(id)

    return (
         <div className="grid grid-cols-12 gap-4 mt-8 container mx-auto justify-between">
      <div className="col-span-3 ">
        <LeftSideBar categories={categories} activeId={id} />
      </div>




      <div className="col-span-6 ">
        <div className="space-y-4">
          {
           news.length> 0? news.map((n) => {
              return <Newscard key={n._id} news={n}/>
            }):<h2 className='font-bold text-3xl text-center my-7'>No News Found</h2>
          }</div>


      </div>
      <div className="col-span-3">

        <RightSideBar />
      </div>




    </div>
    );
};

export default NewsCategory;