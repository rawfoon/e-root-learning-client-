import React from 'react';

const FAQ = () => {
    return (
        <div >
            

            <section className="dark:bg-gray-800 dark:text-gray-100 pb-[300px]">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8" style={{maxWidth: '1440px'}}>
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 dark:text-gray-400">There are some frequently asked Questions answerd bellow</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why we are best?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">We are best for providing the best services </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Why do I choose you?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">You'll get the best support from us </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Is it worthy?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Yes,  it is worthy for you... </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default FAQ;