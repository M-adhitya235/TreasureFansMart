import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="mx-auto md:flex justify-between items-center">
        {/* Logo*/}
        <div className="flex flex-col items-center">
        <div className="ml-8">
        <h2 className="text-lg font-semibold">Treasure Fans Mart</h2>
          </div>
          <img
            src="/src/assets/tfmmm.png"
            alt="Logo"
            className="h-24 w-24 mt-2" 
          />
        </div>

        {/* Contacts */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold">Contacts</h2>

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

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-lg">Account</h2>
          <ul className="flex flex-col gap-2">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Login / Register</a></li>
            <li><a href="#">Cart</a></li>
            <li><a href="#">Wishlist</a></li>
            <li><a href="#">Shop</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-2">
          <h2 className="text-lg font-semibold items-center mb-2 mr-8 text-center">Social Media</h2>
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
