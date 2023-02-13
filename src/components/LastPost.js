import React, { useEffect, useState } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

// data
import DiscoverData from '../../data/discover.json'
import MenuData from '../../data/menu.json'
import LastPostData from '../../data/last_post.json'

// utils
import RandomDelay from 'utils/Delay'


const SkeletonLastPostItem = () => {

    return (
        <div className='flex items-center gap-x-6 mb-8'>
            <div className='w 3/5'>
                <div className='flex items-center gap-x-3 mb-5'>
                    <div className='rounded-full bg-slate-200 h-[28px] w-[28px]'></div>
                    <div className='h-2 w-[100px] bg-slate-200 rounded'></div>
                </div>
                <div className='h-2 w-[250px] sm:w-[355px] md:w-[420px] bg-slate-200 rounded mb-5'></div>
                <div className='h-2 w-[100px] sm:w-[200px] md:w-[300px] bg-slate-200 rounded mb-8'></div>
                <div className='hidden md:block h-2 w-[440px] bg-slate-200 rounded mb-5'></div>
                <div className='hidden md:block h-2 w-[300px] bg-slate-200 rounded mb-8'></div>
                <div className='flex items-center gap-x-1'>
                    <div className='h-2 w-[80px] sm:w-[160px] md:w-[150px] bg-slate-200 rounded'></div>
                    <div className='rounded bg-slate-200 h-[20px] w-[20px] ml-auto'>
                    </div>
                </div>
            </div>
            <div className='w-2/3'>
                <div className='rounded bg-slate-200 w-[100px] h-[100px] sm:w-[150px] sm:h[100px] md:w-[200px] md:h-[135px]'></div>
            </div>
        </div>
    )
}

const SkeletonLastPost = () => {

    return (
        <div className='w-full order-2 lg:w-2/3 lg:order-1'>
            <SkeletonLastPostItem />
            <SkeletonLastPostItem />
            <SkeletonLastPostItem />
            <SkeletonLastPostItem />
            <SkeletonLastPostItem />
        </div>
    )
}

const LastPostItems = ({ lastPost }) => {
    return (
        <div className='w-full order-2 lg:w-2/3 lg:order-1'>
            {lastPost && lastPost.map((post) => {
                return (
                    <div key={post.id} className='flex items-center gap-x-6 mb-8'>
                        <div className='w-3/5'>
                            <div className='flex items-center gap-x-3'>
                                <Image
                                    className='rounded-full'
                                    src={post.avatar}
                                    width={28}
                                    height={28}
                                    alt="avatar"
                                    layout='fixed'
                                    unoptimized
                                />
                                <h4 className='text-sm'>
                                    <span>
                                        <Link href='#'>
                                            {post.username}
                                        </Link>
                                    </span>
                                    {post.group_name &&
                                        <>
                                            <span className='mx-1 text-gray-500'>in</span>
                                            <Link href="#">
                                                <span>
                                                    {post.group_name}
                                                </span>
                                            </Link>
                                        </>
                                    }
                                </h4>
                            </div>
                            <Link href="#">
                                <h3 className='font-bold text-md md:text-xl my-2 line-clamp-2 tracking-tight'>{post.title}</h3>
                            </Link>
                            <h4 className='hidden font-normal text-lg my-2 text-gray-500 md:block line-clamp-2 tracking-tight'>{post.description}</h4>
                            <div className='flex items-center gap-x-1'>
                                <p className='text-xs text-slate-500'>{post.date}</p>
                                <span className='text-xs text-slate-500 -mt-1'>.</span>
                                <p className='text-xs text-slate-500'>{post.min_read}</p>
                                <span className='text-xs text-slate-500 -mt-1'>.</span>
                                <div className='hidden sm:block px-1 border bg-slate-100 hover:bg-slate-200 transition-colors rounded-full text-gray-400'>
                                    <Link href="#" className='text-sm'>
                                        {post.tag}
                                    </Link>
                                </div>
                                {post.star &&
                                    <div className='mt-1'>
                                        <Image
                                            src='/icons/star.webp'
                                            width={20}
                                            height={20}
                                            alt='star'
                                            layout='fixed'
                                            unoptimized
                                        />
                                    </div>
                                }
                                <div className='ml-auto '>
                                    <Link href='#'>
                                        <Image
                                            src='/icons/saved.png'
                                            width={28}
                                            height={28}
                                            alt='save'
                                            layout='fixed'
                                            unoptimized
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='last-post-thumbnail w-2/5'>
                            <Link href="#">
                                <Image
                                    src={post.thumbnail}
                                    layout='fill'
                                    alt={post.title}
                                    objectFit='cover'
                                />
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

const LastPost = () => {

    const [discoverData, setDiscoverData] = useState(null)
    const [menuData, setMenuData] = useState(null)
    const [lastPost, setLastPost] = useState(null)

    const getLastPost = async () => {
        await RandomDelay()
        setLastPost(LastPostData)
    }

    useEffect(() => {
        setDiscoverData(DiscoverData)
        setMenuData(MenuData)
        getLastPost()
    }, [])

    return (
        <section>
            <div className='main-container py-14'>
                <div className='flex gap-x-12 w-full flex-col lg:flex-row'>

                    {/* last post */}
                    {!lastPost ? <SkeletonLastPost /> : <LastPostItems lastPost={lastPost} />}


                    {/* discover */}
                    <div className='w-full order-1 lg:w-1/3 lg:order-2 lg:sticky lg:place-self-start mb-10 top-[13%]'
                    >
                        <h4 className='font-medium text-slate-900 mb-5'>Discover more of what matters to you</h4>
                        <div className='flex flex-wrap gap-x-2 gap-y-2 mb-6'>
                            {discoverData && discoverData.map((discover, i) => {
                                return (
                                    <div key={i} className='px-5 py-1 border border-slate-300 rounded text-gray-400'>
                                        <Link href="#" className='text-sm'>
                                            {discover}
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <hr />
                        <div className='hidden lg:flex flex-wrap gap-x-1 gap-y-1 mt-6'>
                            {menuData && menuData.map((menu, i) => {
                                return (
                                    <div key={i} className='px-2 py-1 text-gray-500'>
                                        <Link href="#" className='text-base'>
                                            {menu}
                                        </Link>
                                    </div>

                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LastPost