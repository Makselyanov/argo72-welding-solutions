import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import Cases from '@/pages/Cases';
import About from '@/pages/About';
import Tariffs from '@/pages/Tariffs';
import Article from '@/pages/Article';
import Contacts from '@/pages/Contacts';
import Privacy from '@/pages/Privacy';
import NotFound from '@/pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:id" element={<ServiceDetailPage />} />
        <Route path="cases" element={<Cases />} />
        <Route path="about" element={<About />} />
        <Route path="tariffs" element={<Tariffs />} />
        <Route path="blog/:id" element={<Article />} />
        <Route path="kontakty" element={<Contacts />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
