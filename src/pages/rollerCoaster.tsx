import Link from "next/link"

const RollerCoaster = () => {
    return (
        <>
        <div className="flex flex-wrap justify-center p-4 md:pt-40 pt-28">
            <h1 className="font-bold text-2xl w-full text-center mb-10">Simulating a Roller Coaster</h1>
            <h3 className=" w-full lg:w-1/2 text-lg">Use Catmull-Rom splines along with OpenGL core profile shader-based lighting and texture mapping to create a roller coaster simulation. Implemented two shaders: one for texture mapping (to render the ground), and one for Phong shading (to render the roller coaster rail). The simulation will run in a first-person view, allowing the user to &quot;ride&quot; the coaster in an immersive environment.

<br></br><p className='mt-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>C++, OpenGL</span></p></h3>
        </div>
        <div className="flex flex-wrap justify-center p-4">
        <iframe
                className="w-full h-ful md:w-1/2 md:h-1/2 2xl:w-1/3 2xl:h-1/3 aspect-video"
                src="https://www.youtube.com/embed/U1LWF7oPGME"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="flex items-center ">
            <ul className="bulletpoint-list space-y-4 mx-auto my-10">
                <li><span><Link href="https://viterbi-web.usc.edu/~jbarbic/cs420-s23/assign2/index.html" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600">Project Detail Description</a></Link></span></li>
                <li>**GitHub Repository review upon request.</li>
            </ul>
        </div>
        </>
    )
}

export default RollerCoaster