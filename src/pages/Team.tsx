import React from 'react';

const teamMembers = {
  core: [
    {
      name: "John Doe",
      role: "CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400"
    },
    // Add more core team members...
  ],
  extended: [
    {
      name: "Mike Johnson",
      role: "Senior Developer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sarah Williams",
      role: "UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400"
    },
    // Add more extended team members...
  ]
};

const TeamMemberCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Team</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet the passionate individuals who make our organization great. Together, we're driving innovation and creating impact.
        </p>

        <div className="space-y-16">
          {/* Core Team */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Core Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.core.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>

          {/* Extended Team */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-8">Extended Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamMembers.extended.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;