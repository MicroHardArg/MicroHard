import React from 'react'
import { useRouter } from "next/router";
import Link from "next/link";
import {useEffect,useState } from "react";

export default function NavBar() {
    const router = useRouter();
    const [user, setuser] = useState('')



  const [showDropdown, setShowDropdown] = useState({
    clientState: false,
    proyectState: false,
    presupuestState: false,
    filtroClienteState:false,
    servicioRecurenteState:false,
    crearRecurenteState:false,
    enlazarRecurenteState:false,
    userState: false,


  });

  const handleShowDropdown = ({ target }) => {
    console.log(target)
    const { name } = target;
   
    setShowDropdown({
        clientState:
        name === "clientState"
          ? !showDropdown.clientState
          : (showDropdown.clientState = false),
      proyectState:
        name === "proyectState"
          ? !showDropdown.proyectState
          : (showDropdown.proyectState = false),
       presupuestState:
          name === "presupuestState"
            ? !showDropdown.presupuestState
            : (showDropdown.presupuestState = false),
        userState:
            name === "userState"
              ? !showDropdown.userState
              : (showDropdown.userState = false),
        filtradoState:
              name === "filtradoState"
                ? !showDropdown.userState
                : (showDropdown.userState = false),
        filtroClienteState:
                name === "filtroClienteState"
                  ? !showDropdown.userState
                  : (showDropdown.userState = false),
        servicioRecurenteState:
                  name === "servicioRecurenteState"
                    ? !showDropdown.userState
                    : (showDropdown.userState = false),
        crearRecurenteState:
                    name === "crearRecurenteState"
                      ? !showDropdown.userState
                      : (showDropdown.userState = false),
        enlazarRecurenteState:
                      name === "enlazarRecurenteState"
                        ? !showDropdown.userState
                        : (showDropdown.userState = false),
      
    });
  };


  const handleSignIn = (e) => {
    e.preventDefault();
     router.push("/login");
    };

  //--------------Para que no quede desplegado el menú cuando cambiamos de pagina---------------
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setIsNavOpen(false);
      setShowDropdown({
        clientState: false,
        proyectState: false,
        presupuestState: false,
        filtroClienteState: false,
        filtroClienteState: false,
        servicioRecurenteState: false,
        crearRecurenteState: false,
        enlazarRecurenteState: false,
      });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);


  

  return (
     <div className=' bg-zinc-800 w-full ml-0'>

    <div class="max-w-2xl ">
    
    <nav class="border-gray-200 top-0 w-full bg-transparent z-50 "> 
 
    <div class="container mx-auto flex pl-12 pr-20 items-center gap-14 p-3 w-full z-40  ">

        <Link className=" scale-100 pr-40  " href="/">

        <div className=' flex items-center space-x-1'>
        <img src="logo scj.png" alt="Logo" height={100} width={100} />
            <span class="   text-sm text-white font-semibold whitespace-nowrap  ">Electronic Solutions</span>
        </div>

            </Link>


        
        <div class="hidden md:block w-full md:w-auto" id="menu">
          
        <ul class="flex-col md:flex-row flex md:space-x-10 mt-4 md:mt-0 md:text-sm md:font-medium">
            
            <li className='pl-48'>
                <button id="clienteslist" data-dropdown-toggle="dropdownNavbar" class="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">Clientes <svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

                {/* Dropdown menu */}

                <div id="dropdownNavbar" class="hidden bg-zinc-400 text-base z-10 list-none divide-y divide-gray-300 rounded shadow my-4 w-44">
                    <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/FiltroClientes/FiltroClientes" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Clientes</a>
                    </li>
                    <li>
                        <a href="/clients" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Crear Cliente</a>
                    </li>
                    </ul>
                </div>
            </li>
            <li>

            <a href="/projects" class="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0">Proyectos</a>
            </li>
            <li>
            <a href="/budgets" class="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0">Presupuestos</a>
            </li>
            <li>
            <a href="/servicioRecurrente" class="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0">Servicios</a>
            </li>

            <li className=' pl-80'>
                <button id="SignIn" data-dropdown-toggle="dropdownSignIn" class="text-white hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 pl-3 pr-4 py-2 md:hover:text-blue-500 md:p-0 font-medium flex items-center justify-between w-full md:w-auto">SignIn<svg class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>

                {/* Dropdown menu */}

                <div id="dropdownSignIn" class="hidden bg-zinc-400 text-base z-10 list-none divide-y divide-gray-300 rounded shadow my-4 w-44">
                    <ul class="py-1" aria-labelledby="dropdownLargeButton">
                    <li>
                        <a href="/" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign In</a>
                    </li>
                    <li>
                        <a href="/" class="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
                    </li>
                    </ul>
                </div>
            </li>

        </ul>
        </div>
    </div>
    </nav>

</div>
<script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
</div>

  )
}
