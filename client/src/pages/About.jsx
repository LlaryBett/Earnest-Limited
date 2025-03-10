import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-100 to-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-emerald-800 mb-6">About Earnest Tea</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          At **Earnest Tea**, we believe in bringing the finest, ethically sourced teas from around the world 
          to your cup. Our journey began with a simple passion for authentic flavors and a commitment to quality.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mt-12 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-emerald-700 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          We are dedicated to offering premium, organic, and fair-trade teas that not only taste amazing 
          but also support sustainable farming and ethical sourcing.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="mt-12 max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-emerald-700">🌱 Organic & Natural</h3>
          <p className="text-gray-600 mt-2">Handpicked teas with no artificial flavors or additives.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-emerald-700">🌍 Ethical Sourcing</h3>
          <p className="text-gray-600 mt-2">Supporting small farmers and sustainable practices.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-emerald-700">🏆 Award-Winning Taste</h3>
          <p className="text-gray-600 mt-2">Recognized globally for our exceptional quality.</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-emerald-800">Join Our Tea Community</h2>
        <p className="text-lg text-gray-700 mt-3">
          Experience the best of tea culture and tradition. Browse our collection today!
        </p>
        <button className="mt-6 px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default About;
