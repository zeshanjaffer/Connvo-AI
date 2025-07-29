'use client';

import { FiPhoneCall } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import Button from './Button';

const MobileStickyButton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Button
        href="tel:+1234567890"
        variant="secondary"
        size="lg"
        className="flex items-center gap-2 shadow-2xl animate-bounce bg-gradient-accent hover:bg-[#D3AF37] text-[#00809D] font-bold"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19c-.54 0-.99.45-.99.99 0 9.36 7.6 16.96 16.96 16.96.54 0 .99-.45.99-.99v-3.5c0-.54-.45-.99-.99-.99z"/>
        </svg>
        Call Now
      </Button>
    </div>
  );
};

export default MobileStickyButton; 