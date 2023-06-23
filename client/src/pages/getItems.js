import React, { useEffect, useState } from 'react';
const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPrice, setNewPrice] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [updatedName, setUpdatedName] = useState('');
  const [updatedPrice, setUpdatedPrice] = useState('');

  useEffect(() => {
    fetch('http://localhost:1337/api/items/')
      .then(response => response.json())
      .then(data => setItems(data.data))
      .catch(error => {
        console.error('Error al obtener la lista de elementos:', error);
      });
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

  const updateItem = (itemId) => {
    const updatedItem = {
      nombre: updatedName,
      precio: updatedPrice,
    };
    
    fetch(`http://localhost:1337/api/items/${itemId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ attributes: updatedItem }),
    })
      .then(response => response.json())
      .then(() => {
        setItems(prevItems =>
          prevItems.map(item => {
            if (item.id === itemId) {
              return {
                id: item.id,
                attributes: updatedItem,
              };
            }
            return item;
          })
        );
        setSelectedItemId(null);
        setUpdatedName('');
        setUpdatedPrice('');
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

  const handleEditClick = (itemId, currentName, currentPrice) => {
    setSelectedItemId(itemId);
    setUpdatedName(currentName);
    setUpdatedPrice(currentPrice);
  };
  
  const handleSaveClick = () => {
    if (newName && newPrice) {
      const newItem = {
        nombre: newName,
        precio: newPrice,
      };
      fetch('http://localhost:1337/api/items/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ attributes: newItem }),
      })
        .then(response => response.json())
        .then(createdItem => {
          setItems(prevItems => [...prevItems, createdItem]);
          setNewName('');
          setNewPrice('');
        })
        .catch(error => {
          console.error('Error al crear el elemento:', error);
        });
    }
  };
  
  return (
    <div>
      <div className="flex items-center justify-center rounded w-full shadow-lg leading-normal bg-gray-200">
        <a className="p-5 border-b">
          <p className="font-bold text-lg mb-1 text-black">Lista De Items</p>
        </a>
      </div>
  
      <div className="overflow-y h-[555px]">
        <div className="font-sans flex items-center justify-center bg-blue-darker w-full py-8">
          <div className="overflow-hidden bg-white rounded max-w-4xl w-full shadow-lg leading-normal">
            {items.map(item => (
              <div key={item.id}>
                {selectedItemId === item.id ? (
                  <div>
                    <input
                      type="text"
                      value={updatedName}
                      onChange={(event) => setUpdatedName(event.target.value)}
                    />
                    <input
                      type="text"
                      value={updatedPrice}
                      onChange={(event) => setUpdatedPrice(event.target.value)}
                    />
                    <button
                      className="text-base font-semibold text-gray-100 bg-indigo-800 h-full w-32 rounded-xl px-1 py-1 hover:bg-red-700 cursor-pointer"
                      onClick={() => updateItem(item.id)}
                    >
                      Guardar
                    </button>
                  </div>
                ) : (
                  <div className="block hover:bg-gray-50 p-4 border-b">
                    {item.attributes && (
                      <p className="font-bold text-lg mb-1 text-black">
                        {item.attributes.nombre}
                      </p>
                    )}
                    <p className="text-grey-darker mb-2">Id: {item.id}</p>
                    {item.attributes && (
                      <p className="text-grey-darker mb-2">
                        Precio: {item.attributes.precio}
                      </p>
                    )}
                    <div className="flex items-end justify-end">
                      <button
                        className="text-base font-semibold text-gray-100 bg-indigo-800 h-full w-32 rounded-xl px-1 py-1 hover:bg-red-700 cursor-pointer"
                        onClick={() => deleteItem(item.id)}
                      >
                        Eliminar
                      </button>
                      <button
                        className="text-base font-semibold text-gray-100 bg-indigo-800 h-full w-32 rounded-xl px-1 py-1 hover:bg-red-700 cursor-pointer"
                        onClick={() =>
                          handleEditClick(
                            item.id,
                            item.attributes.nombre,
                            item.attributes.precio
                          )
                        }
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div>
              <input
                type="text"
                value={newName}
                onChange={handleNameChange}
                placeholder="Nuevo nombre"
              />
              <input
                type="text"
                value={newPrice}
                onChange={handlePriceChange}
                placeholder="Nuevo precio"
              />
              <button
                className="text-base font-semibold text-gray-100 bg-indigo-800 h-full w-32 rounded-xl px-1 py-1 hover:bg-red-700 cursor-pointer"
                onClick={handleSaveClick}
                disabled={!newName || !newPrice}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;


