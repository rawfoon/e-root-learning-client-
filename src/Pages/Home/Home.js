import React from "react";
import { Link } from "react-router-dom";
import background from '../../assets/learning.jpg'

const Home = () => {
  return (
    <div>

<section>
<section className="dark:bg-gray-800 dark:text-gray-100 h-[700px]" style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover', backgroundPosition: 'center',backgroundColor: "rgb" }}>
	<div className="w-full h-full bg-[#1c152482]" >
    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-3xl md:text-6xl font-bold leading-none  font-bold">E-Root Learning
			
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Get the best experience from E-Root Learning. 
                <br />
                Learn and Explore the world...</p>
		<div className="flex flex-wrap justify-center">
			<Link to='/courses' className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#60af63] text-slate-100">Get started</Link>
			
		</div>
	</div>
    </div>
</section>
</section>



      <section>
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 w-full sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src="https://www.jobstreet.com.sg/career-resources/wp-content/uploads/sites/3/2021/09/Primary-School-Teacher-Career-Path.jpg"
                alt=""
                className="object-contain w-full h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-3xl md:text-5xl font-bold leading-none sm:text-6xl">
                World Class Teaching
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                We provide the best standard of teaching.
                <br />
                We take decision on our student feedback ...
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                
                <Link to='/courses'
                  rel="noopener noreferrer"
                  href="#"
                  className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
