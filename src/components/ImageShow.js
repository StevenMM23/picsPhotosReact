import React from 'react'

const ImageShow = ({imageUrl, imageDescription}) => {
  return (
    <div>
      <img src={imageUrl} alt={imageDescription} />
    </div>
  )
}

export default ImageShow