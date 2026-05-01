import React, { useState, useMemo } from 'react';

import MenuCard from './Components/MenuCard';
import CategoryFilter from './Components/CategoryFilter';
import MenuHeader from './Components/MenuHeader';

// Import all images
import coffeewithIceCream from "./assets/images/coffeewithicecream.jpeg";
import twocoffee from "./assets/images/2coffee.jpeg";
import coffeewithsandwich from "./assets/images/cofeewithsandwich.jpeg";
import burgerfriescoffee from "./assets/images/burgerfriescoffee.jpeg";
import Cappuccino from "./assets/images/3coldcoffee.jpeg";
import Oreomilkshake from "./assets/images/threeoreomilkshake.jpeg";
import image1 from "./assets/images/image1.jpeg";
import image2 from "./assets/images/image2.jpeg";
import image3 from "./assets/images/image3.jpeg";
import image5 from "./assets/images/image5.jpeg";
import image12 from "./assets/images/image12.jpeg";
import image13 from "./assets/images/image13.jpeg";
import image15 from "./assets/images/image15.jpeg";
import image16 from "./assets/images/image16.jpeg";
import image17 from "./assets/images/image17.jpeg";
import image18 from "./assets/images/image18.jpeg";
import image19 from "./assets/images/image19.jpeg";
import image20 from "./assets/images/image20.jpeg";
import image21 from "./assets/images/image21.jpeg";

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const menuItems = [
    // { id: 24, name: "300g Protein Shake",          category: "Protein",  price: 420, desc: "", img: image13, rating: 4.8, time: "10 min", isVeg: true },
    { id: 23, name: "Sandwich and Fries Combo",    category: "Combo",    price: 100, desc: "", img: image21, rating: 4.8, time: "10 min", isVeg: true },
    { id: 22, name: "Top Moon Combo",              category: "Combo",    price: 150, desc: "", img: image20, rating: 4.8, time: "10 min", isVeg: true },
    // { id: 21, name: "Peanut Butter",               category: "Protein",  price: 250, desc: "Creamy and protein-rich peanut butter...", img: image12, rating: 4.8, time: "10 min", isVeg: true },
    { id: 20, name: "Peanut Butter Banana Toast",  category: "Protein",  price: 100, desc: "", img: image15, rating: 4.8, time: "10 min", isVeg: true },
    { id: 19, name: "Peanut Butter and Banana Sandwich", category: "Protein", price: 70, desc: "", img: image16, rating: 4.8, time: "10 min", isVeg: true },
    // { id: 18, name: "Healthy Sprouts",             category: "Protein",  price: 111, desc: "", img: image17, rating: 4.8, time: "10 min", isVeg: true },
    // { id: 17, name: "Plain Peanut Butter Sandwich",category: "Protein",  price: 120, desc: "", img: image19, rating: 4.8, time: "10 min", isVeg: true },
    { id: 16, name: "Grilled Peanut Butter Banana Sandwich", category: "Protein", price: 120, desc: "", img: image18, rating: 4.8, time: "10 min", isVeg: true },
    // { id: 15, name: "150g Protein Power Meal",     category: "Protein",  price: 330, desc: "", img: image3, rating: 4.8, time: "10 min", isVeg: true },
    // { id: 14, name: "200g Protein Power Portion",  category: "Protein",  price: 330, desc: "", img: image5, rating: 4.8, time: "10 min", isVeg: true },
    { id: 13, name: "200g Protein Power Meal",     category: "Protein",  price: 299, desc: "", img: image1, rating: 4.8, time: "10 min", isVeg: true },
    { id: 12, name: "100g Protein Meal",           category: "Protein",  price: 149, desc: "", img: image2, rating: 4.7, time: "12 min", isVeg: true },
    { id: 11, name: "Oreo Milkshake",              category: "Beverages", price: 130, desc: "Delicious Oreo milkshake with ice cream", img: Oreomilkshake, rating: 4.9, time: "10 min", isVeg: true },
    { id: 10, name: "Cappuccino",                  category: "Beverages", price: 100, desc: "Rich and creamy cappuccino", img: Cappuccino, rating: 4.9, time: "8 min", isVeg: true },
    { id: 9,  name: "Burger Combo",                category: "Combo",    price: 150, desc: "Burger with fries and coffee", img: burgerfriescoffee, rating: 4.8, time: "20 min", isVeg: true },
    { id: 8,  name: "Sandwich Combo",              category: "Combo",    price: 150, desc: "Large sandwich with fries and coffee", img: coffeewithsandwich, rating: 4.8, time: "18 min", isVeg: true },
    { id: 7,  name: "Big Cold Coffee",             category: "Beverages", price: 70, desc: "Refreshing big cold coffee", img: twocoffee, rating: 4.8, time: "12 min", isVeg: true },
    { id: 6,  name: "Top Moon Special",            category: "Beverages", price: 150, desc: "Cold Coffee + Ice Cream", img: coffeewithIceCream, rating: 4.8, time: "14 min", isVeg: true },
    { id: 5,  name: "Cheese Fries",                category: "Fries",    price: 120, desc: "Crispy fries loaded with melted cheese", img: "https://static.vecteezy.com/system/resources/thumbnails/050/393/583/small/crispy-loaded-french-fries-with-cheese-sauce-and-bacon-photo.jpg", rating: 4.7, time: "15 min", isVeg: true },
  ];

  // Get unique categories
  const categories = useMemo(() => {
    const unique = ['All', ...new Set(menuItems.map(item => item.category))];
    return unique;
  }, []);

  // Filtered items
  const filteredItems = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    return menuItems.filter(item => {
      const matchesSearch = 
        item.name.toLowerCase().includes(term) ||
        (item.desc && item.desc.toLowerCase().includes(term));

      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <MenuHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search menu items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-900 border border-zinc-700 focus:border-amber-500 rounded-2xl px-6 py-4 text-lg placeholder-zinc-500 focus:outline-none"
          />
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-zinc-400">
              No items found for "{searchTerm || selectedCategory}"
            </div>
          )}
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-zinc-900 border-t border-zinc-800 py-12 px-6 mt-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-500">📍 Address</h3>
            <p className="text-zinc-400">
              Top Moon<br />
              In front of Samrat Nagar gate, beside Mumbra police station<br />
              Thane, Mumbra - 400612
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-500">📞 Contact</h3>
            <p className="text-zinc-400">+91 7738443584</p>
            <p className="text-zinc-400">Ganesh Chandrakant Jagtap</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-3 text-amber-500">⏰ Opening Hours</h3>
            <p className="text-zinc-400">Mon - Sun: 6:00 PM – 11:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}