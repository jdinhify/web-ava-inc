import React from 'react'
import Gallery from 'react-photo-gallery'

const photos = [
  {
    src: 'https://source.unsplash.com/1920x1080/?education/1',
    width: 16,
    height: 9,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/2',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/3',
    width: 1,
    height: 1,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/4',
    width: 16,
    height: 9,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/9',
    width: 1,
    height: 1,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/5',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/6',
    width: 1,
    height: 1,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/7',
    width: 16,
    height: 9,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/10',
    width: 4,
    height: 3,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/8',
    width: 1,
    height: 1,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/11',
    width: 16,
    height: 9,
  },
  {
    src: 'https://source.unsplash.com/1920x1080/?education/12',
    width: 4,
    height: 3,
  },
]

export default () => <Gallery photos={photos} />
