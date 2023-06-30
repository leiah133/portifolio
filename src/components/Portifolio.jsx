import React from 'react'
import Calculadora from '../assets/portifolio/calculadora2.png'
import Producao from'../assets/em-producao.png'
import Desktop from '../assets/portifolio/desktop1.png'


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
      src: Desktop,
      title: 'Página de Login',
      demo: 'https://login-omega-ten.vercel.app/',
      code: 'https://github.com/leiah133/login'
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
    <div id='portfolio' className='bg-gray-900 w-full text-white'>
        <div  className='flex flex-col p-4 mx-auto max-w-screen-lg justify-center w-full h-full py-14'>
            <div className='pb-8'>
               <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Portfólio</p> 
               <p className='py-4'>Veja alguns projetos desenvolvidos recentemente</p>
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
                <p className=' text-center text-orange-300 text-xl pt-3'>{title}</p>
                
                <div className='flex items-center justify-center'>
                    
                    
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'><a href={demo} target="_blank" rel="noreferrer" > Demo</a></button>
                  <button className='w-1/2 px-6 py-3 m-4 duration-200  hover:scale-110'><a href={code} target="_blank" rel="noreferrer" > GitHub </a> </button>
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