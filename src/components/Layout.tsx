import * as React from 'react'
import { CSSProperties, ReactNode } from 'react'
import { Helmet } from 'react-helmet'
import { withPrefix } from 'gatsby'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import useSiteMetadata from './SiteMetadata'

import 'normalize.css'
import 'the-new-css-reset/css/reset.css'
import './all.sass'
import './_global.sass'

const container_style: CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}

type props = {
  children: ReactNode
}
const TemplateWrapper = ({ children }: props) => {
  const { title, description } = useSiteMetadata()
  return (
    <div style={container_style}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css" integrity="sha512-+mlclc5Q/eHs49oIOCxnnENudJWuNqX5AogCiqRBgKnpoplPzETg2fkgBFVC6WYUVxYYljuxPNG8RE7yBy1K+g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/og-image.jpg`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      </Helmet>
      <Navbar />
      <main style={{flex: 1}}>{children}</main>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
