import React from 'react'
import Headshot from './images/headshot.jpg'

const Director = () => {
    return(
        <div className='director container'>
            <img className='img-responsive' src={Headshot} alt='William Kenny Headshot' />
            <div className='bio container'>
                
                <p>
                    Hailing from small town Heppner Oregon, Dr. William Kenny is the founder and 
                    director of the Penn Central Wind Band. After receiving his B.S. in Music Education
                    from Oregon State University, he then went on to recieve both a M.S. and Ed. D. 
                    in Music Education from the University of Illinois at Urbana-Champaign. 
                </p>
                <p>
                    Dr. Kenny currently resides in Lewisburg, Pennsylvania with his wife who is also
                    a music educator. While not directing the Penn Central Wind Band, he is
                    a Professor of Music at Bucknell University where he is the director of bands, 
                    and more recently, served a four year term as Chair of the Faculty. 
                </p>
                <p>
                    There are many events for which that Dr. Kenny directs the PCWB, 
                    and one of his favorites is the annual concert in Hufnagle Park, which is always  
                    a highlight of his summers.
                </p>

            </div>
        </div>
    )
}

export default Director