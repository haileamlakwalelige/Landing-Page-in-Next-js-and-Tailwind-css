import {AiFillCaretDown} from 'react-icons/ai';
import grocery from './images/grocery-image.png';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react';

const Hero=()=>{
    useEffect(()=>{
        AOS.init({duration:2000});
    })
    return(
        <div className='font-serif md:grid grid-cols-2 gap-20 px-20 pb-20 sm:pb-0 h-full'>
        <div className="mt-10 "  data-aos="fade-right">
            <h1  className="font-bold text-5xl font-serif pt-6 ">Groceries </h1>
            <h1 className="font-bold text-5xl font-serif pt-6 pb-4"> delivery in<span className="font-light"> 15 mins</span></h1>
            <p>gracify offer a wide range of products.
            including fresh products, meats. <br />
            dairy, baked goods and nod-perishable items.</p>
            <div className='flex py-10   flex-col sm:flex-row'>
                <div className=" bg-[#cbcb2c] hover:bg-[#f10497] hover:text-white text-black rounded-full mx-6 w-32 h-10 text-center">
                <button className="font-bold pt-2">Order now</button></div>
             <div className='flex text-white rounded-full pt-4 sm:pt-0 ml-6 sm:ml-0 hover:bg-[#f10497] hover:ml-2 hover:w-36 px-3'>
                <button>Download App</button>
                <AiFillCaretDown className='mt-4 ml-2'/>
             </div>
            </div>
            </div>
            <div className='mt-10 bg-none mb-10 sm:mb-0'  data-aos="fade-left">
                <Image 
                src={grocery}
                alt="Grocery Person"
                width={500}
                height={500} className=" hover:w-[50vw] cursor-pointer"/>
            </div>
        </div>
    );
}

export default Hero;