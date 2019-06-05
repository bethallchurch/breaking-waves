import React from 'react'
import { RichText } from 'prismic-reactjs'

const Footer = props => (
  <footer>
    {props.data.text_columns.map((column, index) => (
      <div key={index}>
        {RichText.render(column.column_title)}
        {RichText.render(column.column_text)}
      </div>
    ))}
  </footer>
)

export default Footer

