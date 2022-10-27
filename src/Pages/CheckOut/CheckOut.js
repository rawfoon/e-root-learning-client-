import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaPlayCircle, FaStar } from "react-icons/fa";
import {  useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const CheckOut = () => {
  const category = useLoaderData();
  const { user } = useContext(AuthContext);


  toast.success('Successfully Enrolled')


  return (
    <div style={{ maxWidth: "800px" }} className="mx-auto mt-10">
      <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-800 p-5 dark:text-white">
            {user ? user.displayName : "User"}
          </h1>
          <h1 className="text-xl md:text-3xl text-slate-800 p-5 dark:text-white">
            {" "}
            You have succesfully enrolled to the Course
          </h1>
          <h1 className="text-2xl md:text-4xl text-slate-800 p-5 dark:text-white">
            Course Name: <span className="font-semibold">{category.name}</span>
          </h1>
        </div>
        <div className="md:flex gap-4 p-5">
          <div>
          <img
            src={category.img}
            alt=""
            className="object-cover object-center w-full rounded-t-md  dark:bg-gray-500"
          />
          </div>
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              {/* <h2 className="text-2xl font-semibold tracking-wide">
              {category.name}
            </h2> */}
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

            {/* <Link to={`/course/${category.id}`}
            className="flex items-center justify-center w-full btn p-3 font-semibold tracking-wide rounded-md hover:bg-slate-800 dark:bg-violet-400 dark:text-gray-900"
          >
            See Details
          </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
