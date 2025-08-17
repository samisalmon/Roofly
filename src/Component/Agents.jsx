import p1Image from '../img/agent-1.jpg';
import p2Image from '../img/agent-2.jpg';
import p3Image from '../img/agent-3.jpg';
import p4Image from '../img/agent-4.jpg';

export default function Agents() {
  const agents = [
    {
      id: 1,
      image: p1Image,
      name: "Sarah Johnson",
      position: "Senior Real Estate Agent",
      phone: "+1 (555) 123-4567",
      email: "sarah.j@roofly.com"
    },
    {
      id: 2,
      image: p2Image,
      name: "Michael Chen",
      position: "Luxury Property Specialist",
      phone: "+1 (555) 234-5678",
      email: "michael.c@roofly.com"
    },
    {
      id: 3,
      image: p3Image,
      name: "Emily Rodriguez",
      position: "First-Time Buyer Expert",
      phone: "+1 (555) 345-6789",
      email: "emily.r@roofly.com"
    },
    {
      id: 4,
      image: p4Image,
      name: "David Thompson",
      position: "Investment Property Advisor",
      phone: "+1 (555) 456-7890",
      email: "david.t@roofly.com"
    }
  ];

  return (
    <section id="agents" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Meet Our <span className="text-blue-600">Expert Agents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced real estate professionals are here to guide you through every step of your property journey
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <AgentCard key={agent.id} {...agent} />
          ))}
        </div>

        {/* Join Our Team Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg hover:scale-105 transform">
            Join Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

// Agent Card Component
function AgentCard({ image, name, position, phone, email }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 transform border border-gray-100">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {name}
        </h3>
        <p className="text-blue-600 font-semibold mb-4">
          {position}
        </p>
        
        {/* Contact Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {phone}
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            {email}
          </div>
        </div>

        {/* Contact Button */}
        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:shadow-lg">
          Contact Agent
        </button>
      </div>
    </div>
  );
}
