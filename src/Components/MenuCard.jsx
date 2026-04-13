export default function MenuCard({ item }) {
  return (
    <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 
                    hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10 
                    transition-all duration-300 group flex flex-col h-full">
      
      <div className="relative">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-56 object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Veg Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full flex items-center gap-1 shadow-md
          ${item.isVeg ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
          {item.isVeg ? '🌱 Veg' : '🍗 Non-Veg'}
        </div>

        {/* Rating */}
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
          ⭐ {item.rating}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold leading-tight">{item.name}</h3>
            <p className="text-amber-400 font-bold text-2xl mt-2">₹{item.price}</p>
          </div>
        </div>

        <p className="text-zinc-400 text-sm mt-3 line-clamp-2 flex-1">
          {item.desc}
        </p>

        <div className="mt-4 text-xs text-zinc-500 flex items-center gap-2">
          ⏱ {item.time}
        </div>
      </div>
    </div>
  );
}