import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import IndexPage from './pages/Index';
import Services from './pages/Services';
import ServiceDetailPage from './pages/ServiceDetailPage';
import Cases from './pages/Cases';
import About from './pages/About';
import Tariffs from './pages/Tariffs';
import Article from './pages/Article';
import Contacts from './pages/Contacts';
import Privacy from './pages/Privacy';
import NotFound from './pages/NotFound';
import KnowledgeBase from './pages/KnowledgeBase';
import Marketplace from './pages/Marketplace';
import Prices from './pages/Prices';
import Segments from './pages/Segments';
import SegmentPage from './pages/SegmentPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />

        {/* Services */}
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="uslugi" element={<Services />} />
        <Route path="uslugi/:slug" element={<ServiceDetailPage />} />

        {/* Company & Info */}
        <Route path="about" element={<About />} />
        <Route path="o-nas" element={<About />} />
        <Route path="kachestvo" element={<About />} />

        {/* Cases */}
        <Route path="cases" element={<Cases />} />
        <Route path="kejsy" element={<Cases />} />

        {/* Pricing */}
        <Route path="tariffs" element={<Tariffs />} />
        <Route path="tarify" element={<Tariffs />} />
        <Route path="ceny" element={<Prices />} />

        {/* Knowledge Base & Blog */}
        <Route path="blog/:id" element={<Article />} />
        <Route path="baza-znaniy" element={<KnowledgeBase />} />
        <Route path="baza-znaniy/:slug" element={<Article />} />

        {/* Marketplace */}
        <Route path="marketplace" element={<Marketplace />} />

        {/* Segments (For Whom) */}
        <Route path="dlya-kogo" element={<Segments />} />
        <Route path="dlya-kogo/:slug" element={<SegmentPage />} />
        <Route path="komu/:slug" element={<SegmentPage />} />

        {/* Other */}
        <Route path="kontakty" element={<Contacts />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
