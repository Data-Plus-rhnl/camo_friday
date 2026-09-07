import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import OurWork from './pages/OurWork';
import RideForMitch from './pages/RideForMitch';
import Scholarship from './pages/Scholarship';
import OurHandbook from './pages/OurHandbook';
import OurTeam from './pages/OurTeam';
import BecomeVolunteer from './pages/BecomeVolunteer';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

// Scroll to top on every navigation
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTopOnNavigate />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              {/* Primary Clean URLs */}
              <Route path="/" element={<Home />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/ride-for-mitch" element={<RideForMitch />} />
              <Route path="/scholarship" element={<Scholarship />} />
              <Route path="/our-handbook" element={<OurHandbook />} />
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/become-volunteer" element={<BecomeVolunteer />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />

              {/* Backward-Compatible .php Aliases & Redirects */}
              <Route path="/index.php" element={<Navigate to="/" replace />} />
              <Route path="/our_story.php" element={<Navigate to="/our-story" replace />} />
              <Route path="/our_work.php" element={<Navigate to="/our-work" replace />} />
              <Route path="/ride_for_mitch.php" element={<Navigate to="/ride-for-mitch" replace />} />
              <Route path="/scholarship.php" element={<Navigate to="/scholarship" replace />} />
              <Route path="/our_handbook.php" element={<Navigate to="/our-handbook" replace />} />
              <Route path="/our_team.php" element={<Navigate to="/our-team" replace />} />
              <Route path="/become_volunteer.php" element={<Navigate to="/become-volunteer" replace />} />
              <Route path="/contact.php" element={<Navigate to="/contact" replace />} />
              <Route path="/donate.php" element={<Navigate to="/donate" replace />} />
              <Route path="/shop.php" element={<Navigate to="/shop" replace />} />
              <Route path="/product_details.php" element={<Navigate to="/shop" replace />} />
              <Route path="/cart.php" element={<Navigate to="/cart" replace />} />
              <Route path="/checkout.php" element={<Navigate to="/checkout" replace />} />

              {/* Catch-all */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
