import { Button, Heading } from "@medusajs/ui"
import Link from "next/link"

const Hero = () => {
  return (
    <div className="h-[80vh] w-full relative bg-black text-white">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-5xl font-semibold tracking-tight"
          >
            Model 3 & Model Y Parts
          </Heading>
          <Heading
            level="h2"
            className="text-xl font-light text-gray-300 mt-2"
          >
            Premium accessories and OEM components for your Tesla
          </Heading>
        </span>
       <Link href="/store" passHref>
  <Button variant="primary" className="bg-white text-black px-6 py-3">
    Shop Now
  </Button>
</Link>
      </div>
    </div>
  )
}

export default Hero
