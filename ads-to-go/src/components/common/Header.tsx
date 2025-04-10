import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { UserRole } from '../../types/user.types';

const Header = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Ads to Go
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>

            {isAuthenticated && user ? (
              <>
                {/* Admin Links */}
                {user.role === UserRole.ADMIN && (
                  <>
                    <Link to="/admin/dashboard" className="text-gray-600 hover:text-gray-900">
                      Dashboard
                    </Link>
                    <Link to="/admin/drivers" className="text-gray-600 hover:text-gray-900">
                      Manage Drivers
                    </Link>
                    <Link to="/admin/clients" className="text-gray-600 hover:text-gray-900">
                      Manage Clients
                    </Link>
                  </>
                )}

                {/* Client Links */}
                {user.role === UserRole.CLIENT && (
                  <>
                    <Link to="/client/dashboard" className="text-gray-600 hover:text-gray-900">
                      Dashboard
                    </Link>
                    <Link to="/client/revenue" className="text-gray-600 hover:text-gray-900">
                      Revenue
                    </Link>
                    <Link to="/client/drivers" className="text-gray-600 hover:text-gray-900">
                      My Drivers
                    </Link>
                  </>
                )}

                {/* Driver Links */}
                {user.role === UserRole.DRIVER && (
                  <>
                    <Link to="/driver/dashboard" className="text-gray-600 hover:text-gray-900">
                      Dashboard
                    </Link>
                    <Link to="/driver/ads" className="text-gray-600 hover:text-gray-900">
                      My Ads
                    </Link>
                    <Link to="/driver/hours" className="text-gray-600 hover:text-gray-900">
                      Travel Hours
                    </Link>
                  </>
                )}

                {/* User Menu */}
                <div className="relative group">
                  <button className="flex items-center text-gray-600 hover:text-gray-900">
                    <span className="mr-2">{user.name}</span>
                    <i className="fas fa-user-circle"></i>
                  </button>
                  <div className="absolute right-0 w-48 mt-2 py-2 bg-white rounded-lg shadow-xl hidden group-hover:block">
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      <i className="fas fa-sign-out-alt mr-2"></i>
                      Sign Out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="text-gray-600 hover:text-gray-900">
                  Sign In
                </Link>
                <Link to="/register" className="btn-primary">
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-600 hover:text-gray-900">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
