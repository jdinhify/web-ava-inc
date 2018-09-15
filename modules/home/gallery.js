import React from 'react'
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava1.jpg',
    width: 1836,
    height: 1800,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava2.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava3.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava4.jpg',
    width: 960,
    height: 714,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava5.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava6.jpg',
    width: 718,
    height: 960,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava7.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava8.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava9.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava10.jpg',
    width: 1024,
    height: 683,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava11.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '//files.jdinh.life/ava-inc-org-au/ava12.jpg',
    width: 1024,
    height: 751,
  },
]

export default () => <Gallery photos={photos} />
