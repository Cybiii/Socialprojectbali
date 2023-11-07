import React from 'react';
import '../../App.css'; 

export default function Donate() {
  return (
    <div className="bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">Help Us Achieve Our Goals!</h1>
        <div className="bg-purple-200 text-indigo-900 p-4 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold mb-2">Alternative ways to donate:</h2>
          <div className="grid gap-4 text-black text-2xl">
            <p className="bg-white p-2 rounded">Venmo: Lorem ipsum</p>
            <p className="bg-white p-2 rounded">Zelle: 1 123 456 7890</p>
            <p className="bg-white p-2 rounded">Bank Number: 1234567890</p>
            <p className="bg-white p-2 rounded">Paypal: example@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
