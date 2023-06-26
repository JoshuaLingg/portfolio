import Image from 'next/image'
import Link from 'next/link'

const chess = () => {
  return (
    <div className='container mx-auto px-30 py-10 mb-10 bg-slate-400 rounded-2xl'>
      <h2 className='text-center text-6xl pb-4'>My <span className='decoration-solid text-rose-800 text-7xl'>Chess</span> Project</h2>
      <p className='text-center text-4xl leading-9'>
        Technology Used: <span className='decoration-solid text-lime-800 text-4xl'>React</span>
      </p>

      <a 
        href='https://react-chess-sigma.vercel.app/' 
        target="_blank"
        className='bg-white mx-auto my-6 hover:bg-lime-400 max-w-[250px] px-2 rounded-md flex cursor-pointer'
      >
        <p className='text-2xl py-2 mx-auto'>
          Click here to play
        </p>
      </a>

    <div>
      <p className='content'>
        For my final project at General Assembly, I made a Chess application. 
        <br/>I've always been wanting to make a Chess game and 
        since I have the skills to do so now I decided to try.
        <br/>This was much harder than I had initially anticipated and I had 
        learnt alot from it. 
      </p>
      <Image
        width={1100} 
        height={550}
        className='mx-auto my-8 max-w-full px-10' 
        src="/chess-img/chess.png" 
        alt="Chessboard" 
      />
      <p className='content'>
        It's almost a fully functional Chess game so you can play a full game with it. 
        Players can Castle, En Passant, promote pawns and more... 
        But however I have not implemented stalemate detection as I 
        had run out of time for my 2 week project.
      </p>

      <Image
        width={1100} 
        height={550}
        className='mx-auto my-8 max-w-full px-10' 
        src="/chess-img/moving-pawn.png" 
        alt="Moving pawn" 
      />
      <p className='content'>
        To move a piece, you drag the piece with your cursor and while holding a piece
        the game will show you possible squares for the piece to move to.
      </p>

      <h2 className='text-center text-5xl pb-4 mt-6'>Room for improvement</h2>
      <p className='content'>
        The game doesn't have stalemate detection. The design is also not 
        responsive and doesn't scale with a scaling window. And unfortunately
        the dragging feature as well as a non responsive page makes it impossible to 
        play on mobile.
      </p>
    </div>
  </div>
  )
}

export default chess