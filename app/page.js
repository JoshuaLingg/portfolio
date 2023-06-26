import Form from '@/components/Form'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='container mx-auto px-30 py-10 mb-10 bg-slate-400 rounded-2xl'>
      <h2 className='text-center text-6xl pb-4'>About Me</h2>
      <p className='content'>Hello, I'm <span className='decoration-solid text-purple-600 text-3xl'>Josh</span>, 
        a graduate of Cybersecurity at <span className='decoration-solid text-rose-800 text-2xl'>Deakin University </span>
        and Software Engineering with <span className='decoration-solid text-green-900 text-2xl'>General Assembly</span>.
      </p>
      <p className='content my-4'>
        I started my life in technology in Deakin University where I had studied
        Cybersecurity. I found out during the course I discovered a passion for programming and coding,
        where I can utilise problem solving skills and creativity to create applications
        that can be useful for people to use.
      </p>
      <p className='content my-4'>
        I enjoy creating programs and application that I can share with others to use
        or for me to learn new skills. I find it fun to solve coding problems, learn new technology
        and read other people's code.
      </p>

      <p className='content my-4'>
        Enjoy navigating all the projects that I have done so far in this portfolio. 
        
        <span className='decoration-solid text-yellow-800 text-2xl'> I will be happy to hear any feedback.</span>
      </p>
      <Form/>
    </div>
  )
}
