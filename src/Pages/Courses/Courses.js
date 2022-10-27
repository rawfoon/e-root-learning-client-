import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCards from '../CategoryCards/CategoryCards';
import LeftSideCategory from '../LeftSideCategory/LeftSideCategory';

const Courses = () => {

    const allCategories = useLoaderData()

    
    return (
        <div style={{maxWidth: "1440px"}} className='mx-auto' >
            {/* <h1>This is courses</h1> */}
            <div className='grid grid-cols-4 mt-5'>
                <div  className='col  '>
                    <p className='mx-8 mb-5 text-xl  px-12 rounded py-5 w-full text-white bg-slate-800 '>All Courses</p>

                    {
                        allCategories.map(category => <LeftSideCategory
                        key={category.id}
                        category={category}></LeftSideCategory>)
                    }
                    

                
                </div>
                <div className='col-span-3  '>

                    <div className='grid md:grid-cols-3 gap-4 p-[5%] mt-5'>
                    {
                        allCategories.map(category => <CategoryCards
                            key={category.id}
                            category={category}></CategoryCards>)
                    }
                    </div>
               

                </div>
            </div>
        </div>
    );
};

export default Courses;