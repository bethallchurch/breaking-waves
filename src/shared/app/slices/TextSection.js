import React from 'react'
import { RichText } from 'prismic-reactjs'

export const TextSection = props => {
  return (
    <section>
      {RichText.render(props.slice.primary.rich_text)}
    </section>
  )
}

export default TextSection
