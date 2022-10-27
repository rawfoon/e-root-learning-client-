import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 pb-[200px]">
        <div
          className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-10"
          style={{ maxWidth: "1440px" }}
        >
          <h2 className="text-2xl font-semibold sm:text-4xl">
            E-Root Learnig Blog{" "}
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-400">
            Some topics are discussed bellow
          </p>

          <div className="space-y-4">
            <h1 className="text-xl">Q.1 What is cors?</h1>
            <p>
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources. CORS also relies on a mechanism by which
              browsers make a "preflight" request to the server hosting the
              cross-origin resource, in order to check that the server will
              permit the actual request. In that preflight, the browser sends
              headers that indicate the HTTP method and headers that will be
              used in the actual request.
            </p>
          </div>
          <div className="space-y-4 mt-10">
            <h1 className="text-xl">
              Q.2 Why are you using firebase? What other options do you have to
              implement authentication?
            </h1>
            <p>
              The Firebase Realtime Database let us build rich, collaborative
              applications by allowing secure access to the database directly
              from client-side code. Data is persisted locally, and even while
              offline, realtime events continue to fire, giving the end user a
              responsive experience.
              <br />
              Usually, authentication by a server entails the use of a user name
              and password. Other ways to authenticate can be through
              multifactor, custom auth system, link multiple provider,passing
              state email action etc.
            </p>
          </div>
          <div className="space-y-4 mt-10">
            <h1 className="text-xl">Q.3 How does the private route work?</h1>
            <p>
              The private route component is similar to the public route, the
              only change is that redirect URL and authenticate condition. If
              the user is not authenticated he will be redirected to the login
              page and the user can only access the authenticated routes If he
              is authenticated (Logged in).
            </p>
          </div>
          <div className="space-y-4 mt-10">
            <h1 className="text-xl">Q.4 What is Node? How does Node work?</h1>
            <p>
              Node is javascript runtime. 
              <br />
              Node
              allows developers to write JavaScript code that runs directly in a
              computer process itself instead of in a browser. Node can,
              therefore, be used to write server-side applications with access
              to the operating system, file system, and everything else required
              to build fully-functional applications.
              <br />
              <br />
              Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
            </p>
          </div>

          {/* <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Ex orci laoreet egestas sapien magna egestas scelerisque?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Lectus iaculis orci metus vitae ligula dictum per. Nisl per
                nullam taciti at adipiscing est.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Lorem at arcu rutrum viverra metus sapien venenatis lobortis
                odio?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna
                porttitor egestas tincidunt neque vehicula potenti.{" "}
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                Eleifend feugiat sollicitudin laoreet adipiscing bibendum
                suscipit erat?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                Justo libero tellus integer tincidunt justo semper consequat
                venenatis aliquet imperdiet. Ultricies urna proin fusce nulla
                pretium sodales vel magna et massa euismod vulputate sed.{" "}
              </p>
            </details>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Blog;
