import React from 'react'


const Contato = () => {
    return (

        <div id="contato" className='bg-gray-900 w-full h-full p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full ' >
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-500'>Contato</p>
                </div>

                <div className='flex justify-center items-center max-2xl:pl-10 '>
                    <form action="https://getform.io/f/ddc471f2-ae96-4d73-99aa-f7e4e2fc10c2" method='POST' className='flex flex-col  w-full h-full md:w-1/2'>
                        <input type="text"
                            name="nome" id="nome"
                            placeholder='Digite seu nome'
                            className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                        <input type="text"
                            name="email"
                            id="email"
                            placeholder='Digite seu email'
                            className='p-2 bg-transparent border-2 rounded-md text-white m focus:outline-none' />
                        <textarea name="mensagem"
                            id="mensagem"
                            rows="10"
                            className='bg-transparent my-4 border-2 p-2 rounded-md text-white focus:outline-none'></textarea>
                        <button
                            className='text-white bg-orange-400 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 ' formTarget='_blank'>
                            Enviar
                        </button>
                    </form>
                   
                </div>
                
            </div>
        </div>
    )


}

export default Contato