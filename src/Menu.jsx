export default function Menu() {
  const menuItems = [
    {
      id: 1,

       name: "Burger, Fries & Coffee Combo",
      category: "Main Course",
      price: 100,
      desc: "A juicy burger served with crispy golden fries and a hot cup of coffee — the perfect comfort meal.",
      img: "https://sandwichbox.in/img/dish/sm9.jpg",
      rating: 4.9,
      time: "20 min",
      isVeg: false
     
    },
    {
      id: 2,
        name: "Cheese Fries",
      category: "Rice & Noodles",
      price: 120,
      desc: "Crispy fries loaded with melted cheese",
      img: "https://static.vecteezy.com/system/resources/thumbnails/050/393/583/small/crispy-loaded-french-fries-with-cheese-sauce-and-bacon-photo.jpg",
      rating: 4.7,
      time: "15 min",
      isVeg: true
      
    },
    {
      id: 3,
    
      name: "Signature Mojito",
      category: "Dessert",
      price: 320,
      desc: "A refreshing fusion of mint, lime & sparkling soda, crafted to energize your senses",
      img: "https://thumbs.dreamstime.com/b/mojito-lemonade-summer-cold-drink-plastic-glass-straw-coctail-mint-lemon-lime-ice-serve-bar-mojito-182587013.jpg",
      rating: 4.8,
      time: "12 min",
      isVeg: true
    },
    {
      id: 4,
      name: "Big Combo",
      category: "Starters",
      price: 110,
      desc: "sandwich + coffee + crispy golden fries",
      img: "https://b.zmtcdn.com/data/dish_photos/8ff/53a0d736cbca3c997e68ab5c126a98ff.jpeg",
      rating: 4.6,
      time: "10 min",
      isVeg: true
    },
    {
      id: 5,
      name: "small combo",
      category: "Rice & Noodles",
      price: 80,
      desc: "sandwich + coffee ",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQpWYnfbkBqXlCox1rpAteKKh0d1X92i49g&s",
      rating: 4.8,
      time: "14 min",
      isVeg: true
    },
    {
      id: 5,
      name: "French fries in a cup",
      category: "crispy golden fries",
      price: 50,
      desc: "crispy golden fries",
      img: "data:image/jpeg;base64,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",
      rating: 4.8,
      time: "14 min",
      isVeg: true
    },
  
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white pb-20">
      {/* Header */}
      <div className="bg-black py-8 border-b border-zinc-800">
        <h1 className="text-4xl md:text-5xl text-center font-bold tracking-tight flex items-center justify-center gap-3">
          🌕 <span>Top Moon</span> 🌕
        </h1>
        <p className="text-center text-zinc-400 mt-2 text-lg">Premium Multi-Cuisine Restaurant • Mumbai</p>
      </div>

      {/* Menu Section */}
      <div className="max-w-7xl mx-auto px-6 pt-12">
        <h2 className="text-3xl font-semibold mb-10 text-center">Our Signature Menu</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-amber-500 transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={item.img}
                  alt={item.name}
className="w-full h-52 sm:h-56 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"                />
                
                {/* Veg / Non-Veg Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1
                  ${item.isVeg ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {item.isVeg ? '🌱 Veg' : '🍗 Non-Veg'}
                </div>

                {/* Rating */}
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  ⭐ {item.rating}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-semibold leading-tight">{item.name}</h3>
                    <p className="text-amber-500 font-medium mt-1">₹{item.price}</p>
                  </div>
                  <div className="text-right text-xs text-zinc-400 flex items-center gap-1">
                    ⏱ {item.time}
                  </div>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed line-clamp-2">
                  {item.desc}
                </p>

                {/* Add to Cart Button */}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-center mt-16 text-zinc-500 text-sm">
        All prices are in INR • Taxes extra as applicable
      </div>
    </div>
  );
}