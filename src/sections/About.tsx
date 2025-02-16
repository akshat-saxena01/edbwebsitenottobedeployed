import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Who We Are</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg leading-relaxed text-gray-600 mb-6 font-light">
            We are a forward-thinking organization dedicated to innovation and excellence. Our mission is to create meaningful impact through collaborative efforts and cutting-edge solutions.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 font-light">
            With a team of passionate professionals, we strive to push boundaries and set new standards in our industry. Our commitment to quality and innovation drives everything we do.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;