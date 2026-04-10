'use client';

import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col items-center pt-36 overflow-hidden font-sans">
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-12">
        <div className="relative w-6 h-6">
          <div className="absolute w-3.5 h-4.5 bg-black rounded-[2px] left-0.5 top-0.5"></div>
          <div className="absolute w-3.5 h-4.5 bg-black rounded-[2px] right-0.5 bottom-0.5 shadow-[-2px_-2px_0_2px_#f8f9fa]"></div>
        </div>
        <span className="font-bold text-xl tracking-tight">Drops</span>
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-7xl font-medium text-center tracking-tight leading-[1.05] mb-8 max-w-4xl text-gray-900 px-4">
        Big collections.<br />No code required.
      </h1>

      {/* Beta Registration */}
      <div className="flex flex-col items-center gap-3 mb-12 w-full max-w-md px-4">
        <form className="relative flex items-center w-full bg-white rounded-full border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-1.5" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 bg-transparent px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none"
            required
          />
          <button 
            type="submit"
            className="px-6 py-2.5 text-sm bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors active:scale-95 shrink-0"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-500 font-medium">Join the early beta. Limited spots available.</p>
      </div>

      {/* Cards Gallery */}
      <div className="flex justify-center items-end w-full overflow-hidden mt-auto">
        <div className="flex justify-center items-end min-w-[1000px] w-full max-w-[1400px] px-10 pb-0">
          {/* Left 3 */}
          <div className="w-40 h-[16rem] -mb-24 rounded-t-3xl bg-gray-200 -mr-12 z-10 translate-y-16 shadow-xl relative overflow-hidden shrink-0 group hover:translate-y-12 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Left 2 */}
          <div className="w-48 h-[20rem] -mb-24 rounded-t-3xl bg-gray-200 -mr-16 z-20 translate-y-10 shadow-xl relative overflow-hidden shrink-0 group hover:translate-y-6 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Left 1 */}
          <div className="w-56 h-[24rem] -mb-24 rounded-t-[2rem] bg-gray-200 -mr-20 z-30 translate-y-4 shadow-2xl relative overflow-hidden shrink-0 group hover:translate-y-0 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Center */}
          <div className="w-72 h-[26rem] -mb-24 rounded-t-[2.5rem] bg-gray-200 z-40 shadow-2xl relative overflow-hidden shrink-0 group hover:-translate-y-4 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=1000&auto=format&fit=crop" alt="Abstract art" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" priority />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Right 1 */}
          <div className="w-56 h-[24rem] -mb-24 rounded-t-[2rem] bg-gray-200 -ml-20 z-30 translate-y-4 shadow-2xl relative overflow-hidden shrink-0 group hover:translate-y-0 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1614850715649-1d0106293bd1?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Right 2 */}
          <div className="w-48 h-[20rem] -mb-24 rounded-t-3xl bg-gray-200 -ml-16 z-20 translate-y-10 shadow-xl relative overflow-hidden shrink-0 group hover:translate-y-6 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
          
          {/* Right 3 */}
          <div className="w-40 h-[16rem] -mb-24 rounded-t-3xl bg-gray-200 -ml-12 z-10 translate-y-16 shadow-xl relative overflow-hidden shrink-0 group hover:translate-y-12 transition-transform duration-500">
            <Image src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=800&auto=format&fit=crop" alt="Abstract art" fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
