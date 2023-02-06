import React, { useEffect, useState } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

// data
import DiscoverData from '../../data/discover.json'
import MenuData from '../../data/menu.json'
import LastPostData from '../../data/last_post.json'


const LastPost = () => {

    const [discoverData, setDiscoverData] = useState(null)
    const [menuData, setMenuData] = useState(null)
    const [lastPost, setLastPost] = useState(null)

    useEffect(() => {
        setDiscoverData(DiscoverData)
        setMenuData(MenuData)
        setLastPost(LastPostData)
    }, [])

    return (
        <section>
            <div className='main-container py-14'>
                <div className='flex gap-x-12 w-full flex-col lg:flex-row'>

                    {/* last post */}
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
                                                        <span>
                                                            {post.group_name}
                                                        </span>
                                                    </>
                                                }
                                            </h4>
                                        </div>
                                        <h3 className='font-bold text-xl my-2 line-clamp-2 tracking-tight'>{post.title}</h3>
                                        <h4 className='font-normal text-lg my-2 text-gray-500 line-clamp-2 tracking-tight'>{post.description}</h4>
                                        <div className='flex items-center gap-x-1'>
                                            <p className='text-xs text-slate-500'>{post.date}</p>
                                            <span className='text-xs text-slate-500 -mt-1'>.</span>
                                            <p className='text-xs text-slate-500'>{post.min_read}</p>
                                            <span className='text-xs text-slate-500 -mt-1'>.</span>
                                            <div className='px-1 border bg-slate-100 hover:bg-slate-200 transition-colors rounded-full text-gray-400'>
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
                                    <div className='w-2/5'>
                                        <Image
                                            src={post.thumbnail}
                                            width={200}
                                            height={135}
                                            layout='fixed'
                                            alt={post.title}
                                            objectFit='cover'
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* discover */}
                    <div className='w-full order-1 lg:w-1/3 lg:order-2 lg:sticky lg:place-self-start mb-10'
                        style={{ top: "14%" }}
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