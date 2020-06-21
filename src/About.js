import React from 'react'
import banner from './images/plane with banner.jpg'

const About = () => {

    return(
        <div className='container'>
            <img className='img-fluid' src={banner} alt='banner' />
            <p>
                The Penn Central Wind Band is a regional ensemble in Lewisburg,
                Pennsylvania. Sponsored by Bucknell University, and Directed by 
                Dr. William Kenny, the PCWB has been a fixture of the regional music
                scene for more than 25 years. 
            </p>
            <p>
                The PCWB is one of the few ensembles to have been awarded the Silver
                Sudler Scroll by the John Philip Sousa Foundation. According to the
                foundation, the purpose of the award is "To identify, recognize 
                and honor those community bands that have demonstrated particularly 
                high standards of excellence in concert activities over a period of 
                several years, and which have played a significant and leading 
                role in the cultural and musical environment in their respective 
                communities."  
            </p>
            <p>
                Every member of the band is a volunteer, and most of the musicacians are members
                of the greater music community as either music teachers or professionals. Founded, 
                organized, and directed by Dr. William Kenny, the band typically performs at various
                times throughout each summer once most of the members have completed their school years!
            </p>
            <form name='TEST' method='POST' data-netlify="true">
                <label>Your Name</label>
                <input type='text' name='name' />
            </form>
        </div>
    )


}

export default About