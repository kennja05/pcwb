import React from 'react'
import TwentiethSeasonPoster from './images/20thSeasonPoster.jpg'
import Jul252015Poster from './images/Jul252015Poster.jpg'
import Jul272012Poster from './images/jul272012Poster.jpg'
import SSS2016Poster from './images/SSS2016Poster.jpg'
import SSS2017Poster from './images/SSS2017Poster.jpg'
import WC2017Poster from './images/WC2017Poster.jpg'
import WC2019Poster from './images/WC2019Poster.jpg'

const Posters = () => {
    return(
        <div>
            <img className='poster' src={TwentiethSeasonPoster} alt='20th Season Poster' />
            <img className='poster' src={Jul252015Poster} alt='July 25, 2015 Poster' />
        </div>
    )
}

export default Posters