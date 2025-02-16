const publications = [
  {
    title: "Malvika - Annual University Magazine",
    description: "The 55th edition of our prestigious annual university magazine, featuring comprehensive coverage of university events, student achievements, and academic excellence.",
    image: "src/assets/malvika.jpg"
  },
  {
    title: "Tiresia - Literary Magazine",
    description: "Volume 15, Issue 3 of our literary magazine showcasing creative writing, poetry, and artistic expressions from our talented community.",
    image: "src/assets/tiresia.jpg"
  }
];

const Publications = () => {
  return (
    <section className="py-20 bg-white/50">
      <div className="container mx-auto px-56">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Publications</h2>
        <div className="space-y-20">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                } items-center gap-8 md:gap-16`}
            >
              <div className="w-full md:w-1/4 lg:w-1/5">
                <div className="aspect-[3/4] relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-t">
                    <img
                      src = {pub.image}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-3/4 lg:w-4/5 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 transition-colors duration-300 hover:text-amber-400">
                  {pub.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{pub.description}</p>
                <button className="px-6 py-2 bg-amber-400 text-white rounded-lg hover:bg-amber-300 transition-all duration-300 transform hover:scale-105">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Publications;