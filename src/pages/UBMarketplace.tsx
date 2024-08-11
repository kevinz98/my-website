import Link from "next/link"

const  UBMarketplace= () => {
    return (
        <>
        <div className="flex flex-wrap justify-center p-4 md:pt-40 pt-28">
            <h1 className="font-bold text-2xl w-full text-center mb-10">UB Marketplace</h1>
            <h3 className=" w-full lg:w-1/2 text-lg">Course team project that examines in detail the software development process. Topics include software life-cycle models; architectural and design approaches; various techniques for systematic software testing; coding and documentation strategies; project management. Participated in a real-world project from conception to implementation. Provide first-hand experience using proper agile processes.<br></br><p className='mt-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Java, JavaScript, Spring Boot, MongoDB, React, Heroku, ZenHub, CI/CD</span></p></h3>
        </div>
        <div className="flex items-center ">
            <ul className="bulletpoint-list space-y-4 mx-auto my-10">
                <li>The backend is implemented in Java using the Spring Boot framework.</li>
                <li>The frontend is implemented using the React framework with CSS.</li>
                <li>The backend and frontend of this project were deployed on Heroku.</li>
                <li>This project use MongoDB as a database to store item infomation.</li>
                <li><span><Link href="https://github.com/Lostpart/UB-Marketplace" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600">GitHub Repository</a></Link></span></li>
            </ul>
        </div>
        </>
    )
}

export default UBMarketplace