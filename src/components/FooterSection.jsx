import React from 'react'

import foot1 from "../assets/Images/foot1.png"
import foot2 from "../assets/Images/foot2.png"

const FooterSection = () => {
  return (
    <div>
        <div className='rounded px-2 ml-35 mt-10'>
            <button>Services</button>

        </div>

        <div className='flex items-center justify-between  mr-35'>

            <h2 className='ml-35 font-medium text-xl'>
                Explore Our full range of coaching, <br />
                training and tennis experiences. From <br />
                first serve to match point - We've <br />
                got the right program for you.
            </h2>

            <div className='flex gap-6 '>
                    <img src={foot1} alt="" />
                    <img src={foot2} alt="" />
                
            </div>
        </div>

        <div>
            <div className='ml-30 rounded-full bg-gray-600 text-white px-4 py-2  w-fit font-bold'>
                <button>Explore Now </button>
            </div>
        </div>
    </div>
  )
}

export default FooterSection