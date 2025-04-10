import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ads to Go</h3>
            <p className="text-gray-400 mb-4">
              Transforming vehicles into mobile advertising platforms, connecting 
              businesses with their audience across the city.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white">
                  Sign In
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/driver/register" className="text-gray-400 hover:text-white">
                  Driver Registration
                </Link>
              </li>
              <li>
                <Link to="/client/register" className="text-gray-400 hover:text-white">
                  Business Registration
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Advertising Options
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Campaign Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <i className="fas fa-map-marker-alt w-6"></i>
                123 Ad Street, Marketing City
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-phone w-6"></i>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-envelope w-6"></i>
                support@adstogo.com
              </li>
              <li className="flex items-center text-gray-400">
                <i className="fas fa-clock w-6"></i>
                Mon - Fri: 9:00 AM - 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ads to Go. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
