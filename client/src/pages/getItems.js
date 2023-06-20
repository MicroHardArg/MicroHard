import React, { useEffect, useState } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');


  useEffect(() => {
    fetch('http://localhost:1337/api/items/')
      .then(response => response.json())
      .then(data => setItems(data.data));
  }, []);


  const deleteItem = (itemId) => {
    fetch(`http://localhost:1337/api/items/${itemId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        setItems(prevItems => prevItems.filter(item => item.id !== itemId));
      })
      .catch(error => {
        console.error('Error al eliminar el elemento:', error);
      });
  };

  const updateItem = (itemId, updatedAttributes) => {
    fetch(`http://localhost:1337/api/items/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAttributes),
    })
      .then(response => response.json())
      .then(updatedItem => {
        setItems(prevItems => prevItems.map(item => item.id === itemId ? updatedItem : item));
      })
      .catch(error => {
        console.error('Error al actualizar el elemento:', error);
      });
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setNewPrice(event.target.value);
  };

  return (
          <div>
 
                  <div className="flex items-center justify-center rounded  w-full shadow-lg leading-normal bg-gray-200 ">

                  <a className="  p-5 border-b  ">

                  <p className="font-bold text-lg mb-1 text-black ">Lista De Items</p>

                  </a>

                  </div>

                

                <div className=' overflow-y h-[555px]'>
                  <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8 ">

                <div className="overflow-hidden bg-white rounded max-w-4xl w-full shadow-lg  leading-normal ">
                  
                {items.map(item => (
                  <div key={item.id}>
                    <a  class="block  hover:bg-gray-50 p-4  border-b">

                    {item.attributes && (
                        <p class="font-bold text-lg mb-1 text-black ">{item.attributes.nombre}</p>
                        )}
                        
                        <p class="text-grey-darker mb-2">Id: {item.id}</p>
                    {item.attributes && (
                        <p class="text-grey-darker mb-2">Precio: {item.attributes.precio}</p>
                        )}
                        <div className=' flex items-end justify-end'>
                    <button className="text-base font-semibold text-gray-100  bg-indigo-800 h-full w-32 rounded-xl px-1 py-1 hover:bg-red-700 cursor-pointer" onClick={() => deleteItem(item.id)}>Eliminar</button>
                    </div>
                    </a>

                        </div>
                      ))}
             
                
                </div>
                </div>
            </div>
       





    </div>
  );
};

export default ItemList;


