import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center p-4 md:pt-40 pt-28">
      <div className='w-full lg:w-1/2 text-center max-w-md'>
        <img className="mx-auto w-60 h-60 rounded-full object-cover" src="/images/photo.jpg" alt="image"/>
        <h2 className='mt-8 font-semibold text-3xl text-slate-800'>Zijian Zhong</h2>
        <h3>dawd</h3>
      </div>
      <div className='w-full lg:w-1/2 lg:text-left pt-16 lg:pt-0 lg:pr-10'>
        <h1 className='font-medium text-4xl'> Biography</h1>
        <h2 className='text-xl pt-8 text-pretty'>Zijian(Kevin) Zhong is a recent graduate with a Master's degree in Computer Science from the University of Southern California. He is actively looking for full-time SDE(full stack) opportunities.</h2>
        <div className="flex flex-wrap lg:pt-16 pt-12">
          <div className='w-full lg:w-1/2'>
            <h3 className='font-semibold text-3xl'>Interest</h3>
          </div>
        </div>
      </div>

    </div>
    </>
    
    
  )
}

export default Home