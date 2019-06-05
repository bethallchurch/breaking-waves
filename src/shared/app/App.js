import React from 'react'
import router from '../router'
import Layout from './Layout'

export const App = props => {
  const { menu, footer } = props.PRISMIC_UNIVERSAL_DATA
  return (
    <Layout menu={menu} footer={footer}>
      {router(props)}
    </Layout>
  )
}

export default App
