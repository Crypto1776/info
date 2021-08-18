import React from 'react';
import {Link} from 'react-router-dom';

const Hero = () => {
    return (
        <>
            <div className='bg-white flex flex-col items-center justify-center landing md:px-60 md:w-auto md:h-80 portada'>
                <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl text-white mb-14 logo-text'>
                    D<span className="text-8xl">I</span>F<span className="text-8xl">I</span>

                 <span> I</span><span className="text-8xl">o</span>T
                    LATINOAMERICA
                </h1>
                <Link className='py-6 px-10  rounded-full bg-yellow-300 flex text-xl
            items-center transition duration-300 ease-in-out animate-bounce infomation'  to='/informacion'>
                    Información

                </Link>
            </div>
            <div className="bg-black grid grid-cols-1 md:grid-cols-2 py-6 ">
                <div className="text-white flex-col flex justify-centers items-center md:pl-8">
                    <h2 className="text-lg md:text-xl lg:text-2xl ">Crypto Couching y Asesoria Financiera</h2>

                </div>
                <div className="">
                </div>
            </div>
        </>

    );
};
export default Hero;
