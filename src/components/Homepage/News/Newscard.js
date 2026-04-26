import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoMdShare } from 'react-icons/io';

const Newscard = ({news}) => {
    return (
 <div className="card bg-base-100  shadow-sm">
  <div className="card-body ">
    <div className='flex justify-between items-center'>
       
      <div className='flex items-center  gap-5 '>
          <Image className='rounded-full'
        src={news.author.img}
        width={40}
        height={40}
        alt={news.title} />
       <div className='flex flex-col '>
        <p>{news.author.name}</p>
       <p>{news.author.published_date}</p>
       </div>
      </div>
        <div className='flex justify-between items-center gap-0.5 text-lg'>
        <CiBookmark />
        <IoMdShare />

        </div>
    </div>
  </div>
  <div>
    <Image
    src={news.image_url}
    width={300}
    height={300}
    alt={news.title}
    className='w-full'
    />
  </div>
<div>
    <h2 className='font-bold text-lg'>{news.title}</h2>
        <p className='line-clamp-3'>{news.details}</p>
</div>
<Link href={`/news/${news._id}`}>
<button className='btn my-3'>see more</button>
</Link>
</div>
    );
};

export default Newscard;