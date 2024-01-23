import React from 'react'
import { RxCross2 } from "react-icons/rx";

const Section1 = () => {
    return (
        <div className='bg-slate-800 flex items-center justify-center pb-20'>
            <div className=' mt-10 h-full lg:w-[70%] px-4 w-full flex flex-col'>
                <div className='border-b-4'></div>
                <div className='text-white font-semibold text-4xl flex justify-between items-center my-8'>
                    <p>Block <span className='text-cyan-500'>86132 </span></p>
                    <p><RxCross2 /></p>
                </div>
                <div className='flex flex-wrap flex-col sm:flex-row bg-slate-900 '>
                    <div className='text-sm p-6 text-slate-50 sm:w-1/2 h-1/2 sm:h-full w-full'>
                        <p className='bg-slate-800 p-3'>Hash <span className='ml-32 text-cyan-500'>000000...9df7053</span></p>
                        <p className=' p-3'>Timestamp <span className='ml-24'>2024-01-17 19:09</span></p>
                        <p className='bg-slate-800 p-3'>Size <span className='ml-36'>1.69 <span className='text-slate-400 mx-1'>MB</span></span></p>
                        <p className=' p-3'>Weight <span className='ml-32'>3.99 <span className='text-slate-400 mx-1'>MMU</span></span></p>
                        <p className='bg-slate-800 p-3'>Health <span className='ml-32 bg-lime-700 text-white text-xs p-1 rounded-md font-bold'>100%</span></p>
                    </div>
                    <div className='text-sm p-6 text-slate-50 sm:w-1/2 h-1/2 sm:h-full w-full'>
                        <p className='bg-slate-800 p-3'>Fee span <span className='ml-32'>68-1,827 <span className='text-slate-400 mx-1'>sat/vB</span></span></p>
                        <p className=' p-3'>Median fee <span className='ml-28'>~80  <span className='text-slate-400 mx-1'> sat/v8 </span> <span className='text-lime-600 mx-1'> $4.79</span></span></p>
                        <p className='bg-slate-800 p-3'>Total fees <span className='ml-32'>1.171 <span className='text-slate-400 mx-1'>BTC </span> <span className='text-lime-600 mx-1'>$50,038</span></span></p>
                        <p className=' p-3'>Subsidy + fee <span className='ml-24'>7.421 <span className='text-slate-400 mx-1'>BTC </span> <span className='text-lime-600 mx-1'>$317,181</span></span></p>
                        <p className='bg-slate-800 p-3'>Health <span className='ml-36 bg-blue-500 text-white text-xs p-1 rounded-md font-bold'>ViaBTC</span></p>
                    </div>
                </div>
                <div className='my-5 bor flex justify-end w-full'>
                    <button className="h-8 inline-flex mx-2 text-slate-800 bg-cyan-500 border-0 py-1 px-4 focus:outline-none  rounded text-sm">Audit</button>
                    <button className="h-8 inline-flex mx-2 text-cyan-500 border-cyan-500 border-[1px] py-1 px-4 focus:outline-none  rounded text-sm">Details</button>
                </div>
                <div className="flex items-center justify-between w-full  bg-slate-800 ">
                    
                    <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between justify-center ">
                        <div>
                            <p className="text-white sm:text-3xl text-lg -mt-14 sm:-mt-0">
                                4,083 transactions
                            </p>
                        </div>

                        <div className='mt-10 sm:mt-0 '>
                            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm ml-[10vw] sm:ml-0" aria-label="Pagination">
                                <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Previous</span>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                                    </svg>
                                </a>

                                <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-purple-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-cyan-500 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0">2</a>
                                <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-cyan-500 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-cyan-500 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                                <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-cyan-500 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-cyan-500 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0">9</a>
                                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-cyan-500 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0">10</a>
                                <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300  focus:z-20 focus:outline-offset-0">
                                    <span className="sr-only">Next</span>
                                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                                    </svg>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
