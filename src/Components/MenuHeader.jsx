export default function MenuHeader() {
  return (
    <div className="bg-black py-10 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter flex items-center justify-center gap-4">
          🌙 <span className="text-amber-400">Top Moon Cafe</span> 🌕
        </h1>
        <p className="text-zinc-500 mt-1">Premium Healthy Food</p>
      </div>
    </div>
  );
}