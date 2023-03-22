import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'


const Skills = () => {
 const techs =[
    {
        id:1,
        src: html,
        title: 'HTML',
        style: 'shadow-orange-500'
    },
    {
        id:2,
        src: css,
        title: 'CSS',
        style: 'shadow-blue-400'
    },
    {
        id:3,
        src: react,
        title: 'REACT',
        style: 'shadow-blue-600'
    },
    {
        id:4,
        src: tailwind,
        title: 'TAILWIND',
        style: 'shadow-sky-400'
    },
    {
        id:5,
        src: github,
        title: 'GITHUB',
        style: 'shadow-gray-400'
    },
 ]

  return (
    <div id='skills' className='bg-gray-900 w-full h-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white py-14'>


            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Skills</p>
            </div>



            <div className='w-full grid grid-cols-2 sm:grid-col-3 gap-8 text-center py-8 px-12 sm:pc-0'>
            
                        {techs.map(({ id, src, title, style }) => (
                            
                            <div 
                            key={id} 
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                    

                            <img src={src} alt="" className='w-20  mx-auto ' />
                            <p className='mt-4'>{title}</p>
        
        
                        </div> 
                        ))
                    }
                
            </div>
        </div>
    </div>
  )
}

export default Skills