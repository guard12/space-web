import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="bg-black min-h-screen text-gray-200">
      <Head>
        <title>Space Explorers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex items-center justify-center h-screen overflow-hidden">
        <div className="absolute z-30 p-5">
          <div className="text-4xl font-bold">
            DO YOU SEE OUR FUTURE IN SPACE?
          </div>
          <div className="text-xl font-normal text-center">
            Then you are at the right place.
          </div>
        </div>
        <Image
          className="z-10 w-auto min-w-full min-h-full max-w-none opacity-60"
          src="/bg.jpg"
          layout="fill"
          alt="mars-background"
        />
      </div>
      <div className="p-10 w-1/2">
        <div className="text-base font-normal text-left">
          Were you endlessly browsing the web in the belief that you will find a job in a space startup?
          So was I, unfortunately I have found exactly 0 startups in Copenhagen which would push the humanity
          further.
        </div>
      </div>
    </div>
  )
}

export default Home
