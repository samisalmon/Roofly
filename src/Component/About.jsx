import aboutImage from '../img/about.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <img
              src={aboutImage}
              alt="About Roofly"
              className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
          
          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About <span className="text-blue-600">Roofly</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to Roofly, where we believe that every home should be a sanctuary of comfort, 
              style, and inspiration. Our mission is to transform living spaces into extraordinary 
              environments that reflect your unique personality and lifestyle.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With years of experience in interior design and home improvement, our team of experts 
              combines creativity with functionality to create spaces that are both beautiful and 
              practical. We understand that your home is more than just four walls – it's where 
              memories are made and life happens.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Expert Design</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Quality Materials</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Custom Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700 font-medium">Professional Service</span>
              </div>
            </div>
            
            <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
