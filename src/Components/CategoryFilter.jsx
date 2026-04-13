export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-10">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all
            ${selectedCategory === category 
              ? 'bg-amber-500 text-black shadow-lg' 
              : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}