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

  const handleSubmit = async (event) => {
    event.preventDefault();
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



    try {
        const response = await fetch('https://star-link-back-end-production.up.railway.app/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(input)
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }


  }


  return (

    <div>

    <div  className='flex w-full  h-full bottom-0  '>

    <div className=' pb-0 '>
            <img src="presupuesto.jpg" alt="backgroud" className='h-full w-full fixed bg-cover' />
            </div>
            

            <div className='lg:bg-diagonal-section bg-home-bg overflow-hidden  bg-home-responsive  w-full  mt-24 mb-20 absolute '>

            <div className="  bg-opacity-75 text-center rounded-lg max-w-full first-letter:  py-10 lg:items-center pb-40">

     

            <h1  className='text-3xl font-extrabold sm:text-5xl text-white pb-10'>Create Budget</h1>

      <form onSubmit={handleSubmit}>
        
        <table className=' shadow-md shadow-gray-600 '>
          <thead className="text-xs text-white uppercase bg-stone-800 border-b border-b-gray-200 ">
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
              <th scope="col" className="px-6 py-3 text-center"></th>
              <th scope="col" className="px-6 py-3 text-center"></th>
              <th scope="col" className="px-6 py-3 text-center"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                <input
                class="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="text"
                  value={input.item}
                  name="item"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                <input
                class="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="text"
                  value={input.description}
                  name="description"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                <input
                class="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="text"
                  value={input.unit}
                  name="unit"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                <input
                class="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="text"
                  value={input.quantity}
                  name="quantity"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                <input
                class="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="text"
                  value={input.unitPrice}
                  name="unitPrice"
                  onChange={handleChange}
                />
              </td>
              <td className="px-8 py-20 text-center bg-stone-800 border-b border-b-gray-200">
                <input
                 class="w-full rounded-md border  border-[#fdfafa] bg-transparent py-3 px-6 text-base font-medium text-[#ffffff] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  type="text"
                  value={input.totalPrice}
                  name="total"
                  onChange={handleChange}
                />
              </td>
              <td className=" bg-stone-800 border-b border-b-gray-200"></td>
              <td className=" bg-stone-800 border-b border-b-gray-200"></td>
              <td className=" bg-stone-800 border-b border-b-gray-200"></td>
            </tr>
              </tbody>
              </table>
        <div className='pt-10 px-80'>      
      <div className="text-4xl bg-blue-900  hover:bg-blue-700 text-white font-bold py-2  rounded-full focus:outline-none focus:shadow-outline cursor-pointer"
    type="submit" >
      <button type="submit">Upload Budget</button>
      </div>
      </div>


              </form>
              <div className='pt-10'>

              <Link href= '/'>
      <button className="text-gray-50  bg-blue-900 px-10 py-1 hover:bg-blue-700 rounded-full">Return</button>
      
      </Link>
      </div>

      </div>
            </div>
              </div>
              </div>
  )
}