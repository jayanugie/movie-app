import React from 'react'

const Footer = () => {
  return (
    <div className='border-t border-neutral-500 w-full sm:p-5 p-2 bg-zinc-900 text-neutral-500 flex justify-center space-x-2'>
        <p>2022 &copy; jayanugie</p>
        <a href='https://linkedin.com/in/jayanugie' target="_blank" rel="noreferrer">
          <img src='/assets/linkedin.png' alt='linkedin' className='h-5 m-1'/>
        </a>
        <a href='https://github.com/jayanugie' target="_blank" rel="noreferrer">
          <img src='/assets/github.png' alt='github' className='h-5 m-1'/>
        </a>
    </div>
  )
}

export default Footer