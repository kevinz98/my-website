import Link from 'next/link';
import { useState } from 'react';

const Tabs = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row "
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center mb-2">
              <a
                className={
                  "font-medium px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "bg-blueGray-600 font-semibold"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Web App
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center mb-2">
              <a
                className={
                  "font-medium px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "bg-blueGray-600 font-semibold"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Mobile App
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center mb-2">
              <a
                className={
                  "font-medium px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "bg-blueGray-600 font-semibold"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Games
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center mb-2">
              <a
                className={
                  "font-medium px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "bg-blueGray-600 font-semibold"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                Networking
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center mb-2">
              <a
                className={
                  "font-medium px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "bg-blueGray-600 font-semibold"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                Computer Graphics
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center mb-2">
              <a
                className={
                  "font-medium px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 6
                    ? "bg-blueGray-600 font-semibold"
                    : "text-blueGray-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                Mutimedia Systems
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ul className='flex flex-wrap justify-stretch'>
                    <li className='mb-6 w-full'>
                    <div className="bg-white border border-gray-200 rounded-lg shadow">
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">eBay Shopping Web App</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">A customized online shopping platform that leverages eBay API with responsive web design. With filters base on various features (Location, Price, Distance, etc.), recommend similar items, and &apos;Save & Buy Later&apos; function.</p>
                            <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Angular, Bootstrap, JavaScript, TypeScript, MongoDB, NodeJS, Express, Docker, Restful API, AJAX, Google Cloud Platform</span></p>
                            <Link href="/ebayWebApp" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    </li>
                    <li className='mb-2 w-full'>
                    <div className="bg-white border border-gray-200 rounded-lg shadow">
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">UB Marketplace</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">Course team project to build an online used item trading platform specifically for UB students. Simulate with real-world working environment with an assigned project manager.</p>
                            <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Java, JavaScript, Spring Boot, MongoDB, React, Heroku, ZenHub, CI/CD</span></p>
                            <Link href="/UBMarketplace" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    </li>
                  </ul>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                 <ul className='flex flex-wrap justify-stretch'>
                    <li className='mb-2 w-full'>
                    <div className="bg-white border border-gray-200 rounded-lg shadow">
                        <div className="p-5">
                            <a>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">eBay Shopping Mobile App</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700">A customized online shopping mobile app that leverages eBay API. With filters base on various features (Location, Price, Distance, etc.), recommend similar items, and &apos;Save & Buy Later&apos; function.</p>
                            <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Java, MongoDB, NodeJS, Express, Restful API, Google Cloud Platform</span></p>
                            <Link href="/ebayMobileApp" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                        </div>
                    </div>
                    </li>
                  </ul>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                    <ul className='flex flex-wrap justify-stretch'>
                        <li className='mb-2 w-full'>
                        <div className="bg-white border border-gray-200 rounded-lg shadow">
                            <div className="p-5">
                                <a>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Monster Go: Become Human</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">Course team project to build a game by using Unity. Our game is a stealth action monster game with possession and body swapping mechanics. The game combines elements of a third-person shooter and a puzzler.</p>
                                <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Unity, C#</span></p>
                                <Link href="/MonsterGo" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </Link>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                    <ul className='flex flex-wrap justify-stretch'>
                        <li className='mb-6 w-full'>
                        <div className="bg-white border border-gray-200 rounded-lg shadow">
                            <div className="p-5">
                                <a>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Text Chat Application</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">Developed the client and server components of a text chat application, consisting of one chat server and multiple chat clients over TCP connections.
                                </p>
                                <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>C++</span></p>
                                <Link href="/textChatApp" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </Link>
                            </div>
                        </div>
                        </li>
                        <li className='mb-2 w-full'>
                        <div className="bg-white border border-gray-200 rounded-lg shadow">
                            <div className="p-5">
                                <a>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Reliable Transport Protocols</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">In a given simulator, implement three reliable data transport protocols: Alternating-Bit (ABT), Go-Back-N (GBN), and Selective-Repeat (SR). Compare the performance for the protocols under different conditions.
                                </p>
                                <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>C++</span></p>
                                <Link href="/RTP" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </Link>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                    <ul className='flex flex-wrap justify-stretch'>
                        <li className='mb-6 w-full'>
                        <div className="bg-white border border-gray-200 rounded-lg shadow">
                            <div className="p-5">
                                <a>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Height Fields Using Shaders</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">Using image data from a grayscale JPEG file to create height field, such that the two dimensions of the grid correspond to the two dimensions of the image and the height value is a function of the image grayscale level. Handle camera transformations, transform the landscape (translate/rotate/scale), and render the heightfield. Wrote a shader to perform geometry smoothing and re-color the terrain accordingly.
                                </p>
                                <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>C++, OpenGL</span></p>
                                <Link href="/highFieldsShader" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </Link>
                            </div>
                        </div>
                        </li>
                        <li className='mb-6 w-full'>
                        <div className="bg-white border border-gray-200 rounded-lg shadow">
                            <div className="p-5">
                                <a>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Simulating a Roller Coaster</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">Use Catmull-Rom splines along with OpenGL core profile shader-based lighting and texture mapping to create a roller coaster simulation. Implemented two shaders: one for texture mapping (to render the ground), and one for Phong shading (to render the roller coaster rail). The simulation will run in a first-person view, allowing the user to &quot;ride&quot; the coaster in an immersive environment. 
                                </p>
                                <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>C++, OpenGL</span></p>
                                <Link href="/rollerCoaster" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </Link>
                            </div>
                        </div>
                        </li>
                        <li className='mb-2 w-full'>
                        <div className="bg-white border border-gray-200 rounded-lg shadow">
                            <div className="p-5">
                                <a>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Ray Tracing</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">Build a ray tracer. Ray tracer will be able to handle opaque surfaces with lighting and shadows. Applied antialiasing by supersampling. Improve the image quality by using the soft shadows. Parallel computing is implemented to support faster rendering. 
                                </p>
                                <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>C++, OpenGL</span></p>
                                <Link href="/rayTracing" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </Link>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                    <ul className='flex flex-wrap justify-stretch'>
                        <li className='mb-6 w-full'>
                        <div className="bg-white border border-gray-200 rounded-lg shadow">
                            <div className="p-5">
                                <a>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Resampling and Aliasing</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">Course project to gain a practical understanding of Resampling and Filtering in the spatial and temporal domain. It consists of two parts, the first one aimed to develop the understanding of sampling/aliasing issues in the spatial domain and the second one deals with sampling/aliasing issues in the temporal domain.
                                </p>
                                <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Java</span></p>
                                <Link href="/ResamplingAndAliasing" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </Link>
                            </div>
                        </div>
                        </li>
                        <li className='mb-2 w-full'>
                        <div className="bg-white border border-gray-200 rounded-lg shadow">
                            <div className="p-5">
                                <a>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Compression using Vector Quantization</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700">Course project. Compress images by using &quot;vector quantization&quot; method.
                                </p>
                                <p className='mb-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Java</span></p>
                                <Link href="/VectorQuantization" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                Details
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                </Link>
                            </div>
                        </div>
                        </li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;