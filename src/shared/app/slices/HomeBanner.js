import React from 'react'
import { Link } from 'react-router-dom'
import { Link as PrismicLink, RichText } from 'prismic-reactjs'
import PrismicConfig from '../../../prismic-configuration'

export const HomeBanner = props => {
  const banner = props.document.data.homepage_banner[0]
  const bannerStyle = { backgroundImage: 'url(' + banner.image.url + ')' }

  const link = PrismicLink.url(banner.button_link, PrismicConfig.linkResolver)
  const label = RichText.asText(banner.button_label)
  const button = link && label !== ' ' ? (
    <Link to={link}>{label}</Link>
  ) : null

  return (
    <section style={bannerStyle}>
      <div>
        <h2>{RichText.asText(banner.title)}</h2>
        {RichText.render(banner.text)}
        {button}
      </div>
    </section>
  )
}

export default HomeBanner
