import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import Data2 from './Data2.json'

const Section2 = () => {
    return (
        <div className='bg-slate-800 text-slate-50 flex items-center justify-center text-sm pb-20'>
            <div className='-mt-20 h-full lg:w-[70%] px-4 w-full flex flex-col'>
                {
                    Data2.map((d) => (
                        <div key={d.id} className='my-5'>
                            <div className='bg-slate-900 p-3 flex justify-between mb-2'>
                                <p className='text-cyan-500'>{d.stat1}</p>
                                <p>2024-01-17 19:09</p>
                            </div>

                            <div className='bg-slate-900 p-3 flex flex-col'>
                                <div className='p-3 flex justify-between items-center flex-wrap gap-y-2 sm:gap-y-0 flex-col sm:flex-row'>
                                    <p className='flex items-center text-cyan-500'><span className='mx-2'><FaCircleArrowRight color='red' size={20} /></span>12282ehih238i87e812uei1212ue812u</p>
                                    <p className='flex'>{d.stat2} <span className='text-xs text-slate-500 flex mx-2 items-center'>BTC</span></p>
                                    <p className='text-cyan-500'>{d.stat3}</p>
                                    <p className='flex items-center w-36'>{d.stat4} <span className='text-xs text-slate-500 flex mx-2 items-center'>BTC <span className='mx-2'><FaCircleArrowRight color='red' size={20} /></span></span></p>
                                </div>
                                <div className='p-3 flex justify-between'>
                                    <p><span>{d.stat5}</span><span className='text-xs text-slate-500 mx-1'>sat/vB</span><span>{d.stat6}<span className='text-xs text-slate-500 mx-1'>sat</span><span className='mx-1 text-lime-500'>{d.stat7}</span></span></p>
                                    <button className="h-10 flex items-center mx-2 text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none  rounded text-sm">{d.stat8} <span className='text-xs text-slate-400 mx-2'>BTC</span></button>
                                </div>
                            </div>

                        </div>
                    ))
                }

                <div className=" sm:flex sm:flex-1 sm:items-center sm:justify-between justify-center ">
                    <div>
                        <p className="text-white sm:text-3xl text-lg -mt-14 sm:-mt-0">

                        </p>
                    </div>

                    <div className='mt-20 sm:mt-0 '>
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
    )
}

export default Section2
