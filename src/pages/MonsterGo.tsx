import Link from "next/link"

const MonsterGo = () => {
    return (
        <>
        <div className="flex flex-wrap justify-center p-4 md:pt-40 pt-28">
            <h1 className="font-bold text-2xl w-full text-center mb-10">Monster Go: Become Human</h1>
            <h3 className=" w-full lg:w-1/2 text-lg">Course team project to build a game by using Unity with C#. Our game is a stealth action monster game with possession and body swapping mechanics. The game combines elements of a third-person shooter and a puzzler.<br></br><p className='mt-3 font-normal text-gray-700'><span><span className='font-bold'>Tech Stack: </span>Unity, C#</span></p></h3>
        </div>
        <div className="flex flex-wrap justify-center p-4">
        <iframe
                className="w-full h-ful md:w-1/2 md:h-1/2 2xl:w-1/3 2xl:h-1/3 aspect-video"
                src="https://www.youtube.com/embed/qoLeEYgkRw4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="flex items-center ">
            <ul className="bulletpoint-list space-y-4 mx-auto my-10">
                <li><span><Link href="https://docs.google.com/document/d/1kh3ggZZAdSRYFRjDlqKByAriduBHXSRo9XG3LPGqi24/edit?usp=sharing" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600">Game Design Document</a></Link></span></li>
                <li><span><Link href="https://jonohan.github.io/MonsterGo-BecomeHuman/" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600">Playable Link</a></Link></span></li>
                <li><span><Link href="https://github.com/Jonohan/CSCI526-SayMyName-TeamProject" passHref legacyBehavior>
                <a target="_blank" className="underline font-medium hover:text-blue-600">GitHub Repository</a></Link></span></li>
            </ul>
        </div>
        </>
    )
}

export default MonsterGo