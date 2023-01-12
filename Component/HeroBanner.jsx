import React from 'react';
import Link from 'next/link'

import { urlFor } from '../lib/client';


const HeroBanner = ({HeroBanner:{midText,smallText,largeText1,image,product,buttonText,desc}}) => {
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{smallText}</p>
        <h3>{midText}</h3>
        <h1>{largeText1}</h1>
        <img src={urlFor(image)} alt="fascinator" className='hero-banner-image'  width={300}
        height={250} />
        <div>
          <Link href={`/product/${product}`}>
            <button type='button'>{buttonText}</button>
          </Link></div>
          <div className="desc">
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
      </div>
    </div>
  )
}

export default HeroBanner
