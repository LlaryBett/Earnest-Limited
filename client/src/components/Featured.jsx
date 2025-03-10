import React from "react";

const products = [
  {
    id: 1,
    name: "Organic Green Tea",
    price: "$12.99",
    image: "/green-tea.jpg", // Ensure this image exists in /public
  },
  {
    id: 2,
    name: "Earl Grey Black Tea",
    price: "$14.50",
    image: "/earl-grey.jpg",
  },
  {
    id: 3,
    name: "Chamomile Herbal Tea",
    price: "$10.99",
    image: "/chamomile-tea.jpg",
  },
];

const Featured = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-200 to-transparentcontainer mx-auto px-4 py-16">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
        Featured Products
      </h2>

      {/* Products Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-lg p-6">
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Product Info */}
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
              <p className="text-lg text-emerald-600 font-bold">{product.price}</p>

              {/* CTA Button */}
              <button className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;
