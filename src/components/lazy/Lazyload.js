import React from 'react'
import "react-lazy-load-image-component/src/effects/blur.css"
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function Lazyload({src,className}) {
  return (
    <LazyLoadImage  className={className|| ""} alt = "" effect='blur' src= {src}></LazyLoadImage>
  )
}
