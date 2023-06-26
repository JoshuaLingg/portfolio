import Image from "next/image"

const postingapp = () => {
  return (
    <div className='container mx-auto px-30 py-10 mb-10 bg-slate-400 rounded-2xl'>
      <h2 className='text-center text-6xl pb-4'>My <span className='decoration-solid text-green-800 text-7xl'>Posting App</span></h2>
      <p className='text-center text-4xl leading-9'>
        Technology Used: <span className='decoration-solid text-yellow-800 text-4xl'>NextJs, MongoDB</span>
      </p>

      <a 
        href='https://posting-g2jutlmtk-joshualingg.vercel.app' 
        target="_blank"
        className='bg-white mx-auto my-6 hover:bg-lime-400 max-w-[250px] px-2 rounded-md flex cursor-pointer'
      >
        <p className='text-2xl py-2 mx-auto'>
          Click here to post
        </p>
      </a>

      <div>
        <p className='content'>
          This was my first NextJs project. I wanted to make this portfolio with NextJs so 
          I started this project to learn how it works.
        </p>
        <Image
          width={1100} 
          height={550}
          className='mx-auto my-8 max-w-full px-10' 
          src="/postingapp/postingapp-example.png" 
          alt="Posting App" 
        />
        <p className='content'>
          You can sign in using your Google account and make your own post. Type 
          a message that you want to post and a tag with #.

        </p>
        <Image
          width={1100} 
          height={550}
          className='mx-auto my-8 max-w-full px-10' 
          src="/postingapp/postingapp-example2.png" 
          alt="Creating a post" 
        />
        <p className='content'>
          To move a piece, you drag the piece with your cursor and while holding a piece
          the game will show you possible squares for the piece to move to.
        </p>

        <Image
          width={1100} 
          height={550}
          className='mx-auto my-8 max-w-full px-10' 
          src="/postingapp/postingapp-example3.png" 
          alt="New post" 
        />
        <p className='content'>
          After posting a message it will appear at the bottom. You are also able to use the search
          bar to search for a message.
          Click on your profile image on the top right of the page will allow you 
          to see all the posts you have made and let your edit or delete them.
        </p>

        <h2 className='text-center text-5xl pb-4 mt-6'>Room for improvement</h2>
        <p className='content'>
          The website sometimes doesn't registers if a user is logged in or not
          and when a card is added or deleted. The search functionality searches for any letter
          within the card and it would be better if it starts searching from the first letter of each 
          word.
        </p>
      </div>
    </div>
  )
}

export default postingapp