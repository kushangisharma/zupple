import React, { useMemo } from 'react'
import './crausal.css'
import Data from './data.json'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CrausalCard = () => {
    const settings = useMemo(() => {
        return {
            autoplay: true,
            // speed: 2500,
            autoplaySpeed: 8000,
            cssEase: "linear",
            dots: false,
            infinite: true,
            arrows: false,
            slidesToShow: 9,
            slidesToScroll: 1,
            vertical: false,
            horizontalSwiping: true,
            swipeToSlide: true,
            pauseOnHover: true,
            variableWidth: false,

            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 7,
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                        slidesToShow: 2,
                    }
                }
            ]

        };
    }, []);
    // <div className='flex w-full h-[100vh] bg-slate-800'>
    //     <div className='dabba2 flex items-center h-[400px] relative  overflow-x-scroll overflow-y-hidden'>
    //         {
    //             Data.map((d) => (
    //                 <div key={d.id} className='dabba bg-slate-800 flex' >
    //                     <div className="cube3d px-20">
    //                         <div className="top bg-slate-700"> </div>
    //                         <div className="bottom"> </div>
    //                         <div className="left bg-slate-900"> </div>
    //                         <div className="right "> </div>
    //                         <div className="front flex flex-col items-center gap-y-1 text-white bg-gradient-to-b from-violet-600 to-blue-600"> 
    //                            <p className='text-xs py-2'>{d.stat1}</p>
    //                            <p className='text-xs text-orange-300'>{d.stat2}</p>
    //                            <p className='text-xm'>{d.stat3}</p>
    //                            <p className='text-xs'>{d.stat4}</p>
    //                            <p className='text-xs'>{d.stat5}</p>
    //                         </div>
    //                         <div className="back"> </div>
    //                     </div>
    //                 </div >
    //             ))
    //         }
    //     </div>
    // </div>
    return (
        <div className=' w-auto bg-slate-800 pt-28'>
            <Slider {...settings}>
                {Data.map((d) => (
                    <div key={d.id} className='dabba bg-slate-800 flex h-[200px] -mt-24' >
                        <div className='ml-3 text-center -mb-52 text-cyan-500'>{d.head}</div>
                        <div className="cube3d px-20">
                            <div className="top bg-slate-700"> </div>
                            <div className="bottom"> </div>
                            <div className="left bg-slate-900"> </div>
                            <div className="right "> </div>
                            <div className="front flex flex-col items-center gap-y-1 text-white bg-gradient-to-b from-violet-600 to-blue-600">
                                <p className='text-xs py-2'>{d.stat1}</p>
                                <p className='text-xs text-orange-300'>{d.stat2}</p>
                                <p className='text-xm'>{d.stat3}</p>
                                <p className='text-xs'>{d.stat4}</p>
                                <p className='text-xs'>{d.stat5}</p>
                            </div>
                            <div className="back"> </div>
                        </div>
                    </div >
                ))}

            </Slider>

        </div>
    );
}

//     )
// }

export default CrausalCard


