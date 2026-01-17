import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Packages } from './pages/Packages';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { PageType } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>(PageType.HOME);

  const renderPage = () => {
    switch (currentPage) {
      case PageType.HOME:
        return <Home navigate={setCurrentPage} />;
      case PageType.PACKAGES:
        return <Packages navigate={setCurrentPage} />;
      case PageType.SERVICES:
        return <Services navigate={setCurrentPage} />;
      case PageType.CONTACT:
        return <Contact />;
      default:
        return <Home navigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} navigate={setCurrentPage} />
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>
      <Footer navigate={setCurrentPage} />
    </div>
  );
}