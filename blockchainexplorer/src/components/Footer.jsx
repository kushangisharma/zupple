import React from 'react'
import { BsGithub, BsTwitter, BsYoutube } from 'react-icons/bs'
import { GiOstrich, GiSurroundedEye } from "react-icons/gi";
import { PiTelevisionLight } from "react-icons/pi";
import { TbCircleLetterM } from "react-icons/tb";

export default function Footer() {

    return (
        <footer className="text-gray-200body-font bg-slate-900" style={{boxShadow: '10px 0 5px black'}}>
            <div className='flex md:flex-row flex-col justify-center md:justify-around flex-wrap pt-10'>
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-50">

                        <span className="ml-3 text-white text-3xl md:text-4xl">Blockchain <span className='text-purple-600'>Explorer</span></span>
                    </a>
                    <p className="mt-2 text-sm text-gray-100">Exploring the Bitcoin ecosystem</p>
                </div>
                <div className='flex mt-6 md:mt-0 justify-center'>
                    <button className="h-8 inline-flex mx-2 text-white bg-slate-600 border-0 py-1 px-4 focus:outline-none  rounded text-sm">English</button>
                    <button className="h-8 inline-flex mx-2 text-white bg-slate-600 border-0 py-1 px-4 focus:outline-none  rounded text-sm">USD</button>
                    <button className="h-8 inline-flex mx-2 text-white bg-slate-600 border-0 py-1 px-4 focus:outline-none  rounded text-sm">sat/vB</button>
                    <button className="h-8 inline-flex mx-2 text-white bg-purple-600 border-0 py-1 px-4 focus:outline-none hover:bg-purple-700 rounded text-sm">Sign In</button>
                </div>
            </div>
            <div className="container px-20 md:mt-10 mb-2 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-600 tracking-widest text-lg mb-3">Explore</h2>
                        <nav className="list-none mb-10">
                            <li className='my-1'>
                                <a className="text-gray-200">Mining Dashboard</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Lightning Explorer</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Recent Blocks</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Broadcast Transaction</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Connect to our Nodes</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">API Documentation</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-600 tracking-widest text-lg mb-3">Learn</h2>
                        <nav className="list-none mb-10">
                            <li className='my-1'>
                                <a className="text-gray-200">@kushangisharma</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">What is a blockchain?</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">What is a blockchain explorer?</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Why isn't my transaction confirming?</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">More FAQs »</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-600 tracking-widest text-lg mb-3">Networks</h2>
                        <nav className="list-none mb-10">
                            <li className='my-1'>
                                <a className="text-gray-200">Testnet Explorer</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Signet Explorer</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Liquid Testnet Explorer</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Liquid Explorer</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Bisq Explorer</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-blue-600 tracking-widest text-lg mb-3">Legal</h2>
                        <nav className="list-none mb-10">
                            <li className='my-1'>
                                <a className="text-gray-200">Terms of Service</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Privacy Policy</a>
                            </li>
                            <li className='my-1'>
                                <a className="text-gray-200">Trademark Policy</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="flex felx-col justify-center  gap-y-5">
                <nav className="list-none flex flex-wrap gap-x-5 text-white">
                    <li><BsGithub size={20}/></li>
                    <li><BsTwitter size={20}/></li>
                    <li><GiOstrich size={20}/></li>
                    <li><GiSurroundedEye size={20}/></li>
                    <li><BsYoutube size={20}/></li>
                    <li><PiTelevisionLight size={20}/></li>
                    <li><TbCircleLetterM size={20}/></li>
                </nav>
            </div>
            <div className="py-5 text-slate-50 flex felx-col justify-center  gap-y-5">
                <p className='px-2 text-center'>Developed by Kushangi Sharma<span classNameName='text-cyan-500'></span> </p>
            </div>

        </footer>
    )
}
