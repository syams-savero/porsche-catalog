import Link from 'next/link';

export default function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white p-10">
      <h1 className="text-4xl font-bold mb-10 text-center">SELECT YOUR MODEL</h1>
      
      {/* GRID LAYOUT (Bento Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        
        {/* Card 1 */}
        <div className="aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center hover:border-white transition-colors cursor-pointer group">
          <span className="text-zinc-500 group-hover:text-white">911 SERIES</span>
        </div>

        {/* Card 2 */}
        <div className="aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center hover:border-white transition-colors cursor-pointer group">
          <span className="text-zinc-500 group-hover:text-white">718 SERIES</span>
        </div>

        {/* Card 3 */}
        <div className="aspect-video bg-zinc-900 rounded-xl border border-zinc-800 flex items-center justify-center hover:border-white transition-colors cursor-pointer group">
          <span className="text-zinc-500 group-hover:text-white">TAYCAN SERIES</span>
        </div>

      </div>

      <div className="text-center mt-20">
        <Link href="/" className="text-zinc-500 hover:text-white underline underline-offset-4">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}