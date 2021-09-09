import React, {useState} from 'react';
import Image from 'next/image';
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
    XIcon
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../slices/basketSlice';

const Header = () => {
    const [show, setShow] = useState(true)
    const [session] = useSession()
    const router = useRouter()
    const items = useSelector(selectItems)
    return (
        <header id='nav-top'>
            {/* Top Nav */}
            <div className='bg-amazon_blue flex items-center flex-grow px-2 py-2'>
                {/* Left Side */}
                <div className='flex items-center mt-2 flex-grow sm:flex-grow-0'>
                    <Image 
                        src='https://links.papareact.com/f90'
                        width={150}
                        height={40}
                        objectFit="contain"
                        className='cursor-pointer'
                        alt='amazon-logo'
                        onClick={() => router.push('/')}
                    />
                </div>

                {/* Middle Side */}
                <div className='bg-yellow-400 hover:bg-yellow-500 h-10 rounded-md items-center flex-grow cursor-pointer hidden sm:flex'>
                    
                    <input type="search" id='navSearch' className='h-full p-2 w-6 rounded-l-md flex-grow flex-shrink focus:outline-none px-4' />
                    <SearchIcon className='h-12 p-4'/>
                </div>
                <div className={`p-2 sm:hidden flex border-gray-400 border-2 rounded-sm ${!show && 'nav-search mr-6'}`}>
                    <div className='h-full'>
                        {
                            show ? <SearchIcon onClick={() => setShow(false)} className='h-5 text-white'/>
                            : <XIcon onClick={() => setShow(true)} className='h-5 text-white'/>
                        }
                    </div>
                    <input type="search" className={`bg-transparent w-max px-3 text-white outline-none ${show ? 'hidden' : 'inline-flex from-current'}`}/>
                </div>

                {/* Right Side */}
                <div className={`text-white text-sm space-x-3 items-center px-6 whitespace-nowrap flex ${show ? 'flex' : 'hidden'}`}>
                    <div onClick={session ? signOut : signIn} className="p-1 rounded-sm border border-transparent hover:border-gray-400 cursor-pointer">
                        <p>
                            {
                                session ? `Hello, ${session.user.name}` : 'Hello, Sign in'
                            }
                        </p>
                        <p className='font-extrabold md:text-sm'>
                            {
                                session ? 'Sign out Account' : 'Access and lists'
                            }
                        </p>
                    </div>
                    <div className="p-1 rounded-sm border border-transparent hover:border-gray-400 cursor-pointer">
                        <p>Returns</p>
                        <p className='font-extrabold md:text-sm'>& Orders</p>
                    </div>
                    <div onClick={() => router.push('/checkout')} className="p-1 rounded-sm relative flex items-center border border-transparent hover:border-gray-400 cursor-pointer">
                        <span style={{lineHeight:'1.25rem'}} className='absolute top-0 right-0 md:right-10 w-5 h-5 bg-yellow-400 text-center text-xs rounded-full font-bold text-black'>
                            {items.length}
                        </span>
                        <ShoppingCartIcon className='h-10'/>
                        <p className='hidden md:inline font-extrabold md:text-sm mt-2'>Basket</p>
                    </div>
                </div>
            </div>

            {/* Bottom Nav */}
            <div className='flex items-center text-sm space-x-3 p-2 pl-6 text-white bg-amazon_blue-light'>
                <p className='flex items-center link'><MenuIcon className='h-6 mr-1'/> All</p>
                <p className='link'>Prime Video</p>
                <p className='link'>Amazon Business</p>
                <p className='link'>Todays Deals</p>
                <p className='link hidden lg:inline-flex'>Electronics</p>
                <p className='link hidden lg:inline-flex'>Food & Grocery</p>
                <p className='link hidden lg:inline-flex'>Prime</p>
                <p className='link hidden lg:inline-flex'>Buy Again</p>
                <p className='link hidden lg:inline-flex'>Shopper Toolkit</p>
                <p className='link hidden lg:inline-flex'>Personal & Care</p>
            </div>

            <style jsx>{`
                .nav-search {
                    width: 60%;
                    border-radius: 999px;
                    transition: width 0.5s ease-out;
                }
            `}</style>
        </header>
    );
};

export default Header;