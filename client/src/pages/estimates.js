import React, {useState, useEffect} from 'react'
import Link from 'next/link'

export default function EstimateCreate(){
    
    const [input, setInput] = useState({
      data:{
        cliente:"",
        descripcion:"",
        horas:""
           }
     })

    const [selectedItems, setSelectedItems]= useState({
       id:"",
       item:"",
       cantidad:""
     });

    const [finalItems, setFinalItems]= useState([]);

    const [items, setItems]= useState([]);

    const [clients, setClients]= useState([]);

    useEffect(() => {
      async function fetchClients() {
        const response = await fetch('http://localhost:1337/api/clientes');
        const json = await response.json();
        const data= json.data;
        setClients(data);
      }
      fetchClients();
    }, []);

    useEffect(() => {
      async function fetchItems() {
        const response = await fetch('http://localhost:1337/api/items');
        const json = await response.json();
        const data= json.data;
        setItems(data);
      }
      fetchItems();
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

    function handleItemName(e) {
      var itemId = e.target.value;
      const selectedItem = items.find((item) => item.id == itemId);
      setSelectedItems({
        ...selectedItems,
        id: selectedItem.id,
        item: selectedItem.attributes.nombre,
      })
    }

    function handleItem(e) {
      setSelectedItems({
        ...selectedItems,
        [e.target.name]: e.target.value
      })
    }
    
    function addItem() {
      finalItems.push(selectedItems);
      setSelectedItems({
        id:"",
        item:"",
        cantidad:""
      })
      document.getElementsByName("item")[0].value = document.getElementsByName("item")[0].options[0].value;
    };

    function handleRemoveItem(id) {
      const list = finalItems.filter((item) => item.id !== id);
      setFinalItems(list);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(input)
      setInput({
        data:{
          cliente:"",
          descripcion:"",
          horas:""
           }
     })
      setSelectedItems({
        id:"",
        item:"",
        cantidad:""
      })
      setFinalItems([]);

     try {
        let body={
          data:{
            cliente: parseInt(input.data.cliente),
            descripcion: input.data.descripcion,
            horas: input.data.horas,
            items: finalItems
               }
        }
        console.log("BODY", body);
        const response = await fetch('http://localhost:1337/api/proyectos/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        if (!response.ok) {
          alert("No se pudo crear la Estimación");
          throw new Error('Network response was not ok');
        }
        alert("Estimación creada satisfactoriamente");
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
            <img src="clientes.jpg" alt="backgroud" className='h-full w-full bg-cover' />
            </div>

            <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden bg-no-repeat bg-center bg-home-responsive  w-full  mt-6 mb-20 absolute'>

            <div className="mx-auto  bg-opacity-75 text-center rounded-lg max-w-screen-xl px-4 py-10 lg:items-center pb-32">

              

<h1  className='text-xl font-extrabold sm:text-5xl text-white'>Crear Nueva Estimación</h1>

<form className='bg-zinc-800  p-5 mt-10 rounded-xl mx-auto w-full max-w-[550px] border-white border-0 shadow-sm shadow-white' onSubmit={(e)=>handleSubmit(e)}>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Cliente:</label>
                   <select 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                    value= {input.data.cliente}
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
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Descripción:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                     value= {input.data.descripcion}
                     name= "descripcion"
                 onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Items:</label>
                   <select 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    type="text" 
                    name= "item"
                    onChange={(e)=> handleItemName(e)}
                    >
                      <option value="">Selecciona un Item</option>
                      {items.map((item) => (
                        <option key={item.id} value={item.id}>
                        {item.attributes.nombre}
                        </option>
                      ))}
                  </select>  
                  <input
                  id='amount'
                  className="w-full rounded-md border  border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  value={selectedItems.cantidad}
                  name='cantidad'
                  placeholder='Cantidad'
                  onChange={(e)=> handleItem(e)}
                  />
                  <button
                  type='button'
                  onClick={(e)=> addItem(e)}>
                    Agregar
                  </button>

                  <ul>
                    {finalItems.map((item) => (
                      <li key={item.id}>
                        Item: {item.item}, Cantidad: {item.cantidad || 1}
                        <button 
                          onClick={() => handleRemoveItem(item.id)}>X
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='mb-3'>
                     <label className='mb-3 block text-base font-medium  text-gray-200'>Horas laboradas:</label>
                   <input 
                   className="w-full rounded-md border border-[#fcfcfc] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                     value= {input.data.horas}
                     name= "horas"
                     onChange={(e)=> handleChange(e)}
                    />
                    
                </div>

               
        <div className=' pt-3 pb-3'>   
      <div className="text-4xl bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline "
        type="submit" >
      <button type="submit">Crear Estimación</button>
      </div>
      </div> 
    </form>

    <div className='pt-8'> 
        
    <Link href= '/'>
      <button className="text-gray-50  bg-blue-900 px-10 py-1 hover:bg-blue-700 rounded-full">Volver</button>
      
      </Link>
</div>

    </div>

    </div>

    </div>

    </div>
    
  )
}