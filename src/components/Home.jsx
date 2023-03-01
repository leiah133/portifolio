import React from 'react'
import FotoPerfil from '../assets/BG.svg'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <div id='home' className=' w-full h-full bg-gray-900 '>
            <div className='max-w-screen-lg pt-12 pb-4 mx-auto  flex flex-col  items-center  h-full md:flex-row'>

                <div className='flex flex-col mt-12
             justify-center h-full px-4'>


                    <h2 className='text-4xl md:text-5xl
                 font-light text-white sm:mr-10'> Eu sou <span className='text-amber-200'>Léia Oliver</span> </h2>


                    <p className='text-xl text-orange-200 py-4 max-w-md'>
                        Desenvolvedora FrontEnd
                    </p>


                    <div>

                        <Link
                        to='portifolio'
                        smooth
                        duration={500}
                         className='group text-white w-fit px-6 py-3 my-2 flex items-center bg-amber-700 rounded-md cursor-pointer '>Portifólio <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                         </Link>
                    </div>


                </div>

                <div className='hidden md:flex max-md:mt-5 max-[360px]:pb-6 mt-10'>


                    <img src={FotoPerfil} alt="minha foto" className='sm:h-96 lg:ml-56  duration-300' />

                </div>
            </div>

        </div>
    )
}

export default Home