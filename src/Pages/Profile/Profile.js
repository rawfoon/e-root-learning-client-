import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  console.log(user);

const handleUpdateProfile = event =>{

    event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

    const profile = {
        displayName: name,
        photoURL: photoURL
       
      }
      updateUserProfile(profile)
      .then(()=>{
        toast.success('Profile updated. Please reload...')
      })
      .catch(e => console.error(e))
}


  return (
    <div>
      <section className=" h-60 md:w-1/2 mx-[5%] md:mx-auto mt-9">
        <div className="bg-gray-100  rounded-2xl shadow-lg  p-5 items-center">
          <div className="flex justify-center items-center pb-6">
            {user?.photoURL ? (
              <>
                <img
                  className="rounded-full"
                  src={user.photoURL}
                  style={{ height: "100px" }}
                  data-tip={user?.displayName}
                />
                <p data-tip=""></p>
              </>
            ) : (
              <FaUser
                style={{ fontSize: "100px" }}
                data-tip={user?.displayName}
              ></FaUser>
            )}
          </div>
          <form onSubmit={handleUpdateProfile} style={{ maxWidth: "800px" }}>
            <input
              className="p-2 w-full mb-4 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              readOnly
              defaultValue={user.email}
              required
            />
            <input
              className="p-2 mt-8 w-full mb-4  rounded-xl border blo"
              type="text"
              name="name"
              placeholder="Name"
              defaultValue={user.displayName}
              required
            />
            <input
              className="p-2 w-full mb-4 rounded-xl border"
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              defaultValue={user.photoURL}
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
