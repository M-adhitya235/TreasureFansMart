import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

<<<<<<< HEAD
=======

>>>>>>> f3e9945 (tfm progress)
const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="mx-auto md:flex justify-between items-center">
        {/* Logo
        <div className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="h-12 w-auto"
          />
        </div> */}

        {/* Navigation */}
        <hr className="border-t-2 md:border-t-0 my-4" />
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-lg">Support</h2>
        </div>

        {/* Contacts dan Social Media */}
        <hr className="border-t-2 md:border-t-0 my-4" />

        <div className="flex flex-col space-y-4">
          {/* Contacts */}
          <div>
            <h2 className="text-lg font-semibold">Contacts</h2>
          </div>

          {/* Address */}
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="inline-block mr-2" />
            <p>Balikpapan, Kalimantan Timur, Indonesia</p>
          </div>

          {/* Phone */}
          <div className="flex items-center mb-2">
            <FaPhone className="inline-block mr-2" />
            <p>+62 888 333 445</p>
          </div>

          {/* Email */}
          <div className="flex items-center mb-2">
            <FaEnvelope className="inline-block mr-2" />
            <p>tfm@gmail.com</p>
          </div>
        </div>

        <hr className="border-t-2 md:border-t-0 my-4" />

        {/* Social Media */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold mb-2 text-center">Social Media</h2>
          <div className="flex items-center justify-center">
            <FaFacebook className="inline-block mr-2" />
            <FaTwitter className="inline-block mr-2" />
            <FaLinkedin className="inline-block mr-2" />
            <FaPinterest className="inline-block mr-2" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
