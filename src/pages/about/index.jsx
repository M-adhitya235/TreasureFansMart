import React from 'react';
import { FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import profile1 from '../../assets/adit.jpg';
import profile2 from '../../assets/andin.jpg';
import profile3 from '../../assets/raihan.png';
import profile4 from '../../assets/cynthia.jpg';
import profile5 from '../../assets/manahati.jpg';
import profile6 from '../../assets/yossi.jpg';

function About() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-wrap mt-8">
        <div className="grid grid-cols-3 gap-4">
          <ProfileBox 
            image={profile1} 
            name="Muhammad Adhitya" 
            jobdest="Developer"
            linkedin="https://www.linkedin.com/in/adhitya"
            instagram="https://www.instagram.com/m._.adhitya"
            whatsapp="+6285246958010"
          />
          <ProfileBox 
            image={profile2} 
            name="Adinia Amaliah" 
            jobdest="Designer"
            linkedin="https://www.linkedin.com/in/andin"
            instagram="https://www.instagram.com/adiniaamaliah"
            whatsapp="+6285705426811"
          />
          <ProfileBox 
            image={profile3} 
            name="Raihan Ramadhani" 
            jobdest="Engineer"
            linkedin="https://www.linkedin.com/in/raihan"
            instagram="https://www.instagram.com/raihan1r_"
            whatsapp="+6281237493533"
          />
          <ProfileBox 
            image={profile4} 
            name="Cynthia Putri Siregar" 
            jobdest="Manager"
            linkedin="https://www.linkedin.com/in/cynthia"
            instagram="https://www.instagram.com/cynthiaps._"
            whatsapp="+6281325946952"
          />
          <ProfileBox 
            image={profile5} 
            name="Manahati Lombu" 
            jobdest="Artist"
            linkedin="https://www.linkedin.com/in/manahati"
            instagram="https://www.instagram.com/manahati_lombu"
            whatsapp="+6282364402436"
          />
          <ProfileBox 
            image={profile6} 
            name="Yossi Ezra Afriani" 
            jobdest="Analyst"
            linkedin="https://www.linkedin.com/in/yossi-ezra-afriani-880865277"
            instagram="https://www.instagram.com/ysszr_"
            whatsapp="+6282358773432"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

function ProfileBox({ image, name, jobdest, linkedin, instagram, whatsapp }) {
  const openLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <div className="m-4 bg-white rounded-lg shadow-lg p-4">
      <img src={image} alt={name} className="object-cover w-32 h-32 rounded-full mx-auto" />
      <p className="text-center mt-2">{name}</p>
      <p className="text-center mt-1 text-gray-600">{jobdest}</p>
      <div className="flex justify-center mt-2 space-x-4">
        <FaLinkedin onClick={() => openLink(linkedin)} className="text-blue-600 cursor-pointer" />
        <FaInstagram onClick={() => openLink(instagram)} className="text-pink-600 cursor-pointer" />
        <FaWhatsapp onClick={() => openLink(`https://wa.me/${whatsapp}`)} className="text-green-600 cursor-pointer" />
      </div>
    </div>
  );
}

export default About;