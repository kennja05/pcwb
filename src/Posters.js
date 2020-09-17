import React from 'react'
import StyledTitle from './StyledComponents/StyledTitle'
import StyledHr from './StyledComponents/StyledHr'
import {Carousel, Image} from 'react-bootstrap'

import TwentiethSeasonPoster from './images/20thSeasonPoster.jpg'
import Jul252015Poster from './images/Jul252015Poster.jpg'
import Jul272012Poster from './images/jul272012Poster.jpg'
import SSS2016Poster from './images/SSS2016Poster.jpg'
import SSS2017Poster from './images/SSS2017Poster.jpg'
import WC2017Poster from './images/WC2017Poster.jpg'
import WC2019Poster from './images/WC2019Poster.jpg'

class Posters extends React.Component {
    
    componentDidMount(){
        document.title = 'PCWB | Posters'
    }
    
    render(){
        return(
            <div className='posters-page container-fluid'>
                <StyledTitle text='Concert Posters' type='h1' />
                <StyledHr />
                <Carousel interval={30000}>
                    <Carousel.Item>
                        <Image rounded fluid className='poster' src={TwentiethSeasonPoster} alt='Poster' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image rounded fluid className='poster' src={Jul252015Poster} alt='Poster' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image rounded fluid className='poster' src={Jul272012Poster} alt='Poster' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image rounded fluid className='poster' src={SSS2017Poster} alt='Poster' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image rounded fluid className='poster' src={SSS2016Poster} alt='Poster' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image rounded fluid className='poster' src={WC2019Poster} alt='Poster' />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image rounded fluid className='poster' src={WC2017Poster} alt='Poster' />
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}

export default Posters