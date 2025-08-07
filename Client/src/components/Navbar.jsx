import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import ModalForm from './ModalForm';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/90 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <h1 className="text-2xl font-bold text-primary-600">MyWebApp</h1>

        <nav className="hidden gap-8 md:flex">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? 'text-primary-600'
                    : 'text-neutral-600 hover:text-primary-600'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen(true)}
          className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400"
        >
          Contact Us
        </button>

        {open && <ModalForm close={() => setOpen(false)} />}
      </div>
    </header>
  );
}
