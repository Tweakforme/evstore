"use client"

import { useState } from "react"
import { HttpTypes } from "@medusajs/types"
import { Container } from "@medusajs/ui"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

type ImageGalleryProps = {
  images: HttpTypes.StoreProductImage[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [current, setCurrent] = useState(0)
  const total = images.length

  const nextImage = () => setCurrent((prev) => (prev + 1) % total)
  const prevImage = () => setCurrent((prev) => (prev - 1 + total) % total)

  const currentImage = images[current]

  return (
    <>
      {/* Mobile: vertical image list */}
      <div className="md:hidden flex flex-col gap-y-4">
        {images.map((image, index) => (
          <Container
            key={image.id}
            className="relative aspect-[1/1] w-full overflow-hidden bg-ui-bg-subtle"
          >
            <Image
              src={image.url}
              alt={`Product image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw"
            />
          </Container>
        ))}
      </div>

{/* Desktop: clean single image slider */}
<div className="relative hidden md:flex flex-col items-center w-full max-w-2xl mx-auto">
  <Container className="relative aspect-[4/3] w-full rounded-lg overflow-hidden bg-ui-bg-subtle">
    <Image
      src={currentImage.url}
      alt={`Product image ${current + 1}`}
      fill
      className="object-contain p-6"
      sizes="(max-width: 992px) 480px, 800px"
    />
    {/* Arrows inside image */}
    {total > 1 && (
      <>
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
        >
          <ArrowLeftIcon className="w-5 h-5" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow"
        >
          <ArrowRightIcon className="w-5 h-5" />
        </button>
      </>
    )}
  </Container>

  {/* Dots below container */}
  {total > 1 && (
    <div className="flex justify-center mt-4 gap-1">
      {images.map((_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i === current ? "bg-primary" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  )}
</div>

    </>
  )
}

export default ImageGallery
