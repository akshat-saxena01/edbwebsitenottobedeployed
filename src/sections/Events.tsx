import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const events = [
  {
    title: "Annual Conference 2024",
    description: "A gathering of industry leaders discussing future trends",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Innovation Summit",
    description: "Showcasing breakthrough technologies and solutions",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Workshop Series",
    description: "Hands-on learning experiences for professionals",
    image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?auto=format&fit=crop&q=80&w=1200"
  },
  {
    title: "Community Outreach",
    description: "Making a difference in our local community",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200"
  }
];

const Events = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Events</h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="h-[600px]"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-3xl font-bold mb-4">{event.title}</h3>
                    <p className="text-xl">{event.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Events;