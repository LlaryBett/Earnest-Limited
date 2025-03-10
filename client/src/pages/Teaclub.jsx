import React from "react";

const Teaclub = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-100 to-white py-16 px-6">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-emerald-800 mb-6">Join the Earnest Tea Club</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          Discover a **curated selection of premium teas**, delivered to your door every month.  
          Enjoy exclusive blends, discounts, and a community of tea lovers.
        </p>
      </div>

      {/* Membership Benefits */}
      <div className="mt-12 max-w-5xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-emerald-700">🍵 Exclusive Blends</h3>
          <p className="text-gray-600 mt-2">Access limited-edition, handpicked teas every month.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-emerald-700">💰 Member Discounts</h3>
          <p className="text-gray-600 mt-2">Enjoy up to **20% off** all Earnest Tea products.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md text-center">
          <h3 className="text-xl font-semibold text-emerald-700">📦 Free Shipping</h3>
          <p className="text-gray-600 mt-2">Receive your tea box with **no extra cost** every month.</p>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="mt-16 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-emerald-800 mb-6">Choose Your Subscription Plan</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Plan 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-emerald-700">Starter Plan</h3>
            <p className="text-gray-600 mt-2">For casual tea lovers</p>
            <p className="text-2xl font-bold text-emerald-800 mt-4">$15/month</p>
            <ul className="mt-4 text-gray-700 text-sm">
              <li>✅ 2 exclusive tea blends</li>
              <li>✅ Free shipping</li>
              <li>✅ 10% store discount</li>
            </ul>
            <button className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
              Subscribe Now
            </button>
          </div>

          {/* Plan 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-emerald-600">
            <h3 className="text-xl font-semibold text-emerald-700">Premium Plan</h3>
            <p className="text-gray-600 mt-2">For dedicated tea lovers</p>
            <p className="text-2xl font-bold text-emerald-800 mt-4">$25/month</p>
            <ul className="mt-4 text-gray-700 text-sm">
              <li>✅ 4 exclusive tea blends</li>
              <li>✅ Free shipping</li>
              <li>✅ 15% store discount</li>
              <li>✅ Monthly tea workshop access</li>
            </ul>
            <button className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
              Subscribe Now
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold text-emerald-700">Luxury Plan</h3>
            <p className="text-gray-600 mt-2">For the ultimate tea experience</p>
            <p className="text-2xl font-bold text-emerald-800 mt-4">$40/month</p>
            <ul className="mt-4 text-gray-700 text-sm">
              <li>✅ 6 exclusive tea blends</li>
              <li>✅ Free shipping</li>
              <li>✅ 20% store discount</li>
              <li>✅ VIP tea-tasting events</li>
            </ul>
            <button className="mt-6 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-20 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-emerald-800 mb-6">What Our Members Say</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">
              "I absolutely love the **variety of teas** I receive every month. The quality is outstanding!"
            </p>
            <p className="text-emerald-600 font-semibold mt-3">- Sophia M.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-700 italic">
              "Earnest Tea Club has introduced me to so many **unique flavors** I wouldn’t have tried otherwise."
            </p>
            <p className="text-emerald-600 font-semibold mt-3">- James R.</p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-semibold text-emerald-800">Start Your Tea Journey Today!</h2>
        <p className="text-lg text-gray-700 mt-3">
          Become a member and receive handpicked teas delivered to your doorstep.
        </p>
        <button className="mt-6 px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
          Join Now
        </button>
      </div>
    </div>
  );
};

export default Teaclub;
