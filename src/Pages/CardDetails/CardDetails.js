import React from "react";
import { useLoaderData } from "react-router-dom";
import {FaStar, FaPlayCircle} from 'react-icons/fa'
import { Link } from "react-router-dom";

const CardDetails = () => {
  const category = useLoaderData()
  return (
    <div style={{maxWidth: "800px"}} className="mx-auto">
      <div className=" rounded-md p-[5%]  shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={category.img}
          alt=""
          className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-wide">
              {category.name}
            </h2>
            <p className="dark:text-gray-100">{category.shorts}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <FaStar className="text-yellow-500 mr-2" />{" "}
              <span>{category.rating}</span>
            </div>
            <div className="flex items-center">
              <FaPlayCircle className="mr-2" />{" "}
              <span>Video duration {category.video_duration}h</span>
            </div>
          </div>

          <Link
            to=""
            className="flex items-center justify-center w-full btn p-3 font-semibold tracking-wide rounded-md hover:bg-slate-800 dark:bg-violet-400 dark:text-gray-900"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
