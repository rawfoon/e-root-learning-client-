import React, { useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


const Profile = () => {
   const {user} =useState(AuthContext)
  console.log(user)



  return (
    <div className="m-[5%]">
      

<section className=" h-60 flex items-center justify-center" >
      <div className="bg-gray-100  rounded-2xl shadow-lg  p-5 items-center" >
        <form style={{maxWidth: "800px"}}>
          <input
            className="p-2 w-full mb-4 rounded-xl border"
            type="email"
            name="email"
            placeholder="Email" readOnly
            // defaultValue={user.email}
            required
          />
          <input
            className="p-2 mt-8 w-full mb-4  rounded-xl border blo"
            type="text"
            name="name"
            placeholder="Name"
            // defaultValue={user.displayName}
            required
          />
          <input
            className="p-2 w-full mb-4 rounded-xl border"
            type="text"
            name="photoURL"
            placeholder="Photo URL"
            // defaultValue={user.photoURL}
          />
       

          <button
            type="submit"
            className="bg-[#002D74] rounded-xl text-white py-2 px-10 hover:scale-105 duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>

      
      </section> 
    </div>
  );
};

export default Profile;
