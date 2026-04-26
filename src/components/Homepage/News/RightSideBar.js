import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <h2 className='mb-4 font-bold'>Login With</h2>
          <div className='flex flex-col gap-2'>  <button className='btn'><FaGoogle />Login With Google</button>
            <button className='btn'><FaGithub />Login With Github</button></div>
        </div>
    );
};

export default RightSideBar;