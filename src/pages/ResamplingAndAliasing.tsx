import Link from "next/link"

const RA = () => {
    return (
        <>
        <div className="flex flex-wrap justify-center p-4 md:pt-40 pt-28">
            <h1 className="font-bold text-2xl w-full text-center mb-10">Resampling and Aliasing</h1>
            <h3 className=" w-full lg:w-1/2 text-lg">Course project to gain a practical understanding of Resampling and Filtering in the spatial and temporal domain. It consists of two parts, the first one aimed to develop the understanding of sampling/aliasing issues in the spatial domain and the second one deals with sampling/aliasing issues in the temporal domain.

<br></br><p className='mt-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Java</span></p></h3>
        </div>
        <div className="flex items-center ">
            <ul className="bulletpoint-list space-y-4 mx-auto my-10">
                <li><span><Link href="/pdfs/ResamplingAndAliasing.pdf" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600">Project Detail Description</a></Link></span></li>
                <li><span><Link href="/pdfs/ResamplingExperiment.pdf" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600">Experiment Result</a></Link></span></li>
                <li>**GitHub Repository review upon request.</li>
            </ul>
        </div>
        </>
    )
}

export default RA