async function cargarCostosServicioCliente(servicios) {
  try {
    const clientes = await obtenerClientesRegistrados();

    servicios.filter(servicio => servicio.renovable === true)
      .forEach(async servicio => {
        const cliente = clientes.find(cliente => cliente.id === servicio.clienteId);
        if (cliente) {
          const cuenta = await obtenerCuentaCliente(cliente.id);
          if (cuenta) {
            const costoActualizado = cuenta.costo + servicio.total;
            await actualizarCuentaCliente(cliente.id, costoActualizado);
          } else {
            await crearCuentaCliente(cliente.id, servicio.total);
          }
        }
      });
  } catch (error) {
    console.log(error);
  }
}

async function obtenerServiciosRecurrentes() {
  try {
    const response = await fetch('http://localhost:1337/api/recurrentes/');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function obtenerClientesRegistrados() {
  try {
    const response = await fetch('http://localhost:1337/api/clientes/');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function obtenerCuentaCliente(clienteId) {
  try {
    const response = await fetch(`http://localhost:1337/api/cuenta/${clienteId}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

async function crearCuentaCliente(clienteId, costo) {
  try {
    const response = await fetch('http://localhost:1337/api/cuenta/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        clienteId,
        costo
      })
    });
    if (!response.ok) {
      console.log(`Error al crear cuenta para cliente ${clienteId}`);
    }
  } catch (error) {
    console.log(error);
  }
}

async function actualizarCuentaCliente(clienteId, costo) {
  try {
    const response = await fetch(`http://localhost:1337/api/cuenta/${clienteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        costo
      })
    });
    if (!response.ok) {
      console.log(`Error al actualizar cuenta para cliente ${clienteId}`);
    }
  } catch (error) {
    console.log(error);
  }
}

async function cargarCostosServiciosRenovablesAClientes() {
  const servicios = await obtenerServiciosRecurrentes();
  await cargarCostosServicioCliente(servicios);
}

  

        
  
  