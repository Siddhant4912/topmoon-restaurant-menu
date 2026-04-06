export default function Menu() {
  const menuItems = [
    {
      id: 1,
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
      id: 2,
      name: "Burger, Fries & Coffee Combo",
      category: "Main Course",
      price: 420,
      desc: "A juicy burger served with crispy golden fries and a hot cup of coffee — the perfect comfort meal.",
      img: "https://sandwichbox.in/img/dish/sm9.jpg",
      rating: 4.9,
      time: "20 min",
      isVeg: false
    },
    {
      id: 3,
      name: "Cheese Fries",
      category: "Rice & Noodles",
      price: 290,
      desc: "Crispy fries loaded with melted cheese",
      img: "https://static.vecteezy.com/system/resources/thumbnails/050/393/583/small/crispy-loaded-french-fries-with-cheese-sauce-and-bacon-photo.jpg",
      rating: 4.7,
      time: "15 min",
      isVeg: true
    },
    {
      id: 4,
      name: "Hara Bhara Kebab",
      category: "Starters",
      price: 260,
      desc: "Delicious spinach, peas and potato patties served with mint chutney",
      img: "https://www.freepik.com/premium-ai-image/hamburger-cup-beer-are-table_367361769.htm#fromView=search&page=1&position=39&uuid=951a7dd0-bf2f-48d3-b6ea-04e939dc1b02&query=cappiccino+with+burger+",
      rating: 4.6,
      time: "10 min",
      isVeg: true
    },
    {
      id: 5,
      name: "Chicken Hakka Noodles",
      category: "Rice & Noodles",
      price: 310,
      desc: "Indo-Chinese style stir fried noodles with juicy chicken pieces",
      img: "https://picsum.photos/id/1060/600/400",
      rating: 4.8,
      time: "14 min",
      isVeg: false
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      category: "Desserts",
      price: 220,
      desc: "Warm molten chocolate cake served with vanilla ice cream",
      img: "https://picsum.photos/id/1080/600/400",
      rating: 4.9,
      time: "8 min",
      isVeg: true
    }
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