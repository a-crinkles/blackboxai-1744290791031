import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/common/Layout';
import ProtectedRoute from './components/common/ProtectedRoute';
import { UserRole } from './types/user.types';

// Public Pages
import Home from './pages/public/Home';
import About from './pages/public/About';
import NotFound from './pages/public/NotFound';

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes - To be implemented */}
            {/* Admin Routes */}
            <Route
              path="/admin/*"
              element={
                <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
                  <div>Admin Dashboard (To be implemented)</div>
                </ProtectedRoute>
              }
            />

            {/* Client Routes */}
            <Route
              path="/client/*"
              element={
                <ProtectedRoute allowedRoles={[UserRole.CLIENT]}>
                  <div>Client Dashboard (To be implemented)</div>
                </ProtectedRoute>
              }
            />

            {/* Driver Routes */}
            <Route
              path="/driver/*"
              element={
                <ProtectedRoute allowedRoles={[UserRole.DRIVER]}>
                  <div>Driver Dashboard (To be implemented)</div>
                </ProtectedRoute>
              }
            />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
};

export default App;
