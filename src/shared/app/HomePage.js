import React from 'react'
import NotFoundPage from './NotFoundPage'
import PrismicReact from '../../prismic-react'
import TextSection from './slices/TextSection'
import ImageGallery from './slices/ImageGallery'
import HomeBanner from './slices/HomeBanner'
import Testimonials from './slices/Testimonials'

class HomePage extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      notFound:
        props.PRISMIC_UNIVERSAL_DATA &&
        !props.PRISMIC_UNIVERSAL_DATA.data ?
        true :
        false,
      linkResolver: null
    }
  }

  componentWillReceiveProps (props) {
    this.setState({ notFound: !props.PRISMIC_UNIVERSAL_DATA })
  }

  componentWillMount () {
    if (typeof document !== 'undefined') document.body.classList.add('homepage')
  }

  componentWillUnmount () {
    if (typeof document !== 'undefined') document.body.classList.remove('homepage')
  }

  render () {
    const document = this.props.PRISMIC_UNIVERSAL_DATA

    if (document && document.data) {
      const document = this.props.PRISMIC_UNIVERSAL_DATA

      var pageContent = document.data.body.map(function (slice, index) {
        switch (slice.slice_type) {
          case 'text_section':
            return <TextSection key={index} slice={slice} />
          case 'image_gallery':
            return <ImageGallery key={index} slice={slice} />
          case 'testimonials':
            return <Testimonials key={index} slice={slice} />
          default:
            return <p key={index}>{slice.slice_type}</p>
        }
      })

      return (
        <div data-wio-id={document.id}>
          <HomeBanner document={document} />
          <div>
            {pageContent}
          </div>
        </div>
      )
    } else if (this.state.notFound) {
      return <NotFoundPage />
    } else {
      return <div>Loading...</div>
    }
  }
}

export default PrismicReact.UniversalComponent({
  request: (ctx, props) => ctx.api.getSingle('homepage', {}),
  component: HomePage
})
