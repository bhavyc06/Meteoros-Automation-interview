import { useState, useEffect } from 'react';
import { Routes, Route }       from 'react-router-dom';
import Header                  from './components/Header';
import Footer                  from './components/Footer';
import ModalForm               from './components/ModalForm';
import Notification            from './components/Notification';
import { NotificationProvider } from './context/NotificationContext';
import Home    from './pages/Home';
import About   from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  // open the modal the very first time we mount
  const [showModal, setShowModal] = useState(true);

  // optional: only show once per browser session
  useEffect(() => {
    if (sessionStorage.getItem('lead-captured')) setShowModal(false);
  }, []);

  const closeModal = () => {
    sessionStorage.setItem('lead-captured', 'true');
    setShowModal(false);
  };

  return (
    <NotificationProvider>
      <Header openModal={() => setShowModal(true)} />
      {showModal && <ModalForm close={closeModal} />}
      <main className="min-h-[calc(100vh-160px)]">
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Notification />
    </NotificationProvider>
  );
}
