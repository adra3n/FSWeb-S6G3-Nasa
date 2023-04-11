import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-slate-600  text-slate-200  font-semibold flex justify-around h-[4%]">
      <div className="flex justify-between  items-center w-[40%]">
        <a>Önceki</a>
        <a>Anasayfa</a>
        <a>Sonraki</a>
      </div>
    </nav>
  )
}

export default Navbar
