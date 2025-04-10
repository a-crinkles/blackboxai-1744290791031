import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="text-blue-600 text-6xl mb-4">
          <i className="fas fa-map-signs"></i>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="btn-primary inline-flex items-center"
        >
          <i className="fas fa-home mr-2"></i>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
