import React from 'react'
import Image from '../../Images/imagepet.jpg'
import { Products } from '../Products/Products'
import { FAQ } from '../../Components/FAQ/FAQ';

export const Home = () => {
    return (
        <div className='mt-[110px]'>
           
            <div className="bg-cover bg-center h-screen sm:max-full" style={{ backgroundImage: `url(${Image})` }}>
                <h1 className='text-white font-bold text-5xl text-center pt-9'>Your Ultimate Pet Destination</h1>
            </div>
       
            <Products />
            <FAQ />

        </div>
    )
}
