import React from "react";
import { useLoaderData } from "react-router-dom";
import {FaStar, FaPlayCircle, FaCircle} from 'react-icons/fa'
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";

const CardDetails = () => {
  const category = useLoaderData()

  const ref = React.createRef();

  const {name, id, img, rating, video_duration, shorts, overview} =category
  const overViewList = []

  overview.forEach((list, i) =>{
    overViewList.push(<li key={i} className="flex ml-4 "><FaCircle className="mt-1  mr-2 text-[12px]"/> {list}</li>)
  })
  


  return (
    <div  ref={ref} style={{maxWidth: "800px"}} className="mx-auto mt-5">
      <div className=" rounded-md p-[5%]  shadow-md dark:bg-gray-900 dark:text-gray-100">
      <div className="flex justify-end mb-4">
            <Pdf targetRef={ref} filename={`${name}.pdf`}>
        {({ toPdf }) => <button onClick={toPdf} className='btn bg-slate-700 hover:bg-slate-600 hover:text-slate-200 dark:bg-slate-600   dark:text-slate-200'>Download Pdf</button>}
      </Pdf>
            </div>
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <div className="md:flex md:justify-between">
            <h2 className="text-2xl font-bold tracking-wide mb-6">
              {name}
            </h2>
            
            </div>
            <p className="dark:text-gray-100  ">{shorts}</p>
            <h3 className="text-xl font-semibold pt-5">Course overview</h3>
            <ul  >
              {overViewList}
            </ul>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p className="mr-2">Rating:</p>
              <span>{rating}</span>
              <FaStar className="text-yellow-500 ml-1" />{" "}
            </div>
            <div className="flex items-center">
              <FaPlayCircle className="mr-2" />{" "}
              <span>Video duration {video_duration}h</span>
            </div>
          </div>

          <Link
            to={`/checkout/${id}`}
            className="flex items-center justify-center w-full btn p-3 font-semibold tracking-wide rounded-md bg-slate-700 hover:bg-slate-700 hover:text-slate-200 dark:bg-slate-600   dark:text-slate-200"
          >
            Get Premium Access
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
