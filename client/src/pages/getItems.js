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
 <div>
      <h1 className=' text-xl pl-52 pb-8'>Lista de Items</h1>
      </div> 
<ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">

   <li className="pb-3 sm:pb-4">

      <div className="flex items-center space-x-4">

         <div className="flex-shrink-0 pl-5">

            <img className="w-20 h-20 rounded-full" src="/vector Herramientas.jpg" alt="image"/>

         </div>

         <div class="flex-1 min-w-0 pl-8">

            <div>
              
            {items.map(item => (
          <li key={item.id}>
            <h2 className="text-sm font-medium text-gray-900 truncate dark:text-white">Id: {item.id}</h2>

            {item.attributes && (
              <div className="text-sm text-gray-500 truncate dark:text-gray-400" >
                <h2>Nombre: {item.attributes.nombre}</h2>
                <p>Precio: {item.attributes.precio}</p>
              </div>
            )}
          <div className="inline-flex items-center  pl-72">
            <button className=" text-base font-semibold text-gray-900 dark:text-white" onClick={() => deleteItem(item.id)}>Eliminar</button>
            </div>
            
          </li>
        ))}
            
            </div>

         </div>

      </div>

   </li>
   
</ul>
            





    </div>
  );
};

export default ItemList;


