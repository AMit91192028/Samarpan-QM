// import React from 'react'
export default function List({ list }) {
    return (
      <li className="flex items-center gap-2 mb-2">
        <img
          src="/ALL-IMAGES/check-mark.png"
          alt="Tick Mark"
          className="w-6 h-6"
        />
        <p className="text-md text-[#7f7f7f] text-[18px] font-sans font-Poppins">{list}</p>
      </li>
    );
  }

  
  