import React from 'react';
import MyFoto from '../assets/foto-perfil.png';

const Sobre = () => {
    return (
        <div nome='sobre' className='bg-gray-900 w-full  mx-auto flex flex-col  items-center justify-center h-full px-4   text-white'>

            <div className=' max-w-screen-lg  mx-auto  flex flex-col  justify-center h-full px-4 py-11' >
                <div className='mb-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Sobre</p>
                </div>
                <div className='flex pt-5 max-md:flex-col'>
                    <img src={MyFoto} alt="minha foto" className='max-md:h-52 max-md:w-48 max-md:ml-16 h-22 w-22 shadow-orange-500' />


                    <p className="text-xl md:mt-28 ml-5">Estava cursando o 5º semestre em administração e não estava satisfeita, minha paixão sempre foi tecnologia, foi quando em julho de 2022 decidir mudar de carreira e seguir meus sonhos. <br></br> Estou cursando Análise e Desenvolvimento de Sistemas na Unicesumar e como apoio estou me dedicando a cursos e tendo a frontendmentor como minha principal experiência na prática desenvolvendo e cumprindo os desafios dados.</p>


                </div>
            </div>

        </div>
    )
}

export default Sobre