import React, { useState } from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'


const Header = () => {
    const [header, setHeader] = useState(false);

    const links = [
        {
            id:1,
            link: 'home'
        },
        {
            id:2,
            link: 'sobre'
        },
        {
            id:3,
            link: 'portifolio'
        },
        {
            id:4,
            link: 'skills'
        },
        {
            id:5,
            link: 'contato'
        }
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 bg-gray-900  fixed'>
        <div>
            <h1 className='text-4xl font-signature ml-2 text-orange-400'>L.O</h1>
        </div>

        <ul className='hidden md:flex' >
            {links.map(({id, link}) => (
                <li
                key={id}
                className='px-4 cursor-pointer capitalize font-medium text-amber-500 hover:scale-150 duration-300 hover:text-orange-200'
                >
                    <Link 
                        to={link}
                        smooth
                        duration={500}>
                        {link}
                    </Link>

                </li>
            ))}
        </ul>

        <div onClick={() => setHeader (!header)} 
        className='cursor-pointer pr-4 z-10 text-orange-400 md:hidden text-4xl'>
            {header ? <FaTimes size={30}/> : <FaBars size={30} />}
         </div>

         {header && (

        <ul 
        className='flex flex-col justify-center items-center absolute top-0 w-full left-0 h-screen bg-gray-900 text-orange-400 '>
            {links.map(({id, link}) => (

            <li 
            key={link.id}
            className='px-4 cursor-pointer capitalize p-6 text-3xl '> 
                <Link onClick={() => setHeader(!header)}
                to={link} 
                smooth
                duration={500}>{link}</Link>
            </li>
            ))}
        </ul>
         )}
    </div>
  )
}

export default Header