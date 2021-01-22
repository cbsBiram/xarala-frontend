import React from 'react'

const VideoLecture = ({ lesson }) => {
  const youtubeUrl = `https://www.youtube.com/embed/${lesson.videoId}`
  const vimeoUrl = `https://player.vimeo.com/video/${lesson.videoId}`

  return (
    <>
      <div className="iframe-container">
        <iframe
          src={
            lesson.platform === 'Youtube'
              ? youtubeUrl
              : lesson.platform === 'Vimeo'
              ? vimeoUrl
              : ''
          }
          className="inset-0 w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  )
}

export default VideoLecture
