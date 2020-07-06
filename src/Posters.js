import React from 'react'
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
            <div>
                <h1 className='display-5'>Posters</h1>
                <hr className='my-2'></hr>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='img-responsive poster' src={TwentiethSeasonPoster} alt='20th Season Poster' />
                        </div>
                        <div className='col-md-4'>
                            <img className='img-responsive poster' src={WC2019Poster} alt='Weis Center 2019' />
                        </div>
                        <div className='col-md-4'>
                            <img className='img-responsive poster' src={Jul272012Poster} alt='July 27, 2012 Poster' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='img-responsive poster' src={SSS2016Poster} alt='Stars Strips and Sousa 2016' />
                        </div>
                        <div className='col-md-4'>
                            <img className='img-responsive poster' src={SSS2017Poster} alt="Stars Strips and Sousa 2017" />
                        </div>
                        <div className='col-md-4'>
                            <img className='img-responsive poster' src={WC2017Poster} alt='Weis Center 2017 Poster' />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            {/* leaving empty for now just to put bottom poster in the center */}
                        </div>
                        <div className='col-md-4'>
                            <img className='img-responsive poster' src={Jul252015Poster} alt='July 25, 2015 Poster' />
                        </div>
                        <div className='col-md-4'>
                            {/* leaving empty for now just to put bottom poster in the center */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Posters