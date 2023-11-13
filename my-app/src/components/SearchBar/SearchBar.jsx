import React from "react";

export default function Search(){
    return(
        <div className="pt-16 m-auto">
        <form className='w-1/2 relative m-auto'>
            <input type="search"  className="w-full focus:outline-none backdrop-blur-sm bg-white/10 h-10 rounded-2xl px-4 text-white" />
            <button type="submit" className="text-white  right-2.5 bottom-2.5 absolute px-4">
            <svg class="h-8 w-6 pt-3  text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            </button>
        </form>            
      </div>
    )
}