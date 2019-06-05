import React from 'react'
import { Link } from 'react-router-dom'
import { Link as PrismicLink, RichText } from 'prismic-reactjs'
import PrismicConfig from '../../../prismic-configuration'

export const ImageGallery = props => {
  const gallery = props.slice.items.map((galleryItem, index) => (
    <div key={index}>
      <img src={galleryItem.gallery_image.url} alt={galleryItem.gallery_image.alt} />
    </div>
  ))

  return (
    <section>
      <div>
        {gallery}
      </div>
    </section>
  )
}

export default ImageGallery
