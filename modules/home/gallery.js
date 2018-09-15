import React from 'react'
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: '/static/ava1.jpg',
    width: 1836,
    height: 1800,
  },
  {
    src: '/static/ava2.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '/static/ava3.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '/static/ava4.jpg',
    width: 960,
    height: 714,
  },
  {
    src: '/static/ava5.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '/static/ava6.jpg',
    width: 718,
    height: 960,
  },
  {
    src: '/static/ava7.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '/static/ava8.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '/static/ava9.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '/static/ava10.jpg',
    width: 1024,
    height: 683,
  },
  {
    src: '/static/ava11.jpg',
    width: 960,
    height: 720,
  },
  {
    src: '/static/ava12.jpg',
    width: 1024,
    height: 751,
  },
]

export default () => <Gallery photos={photos} />
