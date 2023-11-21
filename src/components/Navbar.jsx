import React from 'react'

const Navbar = () => {
    return (
        <nav className='p-5 bg-white flex justify-between'>
            <div className='flex w-full text-theme-purple font-corsa gap-2 items-center'>
                <div>
                    <img src="/android-chrome-512x512.png" alt="Simbi logistics" className='w-10' />
                </div>
                <span className='text-[10px] tracking-wider leading-tight'>Simbi <br />Logistics</span>
            </div>

            <div className="flex gap-3">
                <div className='bg-black w-10 h-10 rounded-8 flex justify-center items-center'>
                    <img src="/src/assets/images/playstore.svg" alt="Play Store" className='w-6' />
                </div>
                <div className='bg-black w-10 h-10 rounded-8 flex justify-center items-center'>
                    <img src="/src/assets/images/apple-logo.svg" alt="App Store" className='w-6' />
                </div>
                <button className='bg-white w-10 h-10 rounded-8 flex justify-center items-center'>
                    <img src="/src/assets/images/menu-bar.svg" alt="" className='w-3' />
                </button>
            </div>
        </nav>
    )
}

export default Navbar