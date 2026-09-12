import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16">

          <div className="flex items-center gap-3">
            <button
              className="btn btn-ghost btn-sm lg:hidden"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <a href="#" className="hidden lg:flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}logo-text.png`}
                alt="Dev Stack"
                className="h-8"
              />
            </a>
          </div>

          <div className="flex justify-center">
            <a href="#" className="lg:hidden flex items-center">
              <img
                src={`${import.meta.env.BASE_URL}logo-text.png`}
                alt="Dev Stack"
                className="h-8"
              />
            </a>
            <div className="hidden lg:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-medium text-base-content/70 hover:text-base-content transition"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

        
          <div className="flex items-center justify-end gap-2">
            <button className="btn btn-ghost btn-sm hidden sm:inline-flex">
              Sign In
            </button>
            <button className="btn btn-sm gradient-brand text-white border-0 rounded-full px-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {open && (
        <ul className="lg:hidden menu bg-base-100 border-t border-base-200 px-4 py-3">
          {links.map((link) => (
            <li key={link}>
              <a href="#" className="text-sm">
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}