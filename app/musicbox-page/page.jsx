import Image from "next/image"

const musicbox = () => {
  return (
    <div className='container mx-auto px-30 py-10 mb-10 bg-slate-400 rounded-2xl'>
      <h2 className='text-center text-6xl pb-4'>Our <span className='decoration-solid text-fuchsia-800 text-7xl'>Music Box</span> Application</h2>
      <p className='text-center text-4xl leading-9'>
        Technology Used: <span className='decoration-solid text-indigo-800 text-4xl'>React, Supabase</span>
      </p>

      <a 
        href='https://github.com/JoshuaLingg/Music-Box' 
        target="_blank"
        className='bg-white mx-auto my-6 hover:bg-lime-400 max-w-[250px] px-2 rounded-md flex cursor-pointer'
      >
        <p className='text-2xl py-2 mx-auto'>
          Click here for GitHub
        </p>
      </a>

      <div>
        <p className='content'>
          This was my first React Project and also my first group project. 
          I worked with 3 of my classmates to create this music application. 
          Unfortunately we have taken down our Supabase database so the application 
          is no longer functional, but I still wanted to add this project to my Portfolio
          to outline how this project had progressed.
        </p>
        <Image
          width={1100} 
          height={550}
          className='mx-auto my-8 max-w-full px-10' 
          src="/musicbox/musicbox-example.png" 
          alt="Music Box" 
        />

        <p className='content'>
          Our group had set out to create a Music player since the beginning and 
          had originally intended to implement the Spotify API. After testing out the API we realised
          that the API didn't give us the freedom that we wanted. So we had decided to 
          store our songs in a Supabase database and allow users to import 
          songs and play the songs.
        </p>

        <Image
          width={1100} 
          height={550}
          className='mx-auto my-8 max-w-full px-10' 
          src="/musicbox/musicbox-example2.png" 
          alt="Moving pawn" 
        />

        <h2 className='text-center text-5xl pb-4 mt-6'>Room for improvement</h2>
        <p className='content'>
          In terms of the application itself there's alot that can be improved. There wasn't much
          effort put into the design of the application and we also had left legacy code in the application and 
          a lot of console logs. If we had time, we could have implemented a login system 
          and let users create, update and delete their own songs and playlist
          
          As for improvements that can be made for our teamwork, we would have worked
          together better if we had outlined clearly the tasks that had to be done 
          and created a list of what we want the application to be able to do.
        </p>
      </div>
    </div>
  )
}

export default musicbox