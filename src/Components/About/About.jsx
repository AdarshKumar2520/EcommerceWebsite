import React from 'react'
import g from '../../Images/groupImg.png'
export const About = () => {
    return (




        <div className='flex flex-col justify-center items-center mt-[110px]'>
            <div className='text-3xl text-center py-[10px] '>
                <p className='bg-gray-800 text-white font-bold px-[10px] py-4 rounded-md mt-[20px] mb-[20px] hover:bg-gray-200 hover:text-black duration-300'>About Us </p>
                <p className='font-semibold'>Group number - 4 </p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <p className='font-bold text-3xl py-[30px]'>Our Vision and Mission</p>
                <p className='px-[200px] '><span className='font-bold'>Vision : </span> To be the leading online destination for pet enthusiasts, fostering a community that prioritizes the health, happiness, and holistic care of pets through innovative e-commerce solutions, expert advice, and a personalized shopping experience.</p>
                <p className='px-[200px] py-[50px] '><span className=' font-bold'>Mission : </span> To enhance the joy of pet companionship by providing a seamless and reliable e-commerce platform that offers a diverse range of high-quality pet products, promoting the well-being and happiness of pets and their owners.</p>
            </div>

            <div className="grid grid-cols-2 gap-x-[200px]  mx-[210px] my-[70px]">

                <div className='w-[190px] '>
                    <img className="h-[230px]  max-w-full rounded-lg" src={g} alt="" />
                    <p className='text-2xl font-bold text-center'>ADARSH KUMAR</p>
                    <p className='text-center'>2023IS03</p>
                    <p className='text-center'>FRONT-END DEVELOPER </p>
                </div>
                <div className='w-[190px]'>
                    <img className="h-[230px]  max-w-full rounded-lg" src={g} alt="" />
                    <p className='text-2xl font-bold text-center'>AJAY GUPTA </p>
                    <p className='text-center'>2023IS05</p>
                    <p className='text-center'>FRONT-END DEVELOPER </p>
                </div>
                <div className='w-[190px] mt-10'>
                    <img className="h-[230px]  max-w-full rounded-lg" src={g} alt="" />
                    <p className='text-2xl font-bold text-center'>GUFRAN AHMED</p>
                    <p className='text-center'>2023IS03</p>
                    <p className='text-center'>FRONT-END DEVELOPER </p>
                </div>
                <div className='w-[190px] mt-10'>
                    <img className="h-[230px]  max-w-full rounded-lg" src={g} alt="" />
                    <p className='text-2xl font-bold text-center'>SAKET DIXIT</p>
                    <p className='text-center'>2023IS03</p>
                    <p className='text-center'>FRONT-END DEVELOPER </p>
                </div>
            </div>

        </div>



    )
}
