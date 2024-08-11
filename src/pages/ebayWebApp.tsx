import Link from "next/link"

const eBayWebApp = () => {
    return (
        <>
        <div className="flex flex-wrap justify-center p-4 md:pt-40 pt-28">
            <h1 className="font-bold text-2xl w-full text-center mb-10">eBay Shopping Web App</h1>
            <h3 className=" w-full lg:w-1/2 text-lg">This project creates a webpage that allows users to search for products using the eBay
API and display the results on the same page below the form. It includes three parts: search form,
result table and item info card. It also supports adding products to and removing products from the wish list
and sharing products info using Facebook.<br></br><p className='mt-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Angular, Bootstrap, JavaScript, TypeScript, MongoDB, NodeJS, Express, Docker, Restful API, AJAX, Google Cloud Platform</span></p></h3>
        </div>
        <div className="flex flex-wrap justify-center p-4">
        <iframe
                className="w-full h-ful md:w-1/2 md:h-1/2 2xl:w-1/3 2xl:h-1/3 aspect-video"
                src="https://www.youtube.com/embed/JHQ4K0y40aQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="flex items-center ">
            <ul className="bulletpoint-list space-y-4 mx-auto my-10">
                <li>Website is hosted on <span><Link href="https://csci571hw3-98765.wl.r.appspot.com" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600"> Here</a></Link></span></li>
                <li>The backend is implemented in JavaScript using the Node.js Express framework.</li>
                <li>The frontend is implemented using the Angular framework with Bootstrap to create a responsive website.</li>
                <li>The backend and frontend of this project are deployed to the cloud on GCP.</li>
                <li>This project use MongoDB as a database to store your product wish list.</li>
                <li>All APIs calls are done through Node.JS server, except calls to the ipinfo.io.</li>
                <li>**GitHub Repository review upon request.</li>
            </ul>
        </div>
        </>
    )
}

export default eBayWebApp