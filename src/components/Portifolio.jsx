import React from 'react'
import Producao from'../assets/em-producao.png'

const Portifolio = () => {
  const portifolios =[
    {
      id: 1,
      src: Producao
    },
    {
      id: 2,
      src: Producao
    },
    {
      id: 3,
      src: Producao
    },
    {
      id: 4,
      src: Producao
    },
    {
      id: 5,
      src: Producao
    },
    {
      id: 6,
      src: Producao
    },
  ]

  return (
    <div name='portifolio' className='bg-gray-900 w-full text-white'>
        <div  className='flex flex-col p-4 mx-auto max-w-screen-lg justify-center w-full h-full'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Portifólio</p> 
            </div>

              <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                  portifolios.map(({id, src})=> (
              <div key={id}
               className='shadow-md shadow-slate-400 rounded-lg'>
                <img
                src={src} 
                alt="previw do projeto" 
                className='rounded-md duration-200 hover:scale-105' />
                
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200  hover:scale-105'>Code</button>
                </div>
              </div>
              ))
            }
            </div>
            
        </div>
    </div>
  )
}

export default Portifolio