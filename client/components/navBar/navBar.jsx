import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";


export default function NavBar() {


  return (
    <div className=' fixed top-0 w-full bg-transparent z-50'>

    <nav className=' flex pl-20 pr-20 text-white items-center gap-14 p-5 w-full z-40  '>

    <Link className=" scale-100" href="/">
        <div className=' flex text-xl items-center '>

           <h1>Logo</h1>

        </div>

    </Link>

        <div className=' pl-96 '>

            <button class="border-b-2 border-transparent hover:text-gray-200  hover:border-blue-500 ">
                Clientes
            </button>

        </div>

        <div className='pl-8 '>

            <button class="border-b-2 border-transparent hover:text-gray-200  hover:border-blue-500 ">
                Proyectos
            </button>

        </div>

        <div className='pl-8 ' >

            <button class="border-b-2 border-transparent hover:text-gray-200  hover:border-blue-500 ">
                Presupuestos
            </button>

        </div>

        <div className='flex  items-start pl-40'>
            <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>

            </div>


        </div>

        </nav>

    </div>
  )
}
