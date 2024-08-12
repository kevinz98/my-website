import Link from "next/link"

const RA = () => {
    return (
        <>
        <div className="flex flex-wrap justify-center p-4 md:pt-40 pt-28">
            <h1 className="font-bold text-2xl w-full text-center mb-10">Compression using Vector Quantization</h1>
            <h3 className=" w-full lg:w-1/2 text-lg">Course project. Compress images by using &quot;vector quantization&quot; method.

<br></br><p className='mt-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Java</span></p></h3>
        </div>
        <div className="flex items-center ">
            <ul className="bulletpoint-list space-y-4 mx-auto my-10">
                <li><span><Link href="/pdfs/VectorQuantization.pdf" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600">Project Detail Description</a></Link></span></li>
                <li><span><Link href="/pdfs/VectorQuantizationResult.pdf" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600">Experiment Result</a></Link></span></li>
                <li>**GitHub Repository review upon request.</li>
            </ul>
        </div>
        </>
    )
}

export default RA