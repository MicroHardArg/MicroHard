import React, { useState } from 'react';
import Link from 'next/link';

export default function BudgetsCreate() {
  const [input, setInput] = useState({
    creationDate: '',
    item: '',
    description: '',
    unit: '',
    quantity: '',
    unitPrice: '',
    totalPrice: '',
    subTotal: '',
    iva: '',
    Total: '',
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postActivity(input));
    alert('Budget created!!!');
    setInput({
      creationDate: '',
      item: '',
      description: '',
      unit: '',
      quantity: '',
      unitPrice: '',
      totalPrice: '',
      subTotal: '',
      iva: '',
      total: '',
    });
  }

  return (
    <div className="home">
      <div className="derecha">
        <Link href="/home">
          <button className="color">Return</button>
        </Link>
      </div>
      <h1>Create Budget</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Item
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Unit
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Unit Price
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Total Price
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-8 py-20 text-center">
                <input
                  type="text"
                  value={input.item}
                  name="item"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center">
                <input
                  type="text"
                  value={input.description}
                  name="description"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center">
                <input
                  type="text"
                  value={input.unit}
                  name="unit"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center">
                <input
                  type="text"
                  value={input.quantity}
                  name="quantity"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center">
                <input
                  type="text"
                  value={input.unitPrice}
                  name="unitPrice"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center">
                <input
                  type="text"
                  value={input.totalPrice}
                  name="total"
                  onChange={handleChange}
                />
              </td> 
            </tr>
              </tbody>
              </table>
              </form>
              </div>
  )
}