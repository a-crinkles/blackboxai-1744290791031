import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handleRegisterVehicle = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/driver/register' } });
    } else {
      navigate('/driver/register');
    }
  };

  const handleBusinessInquiry = () => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: '/client/inquiry' } });
    } else {
      navigate('/client/inquiry');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-600 h-[600px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-6">
              Ads to Go: Your Mobile Advertising Solution
            </h1>
            <p className="text-xl mb-8">
              Transform your vehicle into a revenue stream. Join our network of drivers
              and start earning through mobile advertising.
            </p>
            <div className="space-x-4">
              <button
                onClick={handleRegisterVehicle}
                className="btn-primary"
              >
                Register Your Vehicle
              </button>
              <button
                onClick={handleBusinessInquiry}
                className="btn-secondary bg-white text-blue-600 hover:bg-gray-100"
              >
                Business Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Ads to Go?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-car"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Vehicle Types</h3>
              <p className="text-gray-600">
                Cars, E-bikes, Jeeps, or Buses - we accommodate various vehicle types
                for maximum advertising reach.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-ad"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Ad Options</h3>
              <p className="text-gray-600">
                Choose between vinyl wraps or LCD displays to showcase advertisements
                effectively.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-blue-600 text-4xl mb-4">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Revenue Tracking</h3>
              <p className="text-gray-600">
                Real-time tracking of earnings and comprehensive analytics for both
                drivers and businesses.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About Ads to Go</h2>
            <p className="text-gray-600 mb-8">
              Ads to Go is revolutionizing outdoor advertising by connecting businesses
              with a network of mobile advertisers. Our platform makes it easy for
              vehicle owners to earn extra income while helping businesses increase
              their visibility across the city.
            </p>
            <button
              onClick={handleBusinessInquiry}
              className="btn-primary"
            >
              Start Advertising Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
