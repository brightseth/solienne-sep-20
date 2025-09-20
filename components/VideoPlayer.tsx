'use client'

interface VideoPlayerProps {
  src: string
  title: string
  className?: string
}

export default function VideoPlayer({ src, title, className = '' }: VideoPlayerProps) {
  const videoType = src.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'

  return (
    <div className={`video-container ${className}`}>
      <video
        controls
        className="w-full h-auto border border-gray-700"
        preload="metadata"
        aria-label={title}
      >
        <source src={src} type={videoType} />
        <p className="helvetica-body text-center py-8">
          Your browser does not support the video tag.
        </p>
      </video>
    </div>
  )
}