'use client'

import Image from 'next/image'
import { useEffect } from 'react'

interface ImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export default function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1080}
          className="max-w-full max-h-full w-auto h-auto object-contain"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 transition-colors"
          aria-label="Close"
        >
          ×
        </button>
      </div>
    </div>
  )
}