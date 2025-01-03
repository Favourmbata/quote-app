
import React from 'react';
import SideBar from "../features/sidebar";
import Constant from '../reuseable/constant';
import leadIcon from "../features/assets/Leading media.png";
import check from "../features/assets/Outer Rectangle.png";
import { FaTimes } from 'react-icons/fa';
import client from "../features/assets/west.png"

const QuoteDetails = () => {
  const itemsData = [
    {
      name: "Oxygen concentrator",
      variants: "Blue",
      quantity: "100 pieces",
      price: "$200.00",
      amount: "$2,000.00",
      expectedDeliveryDate: "2024-08-07",
      icon2: check,
      icon: leadIcon
    },
    {
      name: "Mechanical ventilator",
      variants: "NIL",
      quantity: "45 Kg",
      price: "$350.00",
      amount: "$2,500.00",
      expectedDeliveryDate: "2024-08-07",
      icon2: check,
      icon: leadIcon
    },
    {
      name: "Patient Monitor",
      variants: "Blue",
      quantity: "30 Units",
      price: "$300.00",
      amount: "$1,500.00",
      expectedDeliveryDate: "2024-08-07",
      icon2: check,
      icon: leadIcon
    },
    {
      name: "Mechanical ventilator",
      variants: "Blue",
      quantity: "35 Units",
      price: "$200.00",
      amount: "$1,500.00",
      expectedDeliveryDate: "2024-08-07",
      icon2: check,
      icon: leadIcon
    },
  ];

  const calculateSubTotal = () => {
    return itemsData.reduce((acc, item) => acc + parseFloat(item.amount.replace('$', '')), 0);
  };

  const calculateTotal = () => {
    return calculateSubTotal();
  };

  return (
    <div className="flex flex-col lg:flex-row"> 
      <div className="w-full lg:w-1/4 mb-6 lg:mb-0"> 
        <SideBar />
      </div>

      <div className="w-full lg:w-3/4 px-4 lg:px-10">
        <div>
          <Constant />
        </div>

      
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 max-w-4xl mx-auto">
          <div className="mb-4 md:mb-0">
            <h1 className="text-sm font-bold text-black">Quote Details</h1>
            <p className="text-[#667185]">Created on Wed, 12th June 2022, 08:00am</p>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-6 py-2 md:py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
              Respond
            </button>
            <button className="bg-red-500 text-white px-6 py-2 md:py-3 rounded-lg shadow-lg flex items-center hover:bg-red-600 transition">
              <FaTimes className="mr-2 mt-1" /> Reject
            </button>
          </div>
        </div>
        
       
        <div className="p-4 md:p-6 mb-4 border border-gray-200 rounded-lg mt-5">
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <h2 className="text-lg font-bold">Quote Information</h2>
            <p className="text-[#667185] text-sm mt-2 md:mt-0">Expected delivery date: 2024-12-02</p>
          </div>

          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Title</p>
                <p className="mt-2">RFQ No</p>
              </div>
              <div>
                <p className="text-lg text-[#101928]">Request for Equipments</p>
                <p className="mt-2">#RQ 01234</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Requestor</p>
                <p className="text-sm text-gray-500 mt-5">Status</p>
                <p className="text-sm text-gray-500 mt-5">Department</p>
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <div className="rounded-xl bg-[#ffece5] w-10 h-8 flex items-center justify-center">
                    <p className="text-center">JD</p>
                  </div>
                  <span>Jane Doe <span className="text-[#D9D9D9]">• Head Nurse, Paediatrics</span></span>
                </div>
                <div className="rounded-xl w-20 bg-[#FFECE5] mt-2">
                  <p className="mt-2 text-[#F56630]">Awaiting</p>
                </div>
                <p className="mt-4">Maternity</p>
              </div>
            </div>

            
            <div className="border w-full md:w-1/3 rounded p-4">
              <img src={client} alt="Client" />
              <h1 className="text-lg font-bold mt-4">Client</h1>
              <div className="flex items-center space-x-2 mt-2">
                <div className="rounded-xl bg-[#ffece5] w-10 h-8 flex items-center justify-center">
                  <p className="text-center">W</p>
                </div>
                <span>WestEnd Hospital</span>
              </div>
              <p className="mt-2 text-sm text-[#667185]">Clear street</p>
            </div>
          </div>
        </div>

      
        <div className="mb-4 border border-gray-200 rounded-lg p-4 md:p-6 overflow-x-auto">
          <h3 className="text-lg font-bold mb-4">Item(s)</h3>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F9FAFB] border-b">
                <th className="py-2 px-4 text-[#344054]">Items</th>
                <th className="py-2 px-4 text-[#344054]">Variants</th>
                <th className="py-2 px-4 text-[#344054]">Quantity</th>
                <th className="py-2 px-4 text-[#344054]">Price</th>
                <th className="py-2 px-4 text-[#344054]">Amount</th>
                <th className="py-2 px-4 text-[#344054]">Expected Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              {itemsData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4 flex items-center">
                    <div className="flex items-center space-x-2">
                      <img src={item.icon2} alt="item" className="w-7 h-7" />
                      <img src={item.icon} alt="item" className="w-8 h-6 rounded-full mr-2" />
                    </div>
                    <div className='ml-3'>
                      <p>{item.name} </p>
                      <p className="text-gray-500">#28373</p>
                    </div>
                  </td>
                  <td className="py-2 px-4">{item.variants}</td>
                  <td className="py-2 px-4">{item.quantity}</td>
                  <td className="py-2 px-4">{item.price}</td>
                  <td className="py-2 px-4">{item.amount}</td>
                  <td className="py-2 px-4">{item.expectedDeliveryDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        
      
        <div className="flex mt-4 space-x-6">
           <div className="text-left ml-[67%] ">
            <p>Sub Total</p>
             <p>Total</p>
           </div>
           <div className="text-left ml-[78%]">
             <p className="font-bold">${calculateSubTotal().toFixed(2)}</p>
             <p className="font-bold">${calculateTotal().toFixed(2)}</p>
           </div>
         </div>
      </div>
      </div>
    
  );
};

export default QuoteDetails;
