import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import { SiNvidia } from 'react-icons/si';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center text-white bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-transparent bg-clip-text">
          Certifications
        </h2>
        <div className="bg-gray-900 shadow-lg rounded-lg p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <FontAwesomeIcon icon={faAws} className="text-[#FF9900] text-7xl mb-6" />
              <p className="text-2xl font-bold text-white leading-tight">AWS Certified Solutions Architect (SAA-C03)</p>
            </div>
            <div className="text-center">
              <SiNvidia className="text-[#76B900] text-7xl mb-6 mx-auto" />
              <p className="text-2xl font-bold text-white leading-tight">NVIDIA-Certified Associate: Generative AI LLMs</p>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faAws} className="text-[#FF9900] text-7xl mb-6" />
              <p className="text-2xl font-bold text-white leading-tight">AWS Certified Cloud Practitioner (CLF-C02)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
