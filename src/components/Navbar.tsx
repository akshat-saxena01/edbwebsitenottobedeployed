import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', type: 'route', to: '/' },
    { name: 'About', type: 'scroll', to: 'about' },
    { name: 'Contact', type: 'scroll', to: 'contact' },
    { name: 'Team', type: 'route', to: '/team' },
  ];

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.type === 'route') {
      // Add smooth transition before navigation
      document.body.classList.add('page-transition', 'page-enter');
      setTimeout(() => {
        navigate(item.to);
        document.body.classList.remove('page-transition', 'page-enter');
      }, 300);
    } else if (!isHomePage) {
      navigate('/', { state: { scrollTo: item.to } });
    }
    setIsOpen(false);
  };

  const renderNavItem = (item: typeof navItems[0]) => {
    if (!isHomePage && item.type === 'scroll') {
      return (
        <button
          key={item.name}
          onClick={() => handleNavigation(item)}
          className="text-gray-600 hover:text-amber-400 transition-all duration-300"
        >
          {item.name}
        </button>
      );
    }

    return item.type === 'scroll' ? (
      <ScrollLink
        key={item.name}
        to={item.to}
        smooth={true}
        duration={500}
        className="cursor-pointer text-gray-600 hover:text-amber-400 transition-all duration-300"
        onClick={() => setIsOpen(false)}
      >
        {item.name}
      </ScrollLink>
    ) : (
      <button
        key={item.name}
        onClick={() => handleNavigation(item)}
        className="text-gray-600 hover:text-amber-400 transition-all duration-300"
      >
        {item.name}
      </button>
    );
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/src/assets/mmmut.png" 
              alt="MMMUT Logo" 
              className="h-12 w-auto transition-transform duration-300 hover:scale-105"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(renderNavItem)}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 hover:text-amber-400 transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="block">
                {renderNavItem(item)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;