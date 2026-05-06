import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Catalog from './pages/Catalog';
import CatalogDetail from './pages/CatalogDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import CaseStudies from './pages/CaseStudies';
import OthmanCaseStudy from './pages/OthmanCaseStudy';
import ArticlePage from './pages/ArticlePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/catalog/:categoryId/:id" element={<CatalogDetail />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<ArticlePage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/othman-tours" element={<OthmanCaseStudy />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </Router>
  );
};

export default App;