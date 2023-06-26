import Image from "next/image"

const tictactoe = () => {
  return (
    <div className='container mx-auto px-30 py-10 mb-10 bg-slate-400 rounded-2xl'>
      <h2 className='text-center text-6xl pb-4'>My <span className='decoration-solid text-emerald-800 text-7xl'>TicTacToe</span> Game</h2>
      <p className='text-center text-4xl leading-9'>
        Technology Used: <span className='decoration-solid text-pink-800 text-4xl'>JavaScript, HTML, CSS</span>
      </p>

      <a 
        href='https://joshualingg.github.io/TicTacToe/' 
        target="_blank"
        className='bg-white mx-auto my-6 hover:bg-lime-400 max-w-[250px] px-2 rounded-md flex cursor-pointer'
      >
        <p className='text-2xl py-2 mx-auto'>
          Click here to play
        </p>
      </a>

    <div>
      <p className='content'>
        This was the first project that I had made for General Assembly
        and it was my introduction to Javascript. It surprisingly turned out very well
        and I still had time leftover from the 1 week we had been assigned to complete the game.
        So I decided to challenge myself and add an A.I that players can play against.
      </p>
      <Image
        width={1100} 
        height={550}
        className='mx-auto my-8 max-w-full px-10' 
        src="/tictactoe/tictactoe-example.png" 
        alt="TicTacToe" 
      />
      <p className='content'>
        I originally set out to build a basic computer that was able to play random moves
        during it's turn but after programming it, I realised how hard it was to beat the computer.
        There has only been one way for me to beat the computer so far and that is because of the way I 
        had programmed it.
        <br/>I made the computer play the ideal first move in accordance to what the player 
        had moved. After that move it will move randomly unless the player is about to win or if 
        the computer is about to win.
      </p>

      <Image
        width={1100} 
        height={550}
        className='mx-auto my-8 max-w-full px-10' 
        src="/tictactoe/tictactoe-example2.png" 
        alt="Moving pawn" 
      />

      <h2 className='text-center text-5xl pb-4 mt-6'>Room for improvement</h2>
      <p className='content'>
        Right now, the game can only be played against a computer, however to change that 
        all that would need to change is one variable in the code.
        The computer can only play the second turn and hasn't been programmed to go first.
        I can also improve the CSS and make the design more appealing. (but personally I like the 
        simplicity of the current design)
      </p>
    </div>
  </div>
  )
}

export default tictactoe