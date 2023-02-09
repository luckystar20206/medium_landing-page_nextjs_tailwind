import React, { useEffect, useRef } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'


const Navbar = () => {

    useEffect(() => {
        window.addEventListener('scroll', windowOnScroll)

        return () => window.removeEventListener('scroll', windowOnScroll)
    })

    const navRef = useRef(null)
    const btnRef = useRef(null)

    const windowOnScroll = () => {
        const { scrollY } = window
        changeBgColor(scrollY)
    }

    const changeBgColor = (scrollY) => {
        const navbar = navRef.current
        const button = btnRef.current

        if (scrollY > 423) {
            navbar.classList.remove('bg-yellow-500')
            button.classList.remove('bg-black')
            navbar.classList.add('bg-white')
            button.classList.add('bg-green-600')
        } else {
            button.classList.remove('bg-green-600')
            navbar.classList.remove('bg-white')
            button.classList.add('bg-black')
            navbar.classList.add('bg-yellow-500')
        }
    }


    return (
        <nav ref={navRef} className='nav bg-yellow-500'>
            <div className='main-container justify-between h-full w-full gap-x-6'>

                <div>
                    <Link href="/">
                        <Image
                            src="/medium.png"
                            alt='medium'
                            width={180}
                            height={48}
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
                                <button ref={btnRef} className='btn-rounded-sm bg-black'>
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