import React from 'react'
import banner from './images/plane with banner.jpg'

const About = () => {

    return(
        <div className='container'>
            <img className='img-fluid' src={banner} alt='banner' />
            <p>
                The Penn Central Wind Band is an all-volunteer organization sponsored by Bucknell
                University as a service to the region. Many members of the band live in central 
                Pennsylvania, but some travel from far afield to rehearse and perform with the
                ensemble. Although all are great players, many of the band's members hold music degrees, 
                and are music teachers and professional performers. 
            </p>
            <p>
                The PCWB, founded in 1994, is one of the few select ensembles to have been awarded 
                the Silver Sudler Scroll, awarded by the John Philip Sousa Foudation "recognizing" 
                community and adult concert bands of outstanding musical excellence." Other honors 
                include invitations to perform for the conference of the Pennsylvania Music Educators
                Association and the national convention of the Association of Concert Bands. William 
                Kenny, the band's founder and conductor, is professor of music, and has recently completed
                a four year term as chair of the university faculty at Bucknell, where he has taught
                for the past 28 years.
            </p>
            <iframe width="872" height="573" src="https://www.youtube.com/embed/Klj1KJNwS-4" 
                frameborder="0"  title='PCWB Stars and Stripes Forever'
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    )


}

export default About