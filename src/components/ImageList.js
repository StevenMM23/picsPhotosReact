import React from 'react'
import ImageShow from './ImageShow'
import "./ImageList.css"
const ImageList = ({images}) => {
  return (
    <div className='image-list'>
      {images.map((e) => { 
        return (
          <div key={e.id} >
            <ImageShow imageUrl={e.urls.small} imageDescription={e.alt_description}/>
          </div>
        )
      })}
    </div>
  )
}

export default ImageList