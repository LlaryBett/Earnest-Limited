import React from 'react';
import { LeafyGreen, Award, Leaf } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat min-h-screen"
        style={{ backgroundImage: "url('https://africanlanders.com/wp-content/uploads/2021/09/1630852419779-1.jpg')" }} // Ensure /public/bg.jpg exists
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="flex justify-center mb-6">
            <LeafyGreen className="h-16 w-16 text-emerald-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Discover the Art of Fine Tea
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience centuries of tradition in every cup with our carefully curated selection of premium teas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-medium transition duration-300">
              Shop Our Collection
            </button>
            <button className="bg-transparent hover:bg-white hover:text-emerald-900 text-white px-8 py-3 rounded-full font-medium border-2 border-white transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 bg-white bg-opacity-95 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 justify-center">
              <Leaf className="h-8 w-8 text-emerald-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Ethically Sourced</h3>
                <p className="text-gray-600">Direct from premium tea gardens</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-center">
              <Award className="h-8 w-8 text-emerald-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Award Winning</h3>
                <p className="text-gray-600">Recognized for exceptional quality</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 justify-center">
              <LeafyGreen className="h-8 w-8 text-emerald-600" />
              <div>
                <h3 className="font-semibold text-gray-900">Fresh Harvest</h3>
                <p className="text-gray-600">Seasonal selections curated monthly</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
