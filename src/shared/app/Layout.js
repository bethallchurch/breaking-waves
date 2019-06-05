/**
 * The menu content that is rendered here is queried on
 * the server-side in src/server/index.js.
 */

import React from 'react'
import { Link } from 'react-router-dom'
import { Link as PrismicLink, RichText } from 'prismic-reactjs'
import PrismicConfig from '../../prismic-configuration'
import Footer from './Footer'

export const Layout = props => {
  const menu = props.menu.data.menu_links.map(function (menuItem, index) {
    var menuLink = PrismicLink.url(menuItem.link, PrismicConfig.linkResolver)
    var label = RichText.asText(menuItem.label)
    return <li key={index}><Link to={menuLink}>{label}</Link></li>
  })

  return (
    <div>
      <header>
        <Link to='/'>{RichText.asText(props.menu.data.title)}</Link>
        <nav>
          <ul>{menu}</ul>
        </nav>
      </header>
      <div>{props.children}</div>
      <Footer {...props.footer} />
    </div>
  )
}

export default Layout
