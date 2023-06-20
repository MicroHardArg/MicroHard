import React, { useEffect, useState } from 'react';

  const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
      fetch('http://localhost:1337/api/recurrentes?populate=*')
        .then(response => response.json())
        .then(data => setServices(data.data));
    }, []);

    // Agrupar los servicios por cliente
    const groupedServices = services.reduce((acc, service) => {
      const cliente = service.attributes.cliente.data.attributes.nombre;
      if (!acc[cliente]) {
        acc[cliente] = [];
      }
      acc[cliente].push(service);
      return acc;
    }, {});

    return (

      <div>
  
    <div className="flex items-center justify-center rounded  w-full shadow-lg leading-normal bg-gray-200 ">

                  <a className="  p-5 border-b  ">

                  <p className="font-bold text-lg mb-1 text-black ">Lista De Servicios</p>

                  </a>

                  </div>

                <div className=' overflow-y h-[555px]'>
                  <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8 ">

                <div className="overflow-hidden bg-white rounded max-w-4xl w-full shadow-lg  leading-normal cursor-pointer">
                  
                {Object.entries(groupedServices).map(([cliente, servicios]) => (
                  <div key={cliente}>
                    <a  className="block  hover:bg-zinc-100 p-4  border-b">

                        <p className="font-bold text-lg mb-3 text-black ">{cliente}</p>
                       
                        {servicios.map(service => (
                          <div key={service.id}>
                        <p className=" text-red-800 font-bold mb-2 text-base">Servicio: {service.attributes.servicio}</p>
                        <p className="text-grey-darker mb-2 text-sm">Descripción: {service.attributes.descripcion}</p>
                        <p className="text-grey-darker mb-2 text-sm">Fecha: {service.attributes.fecha}</p>
                        <p className="text-grey-darker mb-2 text-sm">Monto: {service.attributes.monto}</p>
                        <p className="text-grey-darker mb-2 text-sm">Renovable: {service.attributes.renovable ? 'True' : 'False'}</p>
                        </div>

                        ))}

                    </a>

                        </div>
                      ))}
             
                
                </div>
                </div>
            </div>









      </div>
    );
  };

  export default ServiceList;













