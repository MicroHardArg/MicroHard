import React, {useState, useEffect} from 'react'
import Link from 'next/link'

export default function ServicioRecurrenteCreate(){
    
    const [input, setInput] = useState({
        data:{
          cliente:"",
          // servicio:"",
          descripcion:"",
          fecha:"",
          precio:"",
          iva:"",
          total:"",
          renovable:""
             }
     })

     const [clients, setClients]= useState([]);

     useEffect(() => {
      async function fetchClients() {
        const response = await fetch('http://localhost:1337/api/clientes');
        const json = await response.json();
        const data= json.data;
        console.log("DATA",data);
        setClients(data);
      }
      fetchClients();
    }, []);

     function handleChange(e) {
      setInput({
        ...input,
        data: {
          ...input.data,
          [e.target.name]: e.target.value
        }
      });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
      console.log(input)
      alert("Servicio recurrente creado satisfactoriamente")
      setInput({
          data:{
            cliente:"",
            // servicio:"",
            descripcion:"",
            fecha:"",
            precio:"",
            iva:"",
            total:"",
            renovable:""
               }
       })

     try {
        const response = await fetch('http://localhost:1337/api/recurrentes/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(input)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    


  return (
    <div>

<div  className='flex w-full  h-full bottom-0 ' >

<div className=' pb-0 '>
            <img src="clientes.jpg" alt="backgroud" className='h-full w-full fixed bg-cover' />
            </div>

            <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden bg-no-repeat bg-center bg-home-responsive  w-full  mt-20 mb-20 absolute'>

            <div className="mx-auto  bg-opacity-75 text-center rounded-lg max-w-screen-xl px-4 py-10 lg:items-center pb-40">

              

<h1  className='text-3xl font-extrabold sm:text-5xl text-white'>Crear Nuevo Servicio Recurrente</h1>

<form className='bg-zinc-800  p-5 mt-10 rounded-xl mx-auto w-full max-w-[550px] border-white border-0 shadow-sm shadow-white ' onSubmit={(e)=>handleSubmit(e)}>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Cliente:</label>
                   <select 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                    value= {input.cliente}
                    name= "cliente"
                    onChange={(e)=> handleChange(e)}
                    >
                      <option value="">Selecciona un cliente</option>
                      {clients.map((client) => (
                        <option key={client.id} value={client.id}>
                        {client.attributes.nombre}
                        </option>
                      ))}
                  </select>  
                </div>

              
                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Descripcion:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                     value= {input.descripcion}
                     name= "descripcion"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Fecha:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="date"
                     value= {input.fecha}
                     name= "fecha"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Precio:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="num" 
                     value= {input.precio}
                     name= "precio"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>
                
              <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>IVA:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="num" 
                     value= {input.iva}
                     name= "iva"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200' >Total:</label>
                   <input 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="num" 
                     value= {input.total}
                     name= "total"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium text-gray-200'>Renovable:</label>
                  <select 
                   className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    value= {input.renovable}
                    name= "renovable"
                    onChange={(e)=> handleChange(e)}
                    >
                    <option value='true'>True</option>
                    <option value='false'>False</option>

                  </select>
                    
                </div>
              

               
        <div className=' pt-3 pb-3'>   
      <div className="text-4xl bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline "
        type="submit" >
      <button type="submit">Crear Servicio Recurrente</button>
      </div>
      </div> 
    </form>

    <div className='pt-10'> 
        
    <Link href= '/'>
      <button className="text-gray-50  bg-blue-900 px-10 py-1 hover:bg-blue-700 rounded-full">Home</button>
      
      </Link>
</div>

    </div>

    </div>

    </div>

    </div>
    
  )
}
