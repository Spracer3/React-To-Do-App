import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-700 text-white py-3' > 
    <div className="logo">
        <span className="font-bold text-xl mx-10">Todo</span>
    </div>
        <ul className="flex gap-9 mx-10" >
            <li className='cursor-pointer hover:font-bold transition-all'>Home</li>
            <li className='cursor-pointer hover:font-bold transition-all'>Your task</li>
        </ul>
    </nav>
  )
}

export default Navbar
