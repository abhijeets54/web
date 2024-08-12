import React from 'react';
import CountUp from 'react-countup';
import 'tailwindcss/tailwind.css';
import { FaUserAlt, FaSchool, FaHandsHelping, FaChild } from 'react-icons/fa';

const data = [
  {
    icon: <FaUserAlt className="h-12 w-12 text-white mb-2" />,
    number: 2000,
    label: 'Volunteers Engaged'
  },
  {
    icon: <FaSchool className="h-12 w-12 text-white mb-2" />,
    number: 10,
    label: 'Schools Adopted'
  },
  {
    icon: <FaHandsHelping className="h-12 w-12 text-white mb-2" />,
    number: 100,
    label: 'Mission Served'
  },
  {
    icon: <FaChild className="h-12 w-12 text-white mb-2" />,
    number: 5000,
    label: 'Students Impacted'
  }
];

function QuickNumbers() {
  return (
    <div className="bg-orange-500 py-8">
      <h2 className="text-center text-4xl font-bold text-white pt-5 mb-8">QUICK NUMBERS</h2>
      <div className="flex justify-center space-x-24 mt-5 pb-5">
        {data.map((item, index) => (
          <div key={index} className="text-center text-white pt-3">
            <div className="quicknumber flex flex-col justify-center align-items-center">
            <div className="icon mb-2">{item.icon}</div>
            <h3 className="text-4xl font-bold">
              <CountUp end={item.number} duration={7} />
            </h3>
            <p className="mt-2 text-xl">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickNumbers;
