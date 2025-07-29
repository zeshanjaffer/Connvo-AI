'use client';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Accordion = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="mb-4 border-2 border-[#00809D]/20 rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <button
        className="w-full flex justify-between items-center px-6 py-4 font-semibold bg-gradient-to-r from-[#00809D] to-[#006d85] hover:from-[#006d85] hover:to-[#00809D] text-white transition-all duration-200 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="text-left">{title}</span>
        <FiChevronDown className={`ml-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
      </button>
      <div
        className={`px-6 py-4 bg-white transition-all duration-300 text-[#00809D]/80 ${open ? 'block' : 'hidden'}`}
      >
        <p className="leading-relaxed">{children}</p>
      </div>
    </div>
  );
};

export default Accordion;
