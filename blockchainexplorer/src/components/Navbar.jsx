import React from 'react'
import { BsArrow90DegDown, BsCloud, BsCookie, BsHammer, BsLightning, BsSearch, BsThunderbolt } from 'react-icons/bs'
import { TbCoinBitcoin, TbCircleLetterI } from 'react-icons/tb'
import { FaBoltLightning } from "react-icons/fa6";
import { AiFillFileText } from "react-icons/ai";
import { VscGraphLine } from "react-icons/vsc";

const Navbar = () => {
    return (
        <header className="z-10 fixed w-full text-gray-100 shadow shadow-black bg-slate-900 body-font">
            <div className="p-3 pl-5 flex flex-wrap items-center justify-between">
                <div className='flex items-center ml-4'>
                    <div className='flex items-center justify-between sm:justify-start w-[90vw] sm:w-auto sm:gap-x-0'>
                        <a className="w-28 flex font-medium text-gray-50">
                            <span className=" text-white text-xl">Blockchain <span className='text-purple-600'>Explorer</span></span>
                        </a>
                        <a className='flex items-center px-3 mx-2  h-9 rounded bg-slate-800'><span><TbCoinBitcoin size={25} /></span></a>
                    </div>
                    <div className='hidden lg:flex gap-x-5'>
                        <nav className='flex ml-9 gap-x-12'>
                            <a ><BsCookie size={22} /></a>
                            <a ><BsHammer size={22} /></a>
                            <a ><FaBoltLightning size={22} /></a>
                            <a ><VscGraphLine size={22} /></a>
                            <a ><AiFillFileText size={22} /></a>
                            <a ><TbCircleLetterI size={22} /></a>
                        </nav>
                    </div>
                </div>
                <div className='w-full sm:w-auto flex items-center justify-center'>
                    <input type="text" className='bg-slate-800 h-10 mr-2 mt-2 sm:mt-0 w-[80vw] sm:w-[40vw] lg:w-[30vw] p-2  rounded-md' placeholder='Explore the full Bitcoin ecosystem' />
                    <button className='bg-purple-800 pl-6 h-10  w-16 rounded'><BsSearch /></button>
                </div>


            </div>
            <div className='fixed lg:hidden bottom-0 w-full p-5 bg-stone-900 shadow shadow-black flex items-center justify-center gap-x-5'>
                <nav className='flex items-center gap-x-6 sm:gap-x-10'>
                    <a ><BsCookie size={30} /></a>
                    <a ><BsHammer size={30} /></a>
                    <a ><FaBoltLightning size={30} /></a>
                    <a ><VscGraphLine size={30} /></a>
                    <a ><AiFillFileText size={30} /></a>
                    <a ><TbCircleLetterI size={30} /></a>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
