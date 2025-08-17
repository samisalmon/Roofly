export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Find Your
            <span className="block text-yellow-300">Dream Home?</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 leading-relaxed">
            Join thousands of satisfied customers who found their perfect property with Roofly. 
            Start your journey today and let us make your dream home a reality.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-full shadow-2xl hover:bg-yellow-300 hover:text-blue-800 transition-all duration-300 font-bold text-lg hover:scale-105 transform">
              Get Started Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg hover:scale-105 transform">
              Schedule a Call
            </button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">1000+</div>
              <div className="text-blue-100">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-blue-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
