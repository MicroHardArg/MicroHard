import { useState } from 'react';
import Link from 'next/link';
export const Tabs = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    onTabChange(index);
  };

  return (
    <div className='py-10 justify-center px-'>
 <Link href="/FiltroClientes">
  <button className="text-gray-50 text-2xl ml-2 flex justify-center bg-blue-900 px-10 py-1 hover:bg-blue-700 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7  mr-3" fill="currentColor" viewBox="0 0 448 512">
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
    </svg>
    Volver a Filtro de Clientes 
  </button>
</Link>



      <div className="flex border-b border-gray-200 py-10">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              activeTab === index
                ? 'bg-gray-500 text-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            } py-3 px-9 font-medium rounded-md `}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="mt-6  ">{tabs[activeTab].content}</div>
    </div>
  );
};
export default Tabs;