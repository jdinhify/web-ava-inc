import React from 'react'

import Page from '../../layout/page'
import Intro from './intro'
import WhoWeAre from './who-we-are'
import WhatWeDo from './what-we-do'
import Contact from './contact'
import Gallery from './gallery'

export default () => (
  <Page>
    <Intro />
    <WhoWeAre />
    <Gallery />
    <WhatWeDo />
    <Contact />
  </Page>
)
