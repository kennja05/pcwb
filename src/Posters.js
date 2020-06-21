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
        <div className='container posters'>
            <div className='container poster-column'>
                <img className='img-responsive poster' src={TwentiethSeasonPoster} alt='20th Season Poster' />
                {/* <img className='img-responsive poster' src={Jul252015Poster} alt='July 25, 2015 Poster' /> */}
                <img className='img-responsive poster' src={Jul272012Poster} alt='July 27, 2012 Poster' />
                <img className='img-responsive poster' src={SSS2016Poster} alt='Stars Strips and Sousa 2016' />
            </div>
            <div className=' container poster-column'>
                <img className='img-responsive poster' src={SSS2017Poster} alt="Stars Strips and Sousa 2017" />
                <img className='img-responsive poster' src={WC2017Poster} alt='Weis Center 2017 Poster' />
                <img className='img-responsive poster' src={WC2019Poster} alt='Weis Center 2019' />
            </div>
        </div>
    )
}

export default Posters