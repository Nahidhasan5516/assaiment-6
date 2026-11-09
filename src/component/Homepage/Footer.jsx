import React from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0b0d10] text-white border-t border-[#1c1e22]">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="FITLOG Logo" width={18} height={18} />

          <span className="text-sm font-bold">FITLOG</span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 text-center">
          © 2026 FitLog — Your workout library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
