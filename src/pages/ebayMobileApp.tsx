import Link from "next/link"

const eBayWebApp = () => {
    return (
        <>
        <div className="flex flex-wrap justify-center p-4 md:pt-40 pt-28">
            <h1 className="font-bold text-2xl w-full text-center mb-10">eBay Shopping Mobile App</h1>
            <h3 className=" w-full lg:w-1/2 text-lg">This project is a mobile app version of the eBay shopping web app. Developed an Android application, which allows users to search for the products on eBay, look at information about them, save some to Wishlist and post on Facebook about the same. Both the mobile app and the web app versions share the same backend.<br></br><p className='mt-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Java, MongoDB, NodeJS, Express, Restful API, Google Cloud Platform</span></p></h3>
        </div>
        <div className="flex flex-wrap justify-center p-4">
        <iframe
                className="w-full h-ful md:w-1/2 md:h-1/2 2xl:w-1/3 2xl:h-1/3 aspect-video"
                src="https://www.youtube.com/embed/wiRqyqq_D-M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="flex items-center ">
            <ul className="bulletpoint-list space-y-4 mx-auto my-10">
                <li>The backend is implemented in JavaScript using the Node.js Express framework.</li>
                <li>The mobile application is implemented using Java with various libraries to create a responsive view.</li>
                <li>The backend of this project are deployed to the cloud on GCP.</li>
                <li>This project use MongoDB as a database to store your product wish list.</li>
                <li>All APIs calls are done through Node.JS server, except calls to the ipinfo.io.</li>
                <li>**GitHub Repository review upon request.</li>
            </ul>
        </div>
        </>
    )
}

export default eBayWebApp