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
          <h1 className="text-4xl font-bold uppercase">
            Looking for a space startup?
          </h1>
          <h2 className="text-3xl font-light text-center">
            So was I.
          </h2>
        </div>
        <Image
          className="z-10 w-auto min-w-full min-h-full max-w-none opacity-60"
          src="/bg.jpg"
          layout="fill"
          alt="mars-background"
        />
      </div>
      <div className="flex justify-center pb-8 px-40">
        <div className="text-base font-normal text-center">
          Were you endlessly browsing the web in the belief that you will find a job in a space startup?
          So was I, unfortunately I have found exactly 0 startups in Copenhagen, this made me sad. So I have 
          decided to find people who think like me so together we can help companies like SpaceX to expand human 
          achievements in space.
        </div>
      </div>
      <div className="flex justify-center pb-3 px-40">
        <div className="text-base font-normal text-center">
            At XXX we believe that space is and should be for everyone. Therefore we are joining companies like 
            spaceX, Relativity Space or NASA/ESA on the mission to explore and unfold the universe. If you think you 
            know how to help and have a strong desire to help, let us know!
        </div>
      </div>
    </div>
  )
}

export default Home
