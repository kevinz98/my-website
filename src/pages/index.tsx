import type { NextPage } from 'next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Tabs from '@/components/projectTabs';
import {prefix} from '../prefix'


const Home: NextPage = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center p-4 md:pt-40 pt-28" id='home'>
      <div className='w-full text-center max-w-md'>
        <img className="mx-auto w-60 h-60 rounded-full object-cover" src={`${prefix}/images/photo.jpg`} alt="image"/>
        <h2 className='mt-8 font-semibold text-3xl text-slate-800'>Zijian Zhong</h2>
        <h3 className='pt-2 font-medium text-lg text-slate-500'>Software Developer</h3>
        <div className='flex justify-center pt-5'>
          <ul className='flex space-x-4'>
            <li>
              <Link href="https://www.linkedin.com/in/zijianz/" passHref legacyBehavior>
                <a target="_blank">
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-700" size="2x" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="https://github.com/kevinz98" passHref legacyBehavior>
                  <a target="_blank">
                  <FontAwesomeIcon icon={faGithub} className="text-black" size="2x" />
                  </a>
                </Link>
            </li>
            <li>
              <Link href="mailto:zhongzj98@gmail.com" passHref legacyBehavior>
                  <a target="_blank">
                  <FontAwesomeIcon icon={faEnvelope} className="text-black" size="2x" />
                  </a>
                </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full lg:w-1/2 pt-16 lg:pt-0 lg:pr-10'>
        <h1 className='font-normal text-5xl'> Biography</h1>
        <h2 className='text-xl pt-8 text-pretty'>Zijian(Kevin) Zhong is a recent graduate with a Master&apos;s degree in Computer Science from the University of Southern California. He is actively looking for full-time SDE(full stack) opportunities.</h2>
        <div className="flex flex-wrap lg:pt-16 pt-12">
          <div className='w-full 2xl:w-1/2'>
              <h3 className='font-semibold text-3xl'>Education</h3>
              <ul className="bulletpoint-list">
                <li className='text-lg'>Master of Science in Computer Science, 2024</li>
                  <ul className='text-md text-slate-500'>University of Southern California</ul>
                <li className='text-lg pt-1'>Bachelor of Science in Computer Science, 2018</li>
                  <ul className='text-md text-slate-500'>University at Buffalo, SUNY</ul>
              </ul>
            </div>
            <div className='w-full 2xl:w-1/2 mt-6 2xl:mt-0 2xl:pl-20'>
              <h3 className='font-semibold text-3xl'>Certifications</h3>
              <ul className="bulletpoint-list space-y-1 text-lg">
                <li>AWS Certified Developer - Associate</li>
                <li>AWS Certified Solutions Architect – Associate</li>
                <li>AWS Certified Cloud Practitioner</li>
              </ul>
            </div>
        </div>
      </div>
    </div>

    <div className="flex flex-wrap lg:justify-center p-4 py-16 mt-10 lg:mt-20 bg-slate-100">
      <div className='w-full lg:text-center max-w-md'>
        <h1 className='font-normal text-5xl'>Skills</h1>
      </div>
      <div className='w-full lg:w-1/2 pt-10 lg:pt-0 lg:pr-10'>
        <h2 className='text-2xl font-medium'>Programming Languages</h2>
        <ul className="bulletpoint-list text-xl pt-2">
            <li>Python, Java, C, C++, C#, Scala, JavaScript, TypeScript, OCaml, SQL, HTML, CSS</li>
          </ul>
        <h2 className='text-2xl font-medium mt-6'>Frameworks & Libraries</h2>
          <ul className="bulletpoint-list text-xl pt-2">
            <li>Unity, Spring Boot, React, Angular, REST API, Bootstrap, Tailwind, Flutter, NodeJS, OpenGL</li>
          </ul>
        <h2 className='text-2xl font-medium mt-6'>Tools & Cloud Platforms:</h2>
          <ul className="bulletpoint-list text-xl pt-2">
            <li>AWS, GCP, Docker, MongoDB, MySQL, Git, Zenhub</li>
          </ul>
      </div>
    </div>

    <div className="flex flex-wrap lg:justify-center p-4 py-16">
      <div className='w-full lg:text-center max-w-md'>
        <h1 className='font-normal text-5xl'>Experience</h1>
      </div>
      <div className='w-full lg:w-1/2 pt-10 lg:pt-0 lg:pr-10'>
        <div className='w-full flex flex-wrap justify-between'>
          <h2 className='text-2xl font-medium'>Research Assistant</h2>
          <h3 className='pt-1 text-base'>Jan 2021 - Sept 2021</h3>
        </div>
        <h3 className='w-full text-lg'>Universitry at Buffalo (National Science Foundation)</h3>
        <ul className="bulletpoint-list text-xl pt-2 space-y-1">
            <li>Engineered cross-platform mobile applications in Flutter to facilitate research data collection on Android and iOS devices</li>
            <li>Collaborated with interdisciplinary teams to refine app design, implemented features, and enhanced user engagement</li>
            <li>Processed and analyzed complex datasets using Python for stress measure and prediction</li>
            <li>Co-author of research paper &quot;Stress prediction using micro-EMA and machine learning during COVID-19 social isolation.&quot;</li>
          </ul>
      </div>
    </div>

    <div className="flex flex-wrap lg:justify-center p-4 py-16 bg-slate-100" id='projects'>
      <div className='w-full lg:text-center max-w-md'>
        <h1 className='font-normal text-5xl'>Projects</h1>
      </div>
      <div className='w-full lg:w-1/2 pt-10 lg:pt-0 lg:pr-10'>
          <Tabs />
      </div>
    </div>

    <div className="flex flex-wrap lg:justify-center p-4 py-16 mt-10 lg:mt-20 mb-20">
      <div className='w-full lg:text-center max-w-md'>
        <h1 className='font-normal text-5xl'>Publications</h1>
      </div>
      <div className='w-full lg:w-1/2 pt-10 lg:pt-0 lg:pr-10'>
        <ul className="bulletpoint-list text-xl pt-2">
            <li>Li, H., Zheng, E., Zhong, Z., Xu, C., Roma, N., Lamkin, S., Von Visger, T. T., Chang, Y.-P., & Xu, W. (2022). Stress prediction using micro-EMA and machine learning during COVID-19 social isolation. Smart Health, 23, 100242.</li>
          </ul>
      </div>
    </div>
    
    <div>

    </div>
    </>
    
    
  )
}

export default Home