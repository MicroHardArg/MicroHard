import React from 'react'
import Link from "next/link";
import { useState, useEffect } from 'react';



function Table({ data, searchTerm }) {
    console.log(data); 
    console.log(searchTerm);
    // const filteredData = data.data.filter((item) =>
    const [clienteId, setClienteId] = useState(null);


    const filteredData = Array.isArray(data.data) ? data.data.filter((item) =>
      item.attributes.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];
  
    
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Cliente
                    </th>
                    <th scope="col" className="px-6 py-3">
                       Contacto
                    </th>

                    <th scope="col" className="px-6 py-3">
                        Telefono
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Email
                    </th>

                    <th scope="col" className="px-6 py-3">
                        Dirección
                    </th>
                    <th scope="col" className="px-6 py-3">
                    <select className='uppercase'>
                    <option > Cuenta Corriente</option>
                      <option > Adeuda</option>
                     <option> No adeuda</option>
                     </select>

                    </th>
                    <th scope="col" className="px-6 py-3">
                        Detalle Cliente
                    </th>
                </tr>
            </thead>
            <tbody>
            {filteredData.map((item) => (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>  
                            <div className="pl-3">
                            <div className="text-base font-semibold">{item.attributes.nombre}</div>
                            <div className="font-normal text-gray-500">{item.attributes.CUIT}</div>
                        </div>  
                    </th>
                    <td className="px-6 py-4">
                    {item.attributes.contacto}
                    </td>
                  
                    <td className="px-6 py-4">
                    {item.attributes.telefono}
                    </td>
                    <td className="px-6 py-4">
                    {item.attributes.email}
                    </td>

                    <td className="px-6 py-4">
                    {item.attributes.direccion}
                    </td>
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> No Adeuda
                        </div>
                    </td>
                    <td className="px-6 py-4">

                    <Link href={`/DetalleCliente/${item.id}`} onClick={() => setClienteId(item.id)} type="button" data-modal-target="editUserModal" data-modal-show="editUserModal" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Info</Link>

                    </td>
                </tr>
                 ))}
            </tbody>
        </table>
  
     
  
    </div>
    );
    };
  
  export default Table;