import LeftSideBar from '@/components/Homepage/News/LeftSideBar';
import RightSideBar from '@/components/Homepage/News/RightSideBar';
import React from 'react';

const NewsCategory = async({ params }) => {
    const { id } =await params;
    console.log(id);
    

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
  const data = await res.json()
  return data.data

}
async function getNewsCategoryId(category_id) {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
  const data = await res.json()
  return data.data

}

 const categories = await getCategories()
  const news = await getNewsCategoryId(id)

    return (
         <div className="grid grid-cols-12 gap-4 mt-8 container mx-auto justify-between">
      <div className="col-span-3 ">
        <LeftSideBar categories={categories} activeId={id} />
      </div>




      <div className="col-span-6 bg-green-300">
        <div className="space-y-2">
          {
           news.length> 0? news.map((n) => {
              return <div key={n._id}>
                {n.title}
              </div>
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