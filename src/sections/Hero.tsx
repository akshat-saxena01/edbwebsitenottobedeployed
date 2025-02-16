import { Link as ScrollLink } from 'react-scroll';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="flex justify-center mb-8">
          <img 
            src="src\assets\edbLogo.png" 
            alt="The Editorial Board Logo" 
            className="h-32 w-32 md:h-40 md:w-40 lg:h-48 lg:w-48"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-alba text-gray-800 mb-4 tracking-wide">
          The Editorial Board
        </h1>
        <div className="relative">
          <p className="text-xl md:text-2xl text-gray-600 font-alba tracking-wide">
            -Beckoning Creat'wit'y
          </p>
        </div>
        
        <ScrollLink 
          to="about" 
          smooth={true} 
          duration={500} 
          className="inline-block mt-16 animate-bounce cursor-pointer"
        >
          <ChevronDown className="h-8 w-8 text-amber-400" />
        </ScrollLink>
      </div>
    </section>
  );
}

export default Hero;