import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import { useAuth } from './hooks/useAuth';
import Home from './pages/Home';
import AdventureSports from './pages/AdventureSports';
import YogaRetreats from './pages/YogaRetreats';
import Packages from './components/Packages';
import Stays from './pages/Stays';
import Transportation from './pages/Transportation';
import Camping from './pages/Camping';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/" 
          element={
            <>
              <Navbar />
              <Home />
            </>
          } 
        />
        <Route 
          path="/adventure" 
          element={
            <>
              <Navbar />
              <AdventureSports />
            </>
          } 
        />
        <Route 
          path="/yoga" 
          element={
            <>
              <Navbar />
              <YogaRetreats />
            </>
          } 
        />
        <Route 
          path="/packages" 
          element={
            <>
              <Navbar />
              <Packages />
            </>
          } 
        />
        <Route 
          path="/stays" 
          element={
            <>
              <Navbar />
              <Stays />
            </>
          } 
        />
        <Route 
          path="/transport" 
          element={
            <>
              <Navbar />
              <Transportation />
            </>
          } 
        />
        <Route 
          path="/camping" 
          element={
            <>
              <Navbar />
              <Camping />
            </>
          } 
        />
        <Route 
          path="/gallery" 
          element={
            <>
              <Navbar />
              <Gallery />
            </>
          } 
        />
        <Route 
          path="/contact" 
          element={
            <>
              <Navbar />
              <Contact />
            </>
          } 
        />
        <Route 
          path="/blogs/*" 
          element={
            <>
              <Navbar />
              <Blogs />
            </>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;