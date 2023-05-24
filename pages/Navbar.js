import Image from 'next/image';
import logo from './images/logo.png';
import cart from './images/cart.png';
import {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar =()=>{
    const [show, setShow]=useState(false);
    return(
        <div className="flex bg-none justify-between px-20 pt-10 overflow-hidden">
            <div className="hidden sm:flex">
                <Image 
                src={logo}
                alt="Logo of our Grocery"
                width={200}
                height={200} className='hover:w-[10vw] cursor-pointer'/>
            </div>
            <div>
            <div className="hidden md:flex">
               <ul className="flex justify-between">
                    <li className="font-bold font-serif px-4 text-lg hover:text-[#cbcb2c] cursor-pointer">Home</li>
                    <li className="font-bold font-serif px-4 text-lg hover:text-[#cbcb2c] cursor-pointer">About</li>
                    <li className="font-bold font-serif px-4 text-lg hover:text-[#cbcb2c] cursor-pointer">Features</li>
                    <li className="font-bold font-serif px-4 text-lg hover:text-[#cbcb2c] cursor-pointer">Contact</li>
                </ul> 
            </div>             
                <div className="md:hidden z-10 left-[-300px]">
                {show ? ( <FaTimes  onClick={()=>setShow(!show)}/>):
                (<FaBars onClick={()=>setShow(!show)} className='-mb-60'/>)}
            </div>
            <div className={show ? "md:hidden bg-green-300 h-[300px] duration-300 text-black font-bold rounded-3xl pr-16  w-full overflow-y-hidden":"duration-300 md:hidden w-full overflow-y-hidden ml-[-400px] left-[-100%]"}>
            <ul className="flex flex-col px-32 justify-between">
                    <li className="font-bold font-serif px-4 text-lg py-4 mr-10 hover:text-[#cbcb2c] cursor-pointer">Home</li>
                    <li className="font-bold font-serif px-4 text-lg py-4 mr-10 hover:text-[#cbcb2c] cursor-pointer">About</li>
                    <li className="font-bold font-serif px-4 text-lg py-4 mr-10 hover:text-[#cbcb2c] cursor-pointer">Features</li>
                    <li className="font-bold font-serif px-4 text-lg py-4 mr-10 hover:text-[#cbcb2c] cursor-pointer">Contact</li>
                </ul> 
            </div>
            </div> 
                
                
            
            <div>
                <Image
                src={cart}
                alt="Cart Page"
                width={20}
                height={20}  className='hover:text-yellow hover:cursor-pointer'/>
            </div>
        </div>
    )
}

export default Navbar;