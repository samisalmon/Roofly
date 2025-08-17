import p1Image from '../img/p1.jpg';
import p2Image from '../img/p2.jpg';
import p3Image from '../img/p3.jpg';
import p4Image from '../img/p4.jpg';

export default function Properties() {
  const properties = [
    {
      id: 1,
      image: p1Image,
      title: "Modern Villa",
      location: "Downtown District",
      price: "$850,000"
    },
    {
      id: 2,
      image: p2Image,
      title: "Luxury Apartment",
      location: "City Center",
      price: "$450,000"
    },
    {
      id: 3,
      image: p3Image,
      title: "Family Home",
      location: "Suburban Area",
      price: "$650,000"
    },
    {
      id: 4,
      image: p4Image,
      title: "Penthouse Suite",
      location: "High Rise",
      price: "$1,200,000"
    }
  ];

  return (
    <section id="properties" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Featured <span className="text-blue-600">Properties</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that combine luxury, comfort, and style
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg hover:scale-105 transform">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}

// Property Card Component
function PropertyCard({ image, title, location, price }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 transform">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Price Tag */}
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-2 rounded-full font-bold text-sm shadow-lg">
          {price}
        </div>
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 flex items-center">
          <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          {location}
        </p>

        {/* View Details Button */}
        <button className="w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium group-hover:shadow-lg">
          View Details
        </button>
      </div>
    </div>
  );
}
