import React from 'react'
import Calculadora from '../assets/portifolio/calculadora1.png'
import Producao from'../assets/em-producao.png'


const Portifolio = () => {
  const portifolios =[
    {
      id: 1,
      src: Calculadora,
      title: 'Calculadora React',
      demo: 'https://calculadora-react-sage.vercel.app/',
      code: 'https://github.com/leiah133/calculadora_react'
    },
    {
      id: 2,
      src: Producao,
      title: 'Em Breve',
    },
    {
      id: 3,
      src: Producao,
      title: 'Em Breve',
    },
    {
      id: 4,
      src: Producao,
      title: 'Em Breve',
    },
    {
      id: 5,
      src: Producao,
      title: 'Em Breve',
    },
    {
      id: 6,
      src: Producao,
      title: 'Em Breve',
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
                  portifolios.map(({id, src, code, demo, title})=> (
              <div key={id}
               className='shadow-md shadow-slate-400 rounded-lg'>
                <img
                src={src} 
                alt="previw do projeto" 
                className='rounded-md duration-200 hover:scale-105' />
                <p className=' px-6 text-orange-300 text-xl pt-3'>{title}</p>
                
                <div className='flex items-center justify-center'>
                    
                    
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'><a href={demo} target="_blank" > Demo</a></button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200  hover:scale-110'><a href={code} target="_blank" > GitHub </a> </button>
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