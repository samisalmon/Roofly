import homeImage from '../img/home.jpg';

export default function Home() {
  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-[#faf9ee] overflow-hidden"
    >
      <img
        src={homeImage}
        alt="Home background"
        className="absolute inset-0 w-full h-full object-cover opacity-80 z-0"
      />
      <div className="absolute inset-0 bg-black/40 pointer-events-none z-10"></div>
      <div className="relative z-30 text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-50 drop-shadow-lg mb-4">
          Welcome to Roofly
        </h1>
        <p className="text-xl md:text-2xl text-cyan-200 mb-8">
          Discover comfort, style, and inspiration under one roof.
        </p>
        <a
          href="#about"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition font-semibold text-lg"
        >
          Learn More
        </a>
      </div>

    </section>
  );
}
