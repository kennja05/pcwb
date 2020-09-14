import React from 'react'
import StyledHr from './StyledComponents/StyledHr'

const WhyBand = () => {
    return(
    <div className='why-band conatiner'>
        <h1>Why Band - 2018</h1>
        <StyledHr />
        <div className='embed-responsive embed-responsive-16by9 container'>
            <iframe className='embed-responsive-item' title='Why Band' 
                src="https://www.youtube.com/embed/FoGWya6TpfE?end=220" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    </div>
    )
}

export default WhyBand