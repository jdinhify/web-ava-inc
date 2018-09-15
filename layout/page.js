import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Page = ({ children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Australian Vietnamese Arts Inc</title>
    </Head>

    <main>
      {children}
    </main>

    {/* eslint-disable react/jsx-one-expression-per-line, react/jsx-closing-tag-location */}
    <style jsx global>{`
      html {
        box-sizing: border-box;
      }

      *, *:before, *:after {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        padding: 0;
        font-family: 'Helvetica Neue', Helvetica, sans-serif;
        font-weight: 300;
        line-height: 1.4;
      }
    `}</style>
    {/* eslint-enable */}
  </Fragment>
)

Page.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Page
