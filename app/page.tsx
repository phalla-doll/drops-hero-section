import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center pt-20 overflow-hidden font-sans">
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-12">
        <div className="relative w-6 h-6">
          <div className="absolute w-3.5 h-4.5 bg-black rounded-[2px] left-0.5 top-0.5"></div>
          <div className="absolute w-3.5 h-4.5 bg-black rounded-[2px] right-0.5 bottom-0.5 shadow-[-2px_-2px_0_2px_#f8f9fa]"></div>
        </div>
        <span className="font-bold text-xl tracking-tight">Drops</span>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-[5.5rem] font-bold text-center tracking-tighter leading-[1.05] mb-10 max-w-4xl text-gray-900 px-4">
        Big collections.<br />No code required.
      </h1>

      {/* Buttons */}
      <div className="flex items-center gap-4 mb-20">
        <button className="px-8 py-3.5 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95">
          Connect
        </button>
        <button className="px-8 py-3.5 bg-white text-black rounded-full font-medium border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm hover:shadow hover:scale-105 active:scale-95">
          Learn more
        </button>
      </div>

      {/* Cards Gallery */}
      <div className="flex justify-center items-end w-full overflow-hidden mt-auto">
        <div className="flex justify-center items-end min-w-[1000px] w-full max-w-[1400px] px-10 pb-0">
          {/* Left 3 */}
          <div className="w-40 h-40 rounded-t-3xl bg-gray-200 -mr-12 z-10 translate-y-16 shadow-xl relative overflow-hidden shrink-0 group hover:-translate-y-4 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Left 2 */}
          <div className="w-48 h-56 rounded-t-3xl bg-gray-200 -mr-16 z-20 translate-y-10 shadow-xl relative overflow-hidden shrink-0 group hover:-translate-y-4 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Left 1 */}
          <div className="w-56 h-72 rounded-t-[2rem] bg-gray-200 -mr-20 z-30 translate-y-4 shadow-2xl relative overflow-hidden shrink-0 group hover:-translate-y-4 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Center */}
          <div className="w-72 h-80 rounded-t-[2.5rem] bg-gray-200 z-40 shadow-2xl relative overflow-hidden shrink-0 group hover:-translate-y-4 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1000&auto=format&fit=crop" alt="Abstract art" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" priority />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Right 1 */}
          <div className="w-56 h-72 rounded-t-[2rem] bg-gray-200 -ml-20 z-30 translate-y-4 shadow-2xl relative overflow-hidden shrink-0 group hover:-translate-y-4 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Right 2 */}
          <div className="w-48 h-56 rounded-t-3xl bg-gray-200 -ml-16 z-20 translate-y-10 shadow-xl relative overflow-hidden shrink-0 group hover:-translate-y-4 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Right 3 */}
          <div className="w-40 h-40 rounded-t-3xl bg-gray-200 -ml-12 z-10 translate-y-16 shadow-xl relative overflow-hidden shrink-0 group hover:-translate-y-4 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
