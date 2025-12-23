import React from 'react'
import down1 from "../assets/Images/down1.png";
import down2 from "../assets/Images/down2.png"


export const MainSection = () => {
    return (
        <div>
            <div className="mt-10 flex justify-center items-center gap-8">
                <img src={down1} className='' alt="" />

                <div className='flex  justify-center'>
                    <img src={down2} alt="" className="h-75 " />
                </div>


                <div>
                    <h2 className='mt-10 text-3xl font-semibold'>100+</h2>
                    <h4 className='font-medium ml-1 mt-2'>pro Coaches</h4>
                    <p className="ml-1 mt-1 text-gray-400 mb-8"> Certified professionals ready to boost your <br />  game from first serve to tournament level</p>

                    <div className="flex flex-col ml-2">

                        {/* Beginner */}
                        <div className="flex items-center">
                            <p className="w-28 font-medium">Beginner</p>
                            <div className="flex">
                                {[...Array(10)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-3 h-3 rounded-full ${i < 8 ? "bg-sky-500" : "bg-sky-100"
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="w-8 text-right font-medium">55</p>
                        </div>

                        {/* Intermediate */}
                        <div className="flex items-center">
                            <p className="w-28 font-medium">Intermediate</p>
                            <div className="flex">
                                {[...Array(10)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-3 h-3 rounded-full ${i < 7 ? "bg-sky-500" : "bg-sky-100"
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="w-8 text-right font-medium">40</p>
                        </div>

                        {/* Advanced */}
                        <div className="flex items-center ">
                            <p className="w-28 font-medium">Advanced</p>
                            <div className="flex">
                                {[...Array(10)].map((_, i) => (
                                    <span
                                        key={i}
                                        className={`w-3 h-3 rounded-full ${i < 6 ? "bg-sky-500" : "bg-sky-100"
                                            }`}
                                    />
                                ))}
                            </div>
                            <p className="w-8 text-right font-medium">35</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className="flex justify-center mt-5">
                <h2 className="px-6 py-2 font-medium tracking-widest mr-10">
                    A FEW MORE FACTS ABOUT US IN NUMBERS
                </h2>
            </div>


            <div className="w-full flex justify-center mt-10">
                <div className="grid grid-cols-4 gap-16 text-center tracking-widest">

                    <div>
                        <h2 className="text-3xl font-semibold">12,000+</h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Hours of play annually
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold">89%</h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Player Retention Rate
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold">1,200+</h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Active Members
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold">125+</h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Annual Tournaments
                        </p>
                    </div>

                </div>
            </div>


        </div>
    )
}
