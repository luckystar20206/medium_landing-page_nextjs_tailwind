import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'


const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='main-container justify-between h-full w-full gap-x-6'>

                <div>
                    <Link href="/">
                        <Image
                            src="/medium.png"
                            alt='medium'
                            width={160}
                            height={25}
                        />
                    </Link>
                </div>

                <div>
                    <ul className='flex items-center gap-x-5'>
                        <li>
                            <Link href='#' className='hidden md:list-item text-sm'>
                                Our Story
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hidden md:list-item text-sm'>
                                Membership
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hidden md:list-item text-sm'>
                                Write
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='hidden sm:list-item text-sm'>
                                Sign In
                            </Link>
                        </li>
                        <li>
                            <Link href='#'>
                                <button className='btn-rounded-sm-black'>
                                    Get Started
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar