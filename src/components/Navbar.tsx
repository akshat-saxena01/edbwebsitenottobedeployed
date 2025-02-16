import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', type: 'scroll', to: 'hero' },
    { name: 'About', type: 'scroll', to: 'about' },
    { name: 'Contact', type: 'scroll', to: 'contact' },
    { name: 'Team', type: 'route', to: '/team' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img
            src="src\assets\mmmut.png" 
            alt="MMMUT Logo"
              className="h-8 w-8 md:h-10 md:w-10 object-contain"
            />
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.type === 'scroll' ? (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-600 hover:text-amber-400 transition-colors"
                >
                  {item.name}
                </ScrollLink>
              ) : (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-gray-600 hover:text-amber-400 transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-amber-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="block">
                {item.type === 'scroll' ? (
                  <ScrollLink
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="block text-gray-600 hover:text-amber-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <Link
                    to={item.to}
                    className="block text-gray-600 hover:text-amber-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;