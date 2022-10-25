import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideCategory = ({category}) => {
   
    return (
        <div className='px-8  py-3 font-semibold rounded dark:bg-gray-100 dark:text-gray-800'>
            <Link  to={`/course/${category.id}`} className='btn w-full bg-slate-700 hover:bg-slate-800 '>{category.name}</Link>
        </div>
    );
};

export default LeftSideCategory;