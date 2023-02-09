import React, { useEffect, useState } from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

// data
import TrendingDataPost from '../../data/trending.json'

// utils
import Delay from 'utils/Delay'


const SkeletonTrendingItem = () => {
    return (
        <div className='animate-pulse flex gap-x-3'>
            <div className='rounded bg-slate-200 h-[25px] w-[25px]'></div>
            <div>
                <div className='flex items-center gap-x-2 mb-5'>
                    <div className='rounded-full bg-slate-200 h-[20px] w-[20px]'></div>
                    <div className='h-2 w-[100px] bg-slate-200 rounded'></div>
                </div>
                <div className='h-2 w-[350px] bg-slate-200 rounded mb-5'></div>
                <div className='h-2 w-[350px] bg-slate-200 rounded mb-5'></div>
                <div className='h-2 w-[100px] bg-slate-200 rounded mb-[0.15rem]'></div>
            </div>
        </div>
    )
}

const SkeletonTrending = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <SkeletonTrendingItem />
            <SkeletonTrendingItem />
            <SkeletonTrendingItem />
            <SkeletonTrendingItem />
            <SkeletonTrendingItem />
            <SkeletonTrendingItem />
        </div>
    )
}


const Trending = () => {

    const [posts, setPosts] = useState(null)

    const getTrendingPost = async () => {
        await Delay(2000)
        setPosts(TrendingDataPost)
    }

    useEffect(() => {
        getTrendingPost()
    }, [])

    return (
        <section className='border-b border-gray-400'>


            <div className='main-container py-10'>
                <div>
                    <div className='flex items-center gap-x-3 mb-5'>
                        <Image
                            src="/icons/trending.png"
                            width={28}
                            height={28}
                            alt="Trending icon"
                            layout='fixed'
                            unoptimized
                        />
                        <h2 className='font-medium'>Trending on Medium</h2>
                    </div>

                    {!posts && <SkeletonTrending />}

                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                        {posts && posts.map((post, i) => {

                            const number = `0${i + 1}`

                            return (
                                <div key={post.id} className='flex gap-x-3'>
                                    <p className='text-3xl text-gray-300 font-medium -mt-2'>{number}</p>
                                    <div>
                                        <div className='flex items-center gap-x-2'>
                                            <Image
                                                className='rounded-full'
                                                src={post.avatar}
                                                width={20}
                                                height={20}
                                                alt={post.username}
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
                                        <h3 className='font-bold my-2 line-clamp-2'>{post.title}</h3>
                                        <div className='flex items-center gap-x-1'>
                                            <p className='text-xs text-slate-500'>{post.date}</p>
                                            <span className='text-xs text-slate-500 -mt-1'>.</span>
                                            <p className='text-xs text-slate-500'>{post.min_read}</p>
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
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trending