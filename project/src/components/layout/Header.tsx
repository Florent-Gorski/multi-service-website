import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Briefcase } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `font-medium transition-colors duration-200 ${
      isActive
        ? 'text-primary-600'
        : 'text-gray-700 hover:text-primary-600'
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <Briefcase className="h-8 w-8 text-primary-600" />
          <span className="text-xl font-display font-semibold">Rénov' Lausanne</span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={navLinkClasses} end>
            Accueil
          </NavLink>
          <NavLink to="/services" className={navLinkClasses}>
            Services
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            À Propos
          </NavLink>
          <NavLink to="/blog" className={navLinkClasses}>
            Blog
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
        </nav>

        <Link to="/contact" className="hidden md:block btn btn-primary">
          Demander un devis
        </Link>

        <button
          className="md:hidden text-gray-800 hover:text-primary-600"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container-custom py-5">
          <div className="flex justify-between items-center mb-8">
            <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
              <Briefcase className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-display font-semibold">Rénov' Lausanne</span>
            </Link>
            <button
              className="text-gray-800 hover:text-primary-600"
              onClick={toggleMenu}
              aria-label="Fermer le menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col space-y-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-xl font-medium ${
                  isActive ? 'text-primary-600' : 'text-gray-800'
                }`
              }
              onClick={closeMenu}
              end
            >
              Accueil
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-xl font-medium ${
                  isActive ? 'text-primary-600' : 'text-gray-800'
                }`
              }
              onClick={closeMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-xl font-medium ${
                  isActive ? 'text-primary-600' : 'text-gray-800'
                }`
              }
              onClick={closeMenu}
            >
              À Propos
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-xl font-medium ${
                  isActive ? 'text-primary-600' : 'text-gray-800'
                }`
              }
              onClick={closeMenu}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-xl font-medium ${
                  isActive ? 'text-primary-600' : 'text-gray-800'
                }`
              }
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>

          <div className="mt-8">
            <Link
              to="/contact"
              className="btn btn-primary w-full"
              onClick={closeMenu}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;