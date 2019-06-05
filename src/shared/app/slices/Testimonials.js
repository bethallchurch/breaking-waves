import React from 'react'
import { RichText } from 'prismic-reactjs'

const Testimonials = props => {
  const { items, primary: { image } } = props.slice
  return (
    <section>
      {items.map(({ title, text, guest }, index) => (
        <div key={index}>
          {RichText.render(title)}
          {RichText.render(text)}
          {RichText.render(guest)}
        </div>
      ))}
      {image.url && <img src={image.url} alt={image.alt} />}
    </section>
  )
}

export default Testimonials
