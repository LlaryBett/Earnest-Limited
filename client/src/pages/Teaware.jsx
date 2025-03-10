import React from 'react';

const teaWareItems = [
  {
    id: 1,
    name: 'Ceramic Teapot',
    image: '/images/ceramic-teapot.jpg',
    description: 'A beautifully crafted ceramic teapot for a perfect tea experience.',
    price: '$39.99',
  },
  {
    id: 2,
    name: 'Glass Infuser Mug',
    image: '/images/glass-infuser-mug.jpg',
    description: 'A transparent glass mug with a built-in infuser for loose-leaf tea.',
    price: '$24.99',
  },
  {
    id: 3,
    name: 'Japanese Kyusu Teapot',
    image: '/images/kyusu-teapot.jpg',
    description: 'A traditional side-handled teapot for brewing delicate green teas.',
    price: '$49.99',
  },
  {
    id: 4,
    name: 'Matcha Whisk Set',
    image: '/images/matcha-whisk-set.jpg',
    description: 'Complete matcha set with whisk, scoop, and bowl for perfect preparation.',
    price: '$29.99',
  },
  {
    id: 5,
    name: 'Stainless Steel Infuser',
    image: '/images/stainless-infuser.jpg',
    description: 'A durable and reusable infuser for loose-leaf tea brewing.',
    price: '$14.99',
  },
];

const TeaWare = () => {
  return (
    <div className="container mx-auto px-5 py-12">
      <h2 className="text-4xl font-serif font-bold text-center mb-10 text-gray-800">Premium Tea Ware</h2>
      
      {/* Product Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {teaWareItems.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-lg p-6 text-center">
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-lg"
            />
            
            {/* Product Details */}
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
              <p className="text-lg text-emerald-600 font-bold mt-3">{item.price}</p>
              
              {/* CTA Button */}
              <button className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeaWare;
