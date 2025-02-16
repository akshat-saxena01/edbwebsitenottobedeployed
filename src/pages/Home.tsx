import Hero from '../sections/Hero';
import About from '../sections/About';
import Events from '../sections/Events';
import Publications from '../sections/Publications';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Events />
      <Publications />
      <Contact />
    </div>
  );
}

export default Home;