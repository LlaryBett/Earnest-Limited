import React, { useState } from 'react';
import { Link } from "react-router-dom"; // Import Link from React Route
import { 
  LeafyGreen, 
  ChevronDown, 
  Search, 
  ShoppingCart, 
  User,
  Coffee,
  Leaf,
  Store,
  Gift,
  Heart,
  BookOpen
} from 'lucide-react';

const Navbar = () => {
  const [isTeaMenuOpen, setIsTeaMenuOpen] = useState(false);

  const teaCategories = [
    {
      title: "Black Teas",
      items: ["English Breakfast", "Earl Grey", "Darjeeling", "Assam"],
      icon: <Coffee className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "Green Teas",
      items: ["Sencha", "Dragon Well", "Gyokuro", "Matcha"],
      icon: <Leaf className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "Specialty",
      items: ["Oolong", "White Tea", "Pu-erh", "Yerba Mate"],
      icon: <Heart className="w-5 h-5 text-emerald-600" />
    },
    {
      title: "Collections",
      items: ["Seasonal", "Limited Edition", "Gift Sets", "Tea Samplers"],
      icon: <Gift className="w-5 h-5 text-emerald-600" />
    }
  ];

  return (
    <nav className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-emerald-900 text-white text-sm py-4">
        <div className="container mx-auto px-">
          <p className="text-center">Free Shipping on Orders Over ksh 500 | Join Our Tea Club Today!</p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
  <LeafyGreen className="h-8 w-8 text-emerald-600" />
  <span className="text-2xl font-serif font-bold">Earnest Tea</span>
</Link>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <div 
              className="relative group"
              onMouseEnter={() => setIsTeaMenuOpen(true)}
              onMouseLeave={() => setIsTeaMenuOpen(false)}
            >
              <button className="flex items-center space-x-1 hover:text-emerald-600">
                <span>Our Teas</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Mega Menu */}
              {isTeaMenuOpen && (
                <div className="absolute top-full left-0 w-screen max-w-4xl bg-white shadow-lg rounded-b-lg -ml-60 z-50">
                  <div className="grid grid-cols-4 gap-8 p-8">
                    {teaCategories.map((category, idx) => (
                      <div key={idx}>
                        <div className="flex items-center space-x-2 mb-4">
                          {category.icon}
                          <h3 className="font-semibold text-gray-900">{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <a href="#" className="text-gray-600 hover:text-emerald-600">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="bg-emerald-50 p-4 rounded-b-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <BookOpen className="h-5 w-5 text-emerald-600" />
                        <span className="font-medium">Tea Education</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Store className="h-5 w-5 text-emerald-600" />
                        <span className="font-medium">Find a Store</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/teaware" className="hover:text-emerald-600">Teaware</Link>
     <Link to="/gifts" className="hover:text-emerald-600">Gifts</Link>
  <Link to="/tea-club" className="hover:text-emerald-600">Tea Club</Link>
  <Link to="/about" className="hover:text-emerald-600">About</Link>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <button className="hover:text-emerald-600">
              <Search className="h-5 w-5" />
            </button>
            <button className="hover:text-emerald-600">
              <User className="h-5 w-5" />
            </button>
            <button className="relative hover:text-emerald-600">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;