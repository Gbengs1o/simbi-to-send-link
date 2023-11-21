import React from 'react'
import Whatsapp from '../assets/images/whatsapp.svg'
import Instagram from '../assets/images/instagram.svg'
import LinkedIn from '../assets/images/linkedin.svg'
import Twitter from '../assets/images/twitter.svg'

const socials = [LinkedIn, Instagram, Twitter, Whatsapp]

const Footer = () => {
    return (
        <footer className='bg-[#f6f6f7] fixed bottom-0 w-[375px] grid items-center gap-10 p-10 font-corsa text-theme-purple tracking-wide text-[14px]'>
            <div className='mx-auto grid gap-5'>
                <div className='flex w-full text-theme-purple font-corsa gap-2 items-center justify-center'>
                    <div>
                        <img src="/android-chrome-512x512.png" alt="Simbi logistics" className='w-12' />
                    </div>
                    <span className='text-[14px] tracking-wider leading-tight'>Simbi <br />Logistics</span>
                </div>

                <p>Fast, secure, and reliable delivery services</p>
            </div>

            <div className="grid gap-3">
                <div className='flex justify-center items-center gap-2 text-center'>
                    <img src="/src/assets/images/phone.svg" alt="" className='w-4' /> <a href="tel:+2349052438815">090524338815</a>
                </div>
                <div className='flex justify-center items-center gap-2 text-center'>
                    <img src="/src/assets/images/mail.svg" alt="" className='w-4' /> <a href="mailto:simbilogistics@gmail.com">Simbilogistics@gmail.com</a>
                </div>
            </div>

            <div className='flex justify-center gap-5'>
                {
                    socials.map((icon, index) => {
                        return (
                            <a href="#" key={index}>
                                <img src={icon} alt='' className='w-6' />
                            </a>
                        )
                    })
                }
            </div>

            <div className='text-center'>
                <p className='text-[22px]'>&copy;2023 - Simbi Logistics</p>
            </div>

        </footer>
    )
}

export default Footer