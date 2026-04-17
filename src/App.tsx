import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import CaseStudies from './pages/CaseStudies';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          {/* Fallback to Home for now */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
      <Analytics />
    </Router>
  );
}

