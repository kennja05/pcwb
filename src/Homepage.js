import React from 'react'
import OfficialSeal from './images/PCWB seal.jpg'

const Homepage = () => {
    return(
        <div className="container-fluid">
            <h1>Pennsylvania Central Wind Band</h1>
            <h2><i>Director Dr. William Kenny</i></h2>
            <img src={OfficialSeal} className='img-fluid' alt='Penn Central Wind Band Official Seal'/>
    </div>
    )
}

export default Homepage