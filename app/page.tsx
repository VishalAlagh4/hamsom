import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Rocket, TrendingUp } from "lucide-react"
import ham_i from "./assets/ham_i.png"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(120,0,255,0.2),transparent_40%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_60%,rgba(255,0,150,0.2),transparent_40%)]"></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <nav className="flex justify-between items-center mb-16">
            <div className="flex items-center gap-2">
            </div>
          </nav>

          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-[2px] rounded-full">
              <div className="bg-black rounded-full px-4 py-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-medium">
                  The next big meme coin 🐹✨
                </span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">
                HAMSOM
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
              When Hamster Becomes Handsome
            </p>

            <p className="text-gray-400 text-lg mb-10 max-w-2xl">
              The cutest, funkiest meme coin in the crypto universe. Join the HAMSOM revolution and watch your
              investments get as handsome as our mascot!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <h1 className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg py-6 px-8">
                Buy HAMSOM 
              </h1>
             
            </div>

            <div className="relative w-64 h-64 mb-10">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full animate-pulse"></div>
              <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                <Image
                  src={ham_i}
                  alt="HAMSOM Coin"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              To The Moon
            </h3>
            <p className="text-gray-400">
              HAMSOM is ready for liftoff. Our tokenomics are designed for explosive growth.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Handsome Returns
            </h3>
            <p className="text-gray-400">
              Watch your investment transform from cute to absolutely handsome with our growth strategy.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-xl p-6 backdrop-blur-sm">
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
              Vibrant Community
            </h3>
            <p className="text-gray-400">
              Join thousands of HAMSOM holders in our funky, vibrant community of believers.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-br from-purple-900/30 to-black border border-purple-500/20 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Ready to Get Handsome?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Don't miss out on the next big meme coin sensation. Join the HAMSOM revolution today!
          </p>
          
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} HAMSOM Coin. All rights reserved.</p>
          <p className="mt-2">This is a meme coin. Please invest responsibly.</p>
        </div>
      </footer>
    </div>
  )
}

