import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideCategory = ({category}) => {
   
    return (
        <div className='px-8  py-3 font-semibold rounded '>
            <Link  to={`/course/${category.id}`} className='btn w-full bg-slate-700 hover:bg-slate-800 hover:text-slate-200 dark:bg-slate-700   dark:text-slate-200'>{category.name}</Link>
        </div>
    );
};

export default LeftSideCategory;