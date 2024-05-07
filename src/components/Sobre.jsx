import React from 'react';
import MyFoto from '../assets/foto-perfil2.jpg';

const Sobre = () => {
    return (
        <div id='sobre' className='bg-gray-900 w-full  mx-auto flex flex-col  items-center justify-center h-full px-4   text-white'>

            <div className=' max-w-screen-lg  mx-auto  flex flex-col  justify-center h-full px-4 py-14 ' >
                <div className='mb-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Sobre</p>
                </div>
                <div className='flex  pt-5 max-md:flex-col'>
                    <img src={MyFoto} alt="foto perfil" className='max-md:h-52 max-md:w-36 max-md:ml-16 h-80 w-80 rounded-xl shadow-orange-500 shadow ' />


                    <p className="text-justify  md:mt-28  pl-14   ">Cursando o 4° semestre de Analise e Desenvolvimento de Sistemas na Unicesumar,  em transição da carreira administrativa para a área de desenvolvimento de sistemas, pois tenho paixão por tecnologia. Também estou fazendo um curso de 
                    Java COMPLETO Programação Orientada a Objetos do Professor Nélio Alves e Bootcamp Java da DIO. Tenho habilidades em Java, Spring Boot, SQLite.
                    Meu objetivo é me tornar uma desenvolvedora backend competente, criativa e colaborativa, que possa resolver problemas complexos e gerar valor para as organizações. Sou organizada, comunicativa, adaptável e gosto de ajudar e ensinar. Tenho facilidade para trabalhar em equipe e gerenciar o tempo. Busco oportunidades de crescimento profissional e pessoal, e aplicar os meus conhecimentos e habilidades em projetos desafiadores e inovadores.</p>


                </div>
            </div>

        </div>
    )
}

export default Sobre