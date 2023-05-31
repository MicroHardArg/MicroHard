import React, { useEffect, useState } from 'react';

const ServiceList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:1337/api/recurrentes?populate=*')
      .then(response => response.json())
      .then(data => setServices(data.data));
  }, []);

  return (
    <div>
      <h1>Lista de Servicios</h1>
      <ul>
        {services.map(service => (
          <li key={service.id}>
          <p>Servicio: {service.attributes.servicio}</p>
          <p>Descripción: {service.attributes.descripcion}</p>
          <p>Fecha: {service.attributes.fecha}</p>
          <p>Monto: {service.attributes.monto}</p>
          <p>Renovable: {service.attributes.renovable}</p>
          <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default  ServiceList;






// const ServicesPage = ({ services }) => {
//   return (
//     <div>
//       <h1>Listado de Servicios por Cliente</h1>
//       {services.map((service, index) => (
//         <div key={index}>
//           <h2>Cliente: {service.cliente}</h2>
//           <p>Servicio: {service.servicio}</p>
//           <p>Descripción: {service.descripcion}</p>
//           <p>Fecha: {service.fecha}</p>
//           <p>Monto: {service.monto}</p>
//           <p>Renovable: {service.renovable ? 'Sí' : 'No'}</p>
//           <hr />
//         </div>
//       ))}
//     </div>
//   );
// };

// export async function getStaticProps() {
//   // Aquí puedes realizar la llamada a la API o cargar el JSON desde un archivo local
//   const response = await fetch('http://localhost:1337/api/recurrentes'); // Reemplaza con la URL de tu JSON
//   const data = await response.json();

//   const services = data.data.map(item => ({
//     cliente: item.attributes.cliente.data.attributes.nombre,
//     servicio: item.attributes.servicio,
//     descripcion: item.attributes.descripcion,
//     fecha: item.attributes.fecha,
//     monto: item.attributes.monto,
//     renovable: item.attributes.renovable,
//   }));
// console.log(services)
//   return {
//     props: {
//       services,
//     },
//   };
// }

// export default ServicesPage;
