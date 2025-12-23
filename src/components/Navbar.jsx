import React from 'react'

const Navbar = () => {
    return (
        <div className='w-[80%] flex items-center justify-between px-10 mt-10' >
                <h2 className='font-sans font-bold ml-58 text-xl justify-evenly '>Horizon Courts</h2>
            <div className=' flex justify-between gap-8' >
                <a href="#" className='justify-between gap-4' >About Us</a>
                <a href="#" className='justify-between gap-8'>Services</a>
                <a href="#" className='justify-between gap-8'>Coaches</a>
                <a href="#" className='justify-between gap-8'>Events</a>
                <a href="#" className='justify-between gap-8'>Contats</a>

            </div>
           
             <button className=' flex rounded px-2 justify-end  gap-16 '>
                Book now
            </button>
            
           

        </div>
    )
}

export default Navbar



