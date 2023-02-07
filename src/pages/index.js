import Head from 'next/head'

// components
import Navbar from '@/components/Navbar'
import Header from '@/components/Header'
import Trending from '@/components/Trending'
import LastPost from '@/components/LastPost'


export default function Home() {

  return (
    <>
      <Head>
        <title>Medium – Where good ideas find you.</title>
        <meta name="description" content="Medium is an open platform where readers find dynamic thinking, and where expert and undiscovered voices can share their writing on any topic." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Header />
        <Trending />
        <LastPost />
      </main>
    </>
  )
}
